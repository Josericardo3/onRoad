import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Itinerary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originCity: string;

  @Column()
  destinationCity: string;

  @Column({ type: 'time' })
  departureTime: string;

  @Column({ type: 'time' })
  arrivalTime: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  assignedBusId: number;
}
