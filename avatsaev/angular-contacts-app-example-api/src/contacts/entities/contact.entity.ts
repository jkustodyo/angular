import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Contact} from '../models/contact';

@Entity()
export class ContactEntity implements Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    @Column({
        nullable: false,
        length: 100,
        unique: true
    })
    name: string;

    @PrimaryColumn()
    @Column({
        unique: true,
        nullable: false,
        length: 100,
    })
    email: string;

    @Column({
        unique: true,
        nullable: false,
    })
    phone: string;

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;

    @Column({
        default: 'S'
    })
    status: string;
}
