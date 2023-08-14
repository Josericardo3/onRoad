import { Module } from '@nestjs/common';
import { MsBusManagementController } from './application/controllers/ms-bus-management.controller';
import { MsBusManagementService } from './application/services/ms-bus-management.service';

@Module({
  imports: [],
  controllers: [MsBusManagementController],
  providers: [MsBusManagementService],
})
export class MsBusManagementModule {}
