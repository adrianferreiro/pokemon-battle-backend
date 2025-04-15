import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { PokemonModule } from '../pokemon/pokemon.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Battle]),
    PokemonModule,
  ],
  controllers: [BattleController],
  providers: [BattleService],
})
export class BattleModule { }
