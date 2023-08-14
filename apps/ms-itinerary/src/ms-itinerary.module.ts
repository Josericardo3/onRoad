import { Module } from '@nestjs/common';
import { MsItineraryController } from './application/controllers/ms-itinerary.controller';
import { MsItineraryService } from './application/services/ms-itinerary.service';

@Module({
  imports: [],
  controllers: [MsItineraryController],
  providers: [MsItineraryService],
})
export class MsItineraryModule {}
