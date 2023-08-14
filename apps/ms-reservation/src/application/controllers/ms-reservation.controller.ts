import { Controller, Get } from '@nestjs/common';
import { MsReservationService } from '../services/ms-reservation.service';

@Controller()
export class MsReservationController {
  constructor(private readonly msReservationService: MsReservationService) {}

  @Get()
  getHello(): string {
    return this.msReservationService.getHello();
  }
}
