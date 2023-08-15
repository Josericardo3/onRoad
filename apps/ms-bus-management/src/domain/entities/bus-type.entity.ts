import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bus } from './bus.entity';

@Entity()
export class BusType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Bus, bus => bus.type)
  buses: Bus[];
}
