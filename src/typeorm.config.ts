import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Clock } from './models/clock.entity';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '32119294h',
  database: 'ClockAngleDB',
  synchronize: true,
  logging: true,
  entities: [Clock],
};

export default config;
