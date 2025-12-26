import { registerAs } from '@nestjs/config';

/**
 * Cấu hình chung cho ứng dụng
 */
export default registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT ?? '3000', 10),
  name: process.env.APP_NAME || 'APC Backend',
  adminFrontendUrl: process.env.ADMIN_FRONTEND_URL || 'http://localhost:3001',
  publicFrontendUrl: process.env.PUBLIC_FRONTEND_URL || 'http://localhost:3002',
  backendUrl: process.env.BACKEND_URL || 'http://localhost:3000',
  timezone: process.env.TZ || 'Asia/Ho_Chi_Minh',
  defaultLocale: process.env.DEFAULT_LOCALE || 'vi',
  debug: process.env.DEBUG === 'true',
  apiPrefix: process.env.API_PREFIX || 'api',
  version: process.env.APP_VERSION || '1.0.0',
}));
