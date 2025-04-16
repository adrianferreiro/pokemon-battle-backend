### Flutter Pokemon Battle

Hecho como backend para [pokemon-battle-frontend](https://github.com/adrianferreiro/pokemon-battle-frontend).
API Server que permite obtener datos sobre pokemons y simular batallas basadas en sus estadísticas por medio sus endpoints.

---

# Características

- Listado de datos de los pokemons.
- Simulación de una batalla de un pokemon seleccionado contra otro aleatorio, basado en sus estadísticas.

---

# Tecnologías utilizadas

- TypeORM
- Nest.js
- SQLite3

---

# Configuración del proyecto

Requisitos

- [node & npm](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Pasos para ejecutar la aplicación:

Descargar proyecto

```
git clone https://github.com/adrianferreiro/pokemon-battle-backend.git
```

Posicionarse en la carpeta del proyecto

```
cd pokemon-battle-backend
```

Obtener dependencias con Npm

```
npm install
```

Ejecutar proyecto

```
npm run start
```

El servidor debería iniciarse en el puerto 3000 por defecto.

## Endpoints

Una vez iniciado el servidor, se pueden acceder a los siguientes endpoints:

### Listar datos de pokemons

```
GET /pokemon
```

Ejemplo de respuesta exitosa:

```json
{
  "pokemon": [
    {
      "id": "pokemon-1",
      "name": "Pikachu",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 6,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    },
    {
      "id": "pokemon-2",
      "name": "Charmander",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 4,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
    },
    {
      "id": "pokemon-3",
      "name": "Squirtle",
      "attack": 3,
      "defense": 4,
      "hp": 3,
      "speed": 3,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
    },
    {
      "id": "pokemon-4",
      "name": "Bulbasur",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 3,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
    },
    {
      "id": "pokemon-5",
      "name": "Eevee",
      "attack": 4,
      "defense": 3,
      "hp": 4,
      "speed": 5,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
    }
  ]
}
```

### Simular una batalla

```
POST /battle
```

El cual espera recibir un objeto con el siguiente campos:

```json
{
  "pokemonId": string
}
```

Ejemplo de respuesta exitosa:

```json
{
  "playerPokemon": {
    "id": "pokemon-2",
    "name": "Charmander",
    "attack": 4,
    "defense": 3,
    "hp": 3,
    "speed": 4,
    "type": "Type",
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    "hpInitial": 3,
    "hpFinal": 0,
    "totalDamageDealt": 2
  },
  "opponentPokemon": {
    "id": "pokemon-1",
    "name": "Pikachu",
    "attack": 4,
    "defense": 3,
    "hp": 3,
    "speed": 6,
    "type": "Type",
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
    "hpInitial": 3,
    "hpFinal": 1,
    "totalDamageDealt": 3
  },
  "turns": [
    {
      "turn": 1,
      "attacker": "Pikachu",
      "defender": "Charmander",
      "damage": 1,
      "defenderRemainingHp": 2
    },
    {
      "turn": 2,
      "attacker": "Charmander",
      "defender": "Pikachu",
      "damage": 1,
      "defenderRemainingHp": 2
    },
    {
      "turn": 3,
      "attacker": "Pikachu",
      "defender": "Charmander",
      "damage": 1,
      "defenderRemainingHp": 1
    },
    {
      "turn": 4,
      "attacker": "Charmander",
      "defender": "Pikachu",
      "damage": 1,
      "defenderRemainingHp": 1
    },
    {
      "turn": 5,
      "attacker": "Pikachu",
      "defender": "Charmander",
      "damage": 1,
      "defenderRemainingHp": 0
    }
  ],
  "winner": {
    "id": "pokemon-1",
    "name": "Pikachu",
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
  },
  "totalTurns": 5
}
```
