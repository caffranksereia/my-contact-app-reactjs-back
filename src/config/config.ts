import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Qazse0612',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/{.ts,*js}'],
  migrationsRun: true,
  synchronize: true,
};
