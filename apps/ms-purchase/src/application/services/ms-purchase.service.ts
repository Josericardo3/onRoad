import { Injectable } from '@nestjs/common';

@Injectable()
export class MsPurchaseService {
  getHello(): string {
    return 'Hello World!';
  }
}
