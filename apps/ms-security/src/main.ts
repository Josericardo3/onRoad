import { NestFactory } from '@nestjs/core';
import { MsSecurityModule } from './ms-security.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsSecurityModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3006,
      },
    },
  );
  await app.listen();
}
bootstrap();