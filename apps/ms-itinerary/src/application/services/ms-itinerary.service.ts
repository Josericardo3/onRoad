import { Injectable } from '@nestjs/common';

@Injectable()
export class MsItineraryService {
  getHello(): string {
    return 'Hello World!';
  }
}
