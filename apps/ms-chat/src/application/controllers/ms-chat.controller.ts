import { Controller, Get } from '@nestjs/common';
import { MsChatService } from '../services/ms-chat.service';

@Controller()
export class MsChatController {
  constructor(private readonly msChatService: MsChatService) {}

  @Get()
  getHello(): string {
    return this.msChatService.getHello();
  }
}
