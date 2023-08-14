import { Controller, Get } from '@nestjs/common';
import { MsPurchaseService } from '../services/ms-purchase.service';

@Controller()
export class MsPurchaseController {
  constructor(private readonly msPurchaseService: MsPurchaseService) {}

  @Get()
  getHello(): string {
    return this.msPurchaseService.getHello();
  }
}
