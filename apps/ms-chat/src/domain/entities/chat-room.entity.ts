import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array') // Almacena un array de IDs de usuarios
  userIds: number[]; // Almacena los IDs de los usuarios

  // Otros campos y métodos relacionados con la entidad ChatRoom
}
