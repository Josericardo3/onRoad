import { Module } from '@nestjs/common';
import { MsReservationController } from './application/controllers/ms-reservation.controller';
import { MsReservationService } from './application/services/ms-reservation.service';

@Module({
  imports: [],
  controllers: [MsReservationController],
  providers: [MsReservationService],
})
export class MsReservationModule {}
