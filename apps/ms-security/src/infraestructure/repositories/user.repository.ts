import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(username: string, password: string): Promise<User> {
    const user = new User();
    user.username = username;
    user.password = password;

    return await this.save(user);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return await this.findOne({ where: { username } });
  }
}
