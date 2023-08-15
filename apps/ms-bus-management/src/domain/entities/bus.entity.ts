const { Entity, PrimaryGeneratedColumn, Column, ManyToOne } = require('typeorm');
// const { BusType } = require('../entities/bus-type.entity');
import { BusType } from './bus-type.entity';
@Entity()
export class Bus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plateNumber: string;

  @Column()
  operator: string;

  @ManyToOne(() => BusType, (busType) => busType.buses)
  type: BusType;
}

