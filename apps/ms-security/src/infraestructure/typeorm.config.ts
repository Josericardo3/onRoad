import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'onroaduser',
  password: 'Cercado.2022',
  database: 'onroaddb',
  entities: [('dist/**/*.entity.js')],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
  logging: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

