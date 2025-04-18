
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { BattleModule } from './battle/battle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PokemonModule,
    BattleModule,
  ],
})
export class AppModule { }

