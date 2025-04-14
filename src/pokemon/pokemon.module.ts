import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonSeeder } from './pokemon.seed';


@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonSeeder],
  exports: [PokemonService, PokemonSeeder],
})
export class PokemonModule { }
