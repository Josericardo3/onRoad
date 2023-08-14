import { Injectable } from '@nestjs/common';

@Injectable()
export class MsBusManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
