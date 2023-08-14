import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { get } from 'http';
import { ApiTags } from '@nestjs/swagger';
@Controller()
@ApiTags('onroad')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  newItinerary(@Body() body: any): string {
    console.log("1. Enviando por post: ", body);
    return this.appService.newItinerary(body); 
  }
}
