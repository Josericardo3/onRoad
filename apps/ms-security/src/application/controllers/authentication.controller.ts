import { Controller, Body } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AuthenticationService } from '../services/authentication.service';
import { SignUpDto } from '../dtos/sign-up.dto';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignUpUseCase } from '../use-cases/sign-up.use-case';
import { SignInUseCase } from '../use-cases/sign-in.use-case';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase,
  ) {}

  @EventPattern('authentication.signup')
  async handleSignUpEvent(@Body() signUpDto: SignUpDto) {
    console.log('recibido: ', signUpDto);
    return this.signUpUseCase.execute(signUpDto);
  }

  @EventPattern('authentication.signin')
  async handleSignInEvent(@Body() signInDto: SignInDto) {
    return this.signInUseCase.execute(signInDto);
  }
}
