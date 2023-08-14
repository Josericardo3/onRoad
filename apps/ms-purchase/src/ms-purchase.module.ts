import { Module } from '@nestjs/common';
import { MsPurchaseController } from './application/controllers/ms-purchase.controller';
import { MsPurchaseService } from './application/services/ms-purchase.service';

@Module({
  imports: [],
  controllers: [MsPurchaseController],
  providers: [MsPurchaseService],
})
export class MsPurchaseModule {}
