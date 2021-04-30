import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'task_management',
  password: 'task_management',
  database: 'task_management',
  autoLoadEntities: true,
  synchronize: true,
};
