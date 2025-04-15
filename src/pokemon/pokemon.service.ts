import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) { }

  async findAll(): Promise<Pokemon[]> {
    try {
      return await this.pokemonRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving Pokémon list');
    }
  }

  async create(data: Partial<Pokemon>): Promise<Pokemon> {
    try {
      const pokemon = this.pokemonRepository.create(data);
      return await this.pokemonRepository.save(pokemon);
    } catch (error) {
      throw new InternalServerErrorException('Error creating Pokémon');
    }
  }
}
