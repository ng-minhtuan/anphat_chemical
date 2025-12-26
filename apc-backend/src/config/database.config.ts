import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Các loại logger hợp lệ cho TypeORM
 */
type TypeORMLoggerType =
  | 'advanced-console'
  | 'simple-console'
  | 'formatted-console'
  | 'file'
  | 'debug';

/**
 * Validate và trả về logger type hợp lệ
 */
const getLoggerType = (): TypeORMLoggerType => {
  const loggerEnv = process.env.DB_LOGGER || 'advanced-console';
  const validLoggers: TypeORMLoggerType[] = [
    'advanced-console',
    'simple-console',
    'formatted-console',
    'file',
    'debug',
  ];
  return validLoggers.includes(loggerEnv as TypeORMLoggerType)
    ? (loggerEnv as TypeORMLoggerType)
    : 'advanced-console';
};

/**
 * Cấu hình kết nối PostgreSQL với TypeORM
 */
export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'anphat_chemical',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
    migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
    synchronize: process.env.DB_SYNC === 'true', // ⚠️ CHỈ BẬT TRONG DEVELOPMENT
    logging: process.env.DB_LOGGING === 'true',
    logger: getLoggerType(),
    extra: {
      max: parseInt(process.env.DB_POOL_MAX ?? '10', 10),
      min: parseInt(process.env.DB_POOL_MIN ?? '2', 10),
      idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT ?? '30000', 10),
    },
    ssl:
      process.env.DB_SSL === 'true'
        ? {
            rejectUnauthorized:
              process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false',
          }
        : false,
  }),
);
