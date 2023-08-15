import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../infraestructure/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(username: string, password: string): Promise<User> {
    console.log("repo", this.userRepository)
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await this.userRepository.findOne({ where: { username } });
    if (existingUser) {
      console.log('existingUser: ', existingUser);
      throw new UnauthorizedException('Username already exists');
    }

    // Crear un nuevo usuario y guardarlo en la base de datos
    console.log("repo", this.userRepository)
    const newUser = this.userRepository.create({ username, password });
    console.log('newUser: ', newUser);
    await this.userRepository.save(newUser);

    return newUser;
  }

  async signIn(username: string, password: string): Promise<{ accessToken: string }> {
    // Buscar al usuario en la base de datos por el nombre de usuario
    const user = await this.userRepository.findOne({ where: { username } });

    // Verificar si el usuario existe y la contraseña es correcta
    if (user && user.password === password) {
      // Generar un token de acceso y retornarlo en la respuesta
      const accessToken = await this.generateJwtToken({ sub: user.id, username: user.username });
      return { accessToken };
    }

    // Si el usuario no existe o la contraseña es incorrecta, lanzar una excepción
    throw new UnauthorizedException('Invalid credentials');
  }

  async generateJwtToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
