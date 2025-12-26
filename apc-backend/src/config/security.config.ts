import { registerAs } from '@nestjs/config';

/**
 * Cấu hình bảo mật (Helmet, CORS, Rate Limiting, Bcrypt)
 */
export default registerAs('security', () => {
  // Parse CORS origins từ environment variable
  const corsOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
    : ['http://localhost:3001', 'http://localhost:3002'];

  return {
    helmet: {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", 'data:', 'https:'],
        },
      },
      crossOriginEmbedderPolicy: false,
    },
    throttle: {
      ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10),
      limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
    },
    cors: {
      origin: corsOrigins,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    },
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS ?? '10', 10),
    jwtSecretRotation: process.env.JWT_SECRET_ROTATION === 'true',
    sessionTimeout: parseInt(process.env.SESSION_TIMEOUT ?? '1800', 10), // 30 phút
    rememberMeDuration: parseInt(
      process.env.REMEMBER_ME_DURATION ?? '2592000',
      10,
    ), // 30 ngày
    maxFailedLoginAttempts: parseInt(
      process.env.MAX_FAILED_LOGIN_ATTEMPTS ?? '5',
      10,
    ),
    accountLockDuration: parseInt(
      process.env.ACCOUNT_LOCK_DURATION ?? '900',
      10,
    ), // 15 phút
  };
});
