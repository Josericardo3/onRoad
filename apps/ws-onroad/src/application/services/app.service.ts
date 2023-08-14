import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ITINERARY_SERVICE') private clientItinerary: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }
  
  newItinerary(itinerary: any){
    console.log("2. Enviando por post: ", itinerary);
    this.clientItinerary.emit('new_itinerary', itinerary);
    return 'send_queue'
  }
}
