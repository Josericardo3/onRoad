import { NestFactory } from '@nestjs/core';
import { MsPurchaseModule } from './ms-purchase.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsPurchaseModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3004,
      },
    },
  );
  await app.listen();
}
bootstrap();