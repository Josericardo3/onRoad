import { Module } from '@nestjs/common';
import { MsSecurityController } from './application/controllers/ms-security.controller';
import { MsSecurityService } from './application/services/ms-security.service';

@Module({
  imports: [],
  controllers: [MsSecurityController],
  providers: [MsSecurityService],
})
export class MsSecurityModule {}
