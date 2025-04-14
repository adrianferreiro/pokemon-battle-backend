import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PokemonSeeder } from './pokemon/pokemon.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  const seeder = app.get(PokemonSeeder);
  await seeder.run();
}
bootstrap();