import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../infraestructure/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(username: string, password: string): Promise<User> {
    // Lógica para registrar un nuevo usuario
    // Puedes usar el userRepository para interactuar con la base de datos
    // Retorna el usuario recién creado
    return null;
  }

  async signIn(username: string, password: string): Promise<{ accessToken: string }> {
    // Lógica para autenticar al usuario y generar un token de acceso
    // Retorna el token de acceso
    return null;
  }
  async generateJwtToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
