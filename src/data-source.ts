import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE_NAME || 'pokemon.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
});
