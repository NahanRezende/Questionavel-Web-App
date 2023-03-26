import { DataSource } from 'typeorm';
import 'dotenv/config';

export const dataSource = new DataSource({
  name: 'default',
  schema: 'public',
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST,
  port: Number(process.env.POSTGRESQL_PORT),
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: 'postgres',
  synchronize: false,
  logging: false,
  migrationsTableName: 'migration',
  entities:
    process.env.NODE_ENV === 'dev'
      ? ['src/**/typeorm/entities/*.ts']
      : ['dist/**/typeorm/entities/*.js'],
  migrations:
    process.env.NODE_ENV === 'dev'
      ? ['src/shared/typeorm/migrations/*.ts']
      : ['dist/shared/typeorm/migrations/*.js'],
});
