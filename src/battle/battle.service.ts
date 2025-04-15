import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Battle } from './entities/battle.entity';
import { Turn } from './interfaces/turn.interface';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepo: Repository<Pokemon>,
    @InjectRepository(Battle)
    private readonly battleRepo: Repository<Battle>,
  ) { }

  async startBattle(selectedPokemonId: string) {
    try {
      const player = await this.pokemonRepo.findOneBy({ id: selectedPokemonId });
      if (!player) throw new NotFoundException('Selected Pokémon not found.');

      const opponent = await this.pokemonRepo
        .createQueryBuilder()
        .where('id != :id', { id: selectedPokemonId })
        .orderBy('RANDOM()')
        .getOne();

      if (!opponent) throw new NotFoundException('No opponents available.');

      // Simulación
      let playerHp = player.hp;
      let opponentHp = opponent.hp;
      const turns: Turn[] = [];
      let turnCount = 0;
      let playerTotalDamage = 0;
      let opponentTotalDamage = 0;

      const getFirst = () => {
        if (player.speed > opponent.speed) return [player, opponent];
        if (opponent.speed > player.speed) return [opponent, player];
        return player.attack >= opponent.attack ? [player, opponent] : [opponent, player];
      };

      const [first, second] = getFirst();

      while (playerHp > 0 && opponentHp > 0) {
        for (const attacker of [first, second]) {
          if (playerHp <= 0 || opponentHp <= 0) break;

          const defender = attacker.id === player.id ? opponent : player;
          let damage = attacker.attack - defender.defense;
          if (damage <= 0) damage = 1;

          if (defender.id === player.id) {
            playerHp -= damage;
            opponentTotalDamage += damage;
          } else {
            opponentHp -= damage;
            playerTotalDamage += damage;
          }

          turnCount++;

          turns.push({
            turn: turnCount,
            attacker: attacker.name,
            defender: defender.name,
            damage,
            defenderRemainingHp: Math.max(attacker.id === player.id ? opponentHp : playerHp, 0),
          });
        }
      }

      const winner = playerHp > 0 ? player : opponent;

      const battle = this.battleRepo.create({
        playerPokemonId: player.id,
        opponentPokemonId: opponent.id,
        winnerId: winner.id,
        playerHpFinal: Math.max(playerHp, 0),
        opponentHpFinal: Math.max(opponentHp, 0),
        playerTotalDamageDealt: playerTotalDamage,
        opponentTotalDamageDealt: opponentTotalDamage,
        totalTurns: turnCount,
      });

      await this.battleRepo.save(battle);

      return {
        playerPokemon: {
          ...player,
          hpInitial: player.hp,
          hpFinal: Math.max(playerHp, 0),
          totalDamageDealt: playerTotalDamage,
        },
        opponentPokemon: {
          ...opponent,
          hpInitial: opponent.hp,
          hpFinal: Math.max(opponentHp, 0),
          totalDamageDealt: opponentTotalDamage,
        },
        turns,
        winner: {
          id: winner.id,
          name: winner.name,
          imageUrl: winner.imageUrl,
        },
        totalTurns: turnCount,
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      throw new InternalServerErrorException('Error during battle process.');
    }
  }
}
