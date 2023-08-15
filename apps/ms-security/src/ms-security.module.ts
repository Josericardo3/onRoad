import { Module, OnModuleInit } from '@nestjs/common';
import { AuthenticationController } from './application/controllers/authentication.controller';
import { AuthenticationService } from './application/services/authentication.service';
import { UserRepository } from './infraestructure/repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SignInUseCase } from './application/use-cases/sign-in.use-case';
import { SignUpUseCase } from './application/use-cases/sign-up.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig, { dataSourceOptions } from 'apps/ms-security/src/infraestructure/typeorm.config';
import { Connection } from 'typeorm';
import dataSource from 'apps/ms-security/src/infraestructure/typeorm.config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'onRoadToken',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,UserRepository,SignInUseCase,SignUpUseCase],
})
export class MsSecurityModule implements OnModuleInit {
  constructor(private connection: Connection) {}
  async onModuleInit() {
    try {
      console.log('antes');
      this.connection.synchronize();
      console.log('despues');
      const queryResult = await this.connection.query('SELECT 1');
      console.log('Query result:', queryResult);
      console.log('Connected to the database.');
    } catch (error) {
      console.error('Failed to connect to the database:', error.message);
    }
    
  }
}
