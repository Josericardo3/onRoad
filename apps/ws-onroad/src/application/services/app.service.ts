import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('SECURITY_SERVICE') private clientSecurity: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }
  
  newUser(user: any){
    this.clientSecurity.emit('authentication.signup', user);
    return 'send_queue'
  }
}
