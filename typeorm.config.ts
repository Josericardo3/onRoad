import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'envConfig'
const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: config.hostDb,
  port: config.portDb,
  username: config.usernameDb,
  password: config.passwordDb,
  database: config.databaseDb,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};

export default typeOrmConfig;
