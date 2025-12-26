import { registerAs } from '@nestjs/config';

/**
 * Cấu hình JWT Authentication
 */
export default registerAs('jwt', () => ({
  secret:
    process.env.JWT_SECRET || 'your-super-secret-key-change-in-production',
  signOptions: {
    expiresIn: parseInt(process.env.JWT_EXPIRES_IN ?? '1800', 10), // 30 phút
    algorithm: 'HS256' as const,
    issuer: process.env.JWT_ISSUER || 'apc-backend',
    audience: process.env.JWT_AUDIENCE || 'apc-frontend',
  },
  verifyOptions: {
    issuer: process.env.JWT_ISSUER || 'apc-backend',
    audience: process.env.JWT_AUDIENCE || 'apc-frontend',
  },
  rememberMeExpiresIn: parseInt(
    process.env.JWT_REMEMBER_ME_EXPIRES_IN ?? '2592000',
    10,
  ), // 30 ngày
  refreshExpiresIn: parseInt(
    process.env.JWT_REFRESH_EXPIRES_IN ?? '604800',
    10,
  ), // 7 ngày
}));
