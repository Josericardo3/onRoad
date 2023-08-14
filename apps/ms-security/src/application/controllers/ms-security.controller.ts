import { Controller, Get } from '@nestjs/common';
import { MsSecurityService } from '../services/ms-security.service';

@Controller()
export class MsSecurityController {
  constructor(private readonly msSecurityService: MsSecurityService) {}

  @Get()
  getHello(): string {
    return this.msSecurityService.getHello();
  }
}
