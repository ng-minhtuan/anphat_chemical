import { registerAs } from '@nestjs/config';
import { redisStore } from 'cache-manager-ioredis-yet';

/**
 * Cấu hình Redis Cache
 */
export default registerAs('cache', () => ({
  store: redisStore,
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
  password: process.env.REDIS_PASSWORD || undefined,
  db: parseInt(process.env.REDIS_DB ?? '0', 10),
  ttl: parseInt(process.env.CACHE_TTL ?? '3600', 10), // 1 giờ
  max: parseInt(process.env.CACHE_MAX ?? '100', 10),
  connectTimeout: parseInt(process.env.REDIS_CONNECT_TIMEOUT ?? '10000', 10),
  retryStrategy: (times: number) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  enableOfflineQueue: false,
  enableReadyCheck: true,
}));
