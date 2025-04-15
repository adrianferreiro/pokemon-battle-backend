import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemonTable1744593620292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemon',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'attack',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'defense',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'hp',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'speed',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'imageUrl',
            type: 'varchar',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemon');
  }
}
