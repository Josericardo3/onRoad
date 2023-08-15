import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { get } from 'http';
import { ApiTags } from '@nestjs/swagger';
@Controller()
@ApiTags('onroad')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  
  @Post('newUser')
  newUser(@Body() body: any): string {
    console.log("1. Enviando por post: ", body);
    return this.appService.newUser(body); 
  }

}
