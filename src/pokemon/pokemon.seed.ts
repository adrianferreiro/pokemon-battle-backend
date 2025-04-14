import { Injectable } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Injectable()
export class PokemonSeeder {
    constructor(private readonly pokemonService: PokemonService) { }

    async run() {
        await this.pokemonService.create({
            "id": "pokemon-1",
            "name": "Pikachu",
            "attack": 4,
            "defense": 3,
            "hp": 3,
            "speed": 6,
            "type": "Type",
            "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
        });
        await this.pokemonService.create({
            "id": "pokemon-2",
            "name": "Charmander",
            "attack": 4,
            "defense": 3,
            "hp": 3,
            "speed": 4,
            "type": "Type",
            "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
        });
        await this.pokemonService.create({
            "id": "pokemon-3",
            "name": "Squirtle",
            "attack": 3,
            "defense": 4,
            "hp": 3,
            "speed": 3,
            "type": "Type",
            "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
        });
        await this.pokemonService.create({
            "id": "pokemon-4",
            "name": "Bulbasur",
            "attack": 4,
            "defense": 3,
            "hp": 3,
            "speed": 3,
            "type": "Type",
            "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
        });
        await this.pokemonService.create({
            "id": "pokemon-5",
            "name": "Eevee",
            "attack": 4,
            "defense": 3,
            "hp": 4,
            "speed": 5,
            "type": "Type",
            "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
        });
    }
}