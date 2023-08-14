import { Controller, Get } from '@nestjs/common';
import { MsItineraryService } from '../services/ms-itinerary.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MsItineraryController {
  constructor(private readonly msItineraryService: MsItineraryService) {}

  // @Get()
  // getHello(): string {
  //   return this.msItineraryService.getHello();
  // }
  @EventPattern('new_itinerary')
  handleNewItinerary(data:any){
    console.log("esta es la informacion enviada: ",data)
  }
}
