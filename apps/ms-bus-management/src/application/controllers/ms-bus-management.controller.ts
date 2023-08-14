import { Controller, Get } from '@nestjs/common';
import { MsBusManagementService } from '../services/ms-bus-management.service';

@Controller()
export class MsBusManagementController {
  constructor(private readonly msBusManagementService: MsBusManagementService) {}

  @Get()
  getHello(): string {
    return this.msBusManagementService.getHello();
  }
}
