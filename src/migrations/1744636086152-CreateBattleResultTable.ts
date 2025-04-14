import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBattleResultTable1744636086152 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'battle_result',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'playerPokemonId',
                        type: 'integer',
                    },
                    {
                        name: 'opponentPokemonId',
                        type: 'integer',
                    },
                    {
                        name: 'winnerId',
                        type: 'integer',
                    },
                    {
                        name: 'playerHpFinal',
                        type: 'integer',
                    },
                    {
                        name: 'opponentHpFinal',
                        type: 'integer',
                    },
                    {
                        name: 'playerTotalDamageDealt',
                        type: 'integer',
                    },
                    {
                        name: 'opponentTotalDamageDealt',
                        type: 'integer',
                    },
                    {
                        name: 'totalTurns',
                        type: 'integer',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('battle_result');
    }
}
