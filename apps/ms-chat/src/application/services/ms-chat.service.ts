import { Injectable } from '@nestjs/common';

@Injectable()
export class MsChatService {
  getHello(): string {
    return 'Hello World!';
  }
}
