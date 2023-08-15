import { Injectable } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { SignInDto } from '../dtos/sign-in.dto';

@Injectable()
export class SignInUseCase {
  constructor(private readonly authService: AuthenticationService) {}

  async execute(signInDto: SignInDto): Promise<any> {
    const { username, password } = signInDto;
    const { accessToken } = await this.authService.signIn(username, password);
    return { accessToken };
  }
}
