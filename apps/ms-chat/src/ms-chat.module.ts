import { Module } from '@nestjs/common';
import { MsChatController } from './application/controllers/ms-chat.controller';
import { MsChatService } from './application/services/ms-chat.service';

@Module({
  imports: [],
  controllers: [MsChatController],
  providers: [MsChatService],
})
export class MsChatModule {}
