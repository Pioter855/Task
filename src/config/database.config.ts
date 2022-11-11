import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export default registerAs('database', (): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) || 3308,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    entities: [__dirname + '/../**/*.entity{.js,.ts}'],
    synchronize: false,
    migrations: [__dirname + '/../migration/*.js'],
    migrationsTableName: 'migrations_typeorm',
    migrationsRun: true,
    logging: process.env.DATABASE_IS_LOGGING_ON === 'true',
  };
});
