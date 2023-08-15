import { Injectable } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { SignUpDto } from '../dtos/sign-up.dto';

@Injectable()
export class SignUpUseCase {
  constructor(private readonly authService: AuthenticationService) {}

  async execute(signUpDto: SignUpDto): Promise<any> {
    const { username, password } = signUpDto;
    return this.authService.signUp(username, password);
  }
}
