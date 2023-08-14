import { NestFactory } from '@nestjs/core';
import { MsReservationModule } from './ms-reservation.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsReservationModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3005,
      },
    },
  );
  await app.listen();
}
bootstrap();