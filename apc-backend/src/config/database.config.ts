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
 *
 * @description
 * - Hỗ trợ connection pooling với cấu hình min/max connections
 * - Tự động load entities từ thư mục entities
 * - Hỗ trợ migrations tự động chạy khi khởi động
 * - SSL support cho production environment
 * - Logging queries với nhiều loại logger khác nhau
 *
 * @warning
 * - synchronize: CHỈ BẬT TRONG DEVELOPMENT (DB_SYNC=true)
 * - Trong production: PHẢI sử dụng migrations (DB_MIGRATIONS_RUN=true, DB_SYNC=false)
 * - SSL: BẬT trong production với DB_SSL=true
 */
export default registerAs('database', (): TypeOrmModuleOptions => {
  // Lấy retry config từ env (dùng cho connection retry logic nếu cần)
  const retryAttempts = parseInt(process.env.DB_RETRY_ATTEMPTS ?? '3', 10);
  const retryDelay = parseInt(process.env.DB_RETRY_DELAY ?? '3000', 10);

  return {
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
      // Connection pool configuration
      max: parseInt(process.env.DB_POOL_MAX ?? '10', 10),
      min: parseInt(process.env.DB_POOL_MIN ?? '2', 10),
      idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT ?? '30000', 10),
      // Retry configuration (lưu ý: TypeORM không hỗ trợ trực tiếp retry trong config)
      // Các giá trị này có thể được sử dụng trong custom connection logic
      // DB_RETRY_ATTEMPTS: số lần retry khi connection fail
      // DB_RETRY_DELAY: thời gian delay giữa các lần retry (ms)
      _retryAttempts: retryAttempts,
      _retryDelay: retryDelay,
    },
    ssl:
      process.env.DB_SSL === 'true'
        ? {
            rejectUnauthorized:
              process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false',
          }
        : false,
  };
});
