import { Controller, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) { }

  @Post()
  async start(@Body('selectedPokemonId') selectedPokemonId: string) {
    return this.battleService.startBattle(selectedPokemonId);
  }
}
