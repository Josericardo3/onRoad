import { Injectable } from '@nestjs/common';

@Injectable()
export class MsReservationService {
  getHello(): string {
    return 'Hello World!';
  }
}
