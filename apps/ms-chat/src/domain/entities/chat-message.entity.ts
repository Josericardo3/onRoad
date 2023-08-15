import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ChatRoom } from './chat-room.entity';

@Entity()
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChatRoom, chatRoom => chatRoom.id)
  chatRoom: ChatRoom;

  @Column()
  senderId: number; // Almacena el ID del remitente

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  // Otros campos y métodos relacionados con la entidad ChatMessage
}
