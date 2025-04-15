import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }


  @Get()
  async findAll() {
    const pokemonList = await this.pokemonService.findAll();
    return { pokemon: pokemonList };
  }
}
