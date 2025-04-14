import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Battle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    playerPokemonId: string;

    @Column()
    opponentPokemonId: string;

    @Column()
    winnerId: string;

    @Column()
    playerHpFinal: number;

    @Column()
    opponentHpFinal: number;

    @Column()
    playerTotalDamageDealt: number;

    @Column()
    opponentTotalDamageDealt: number;

    @Column()
    totalTurns: number;

    @CreateDateColumn()
    createdAt: Date;
}
