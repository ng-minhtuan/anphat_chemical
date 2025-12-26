import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';
import { AppModule } from '@/app.module';

// Type definitions
interface AppConfig {
  env: string;
  port: number;
  name: string;
  adminFrontendUrl: string;
  publicFrontendUrl: string;
  backendUrl: string;
  timezone: string;
  defaultLocale: string;
  debug: boolean;
  apiPrefix: string;
  version: string;
}

interface SecurityConfig {
  helmet: {
    contentSecurityPolicy: {
      directives: Record<string, string[]>;
    };
    crossOriginEmbedderPolicy: boolean;
  };
  cors: {
    origin: string[];
    credentials: boolean;
    methods: string[];
    allowedHeaders: string[];
  };
  throttle: {
    ttl: number;
    limit: number;
  };
  bcryptRounds: number;
  jwtSecretRotation: boolean;
  sessionTimeout: number;
  rememberMeDuration: number;
  maxFailedLoginAttempts: number;
  accountLockDuration: number;
}

interface SwaggerConfig {
  documentConfig: ReturnType<typeof DocumentBuilder.prototype.build>;
  swaggerOptions: SwaggerCustomOptions;
  customSiteTitle: string;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Lấy ConfigService
  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app');
  const securityConfig = configService.get<SecurityConfig>('security');
  const swaggerConfigValue = configService.get<SwaggerConfig>('swagger');

  // Security: Helmet
  if (securityConfig?.helmet) {
    app.use(helmet(securityConfig.helmet));
  }

  // Compression
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(compression());

  // CORS
  if (securityConfig?.cors) {
    app.enableCors(securityConfig.cors);
  }

  // Global prefix
  if (appConfig?.apiPrefix) {
    app.setGlobalPrefix(appConfig.apiPrefix);
  }

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger Documentation
  if (appConfig?.env !== 'production') {
    // Sử dụng config từ swagger.config.ts thay vì tạo mới
    const document = SwaggerModule.createDocument(
      app,
      swaggerConfigValue?.documentConfig,
    );
    SwaggerModule.setup(
      `${appConfig?.apiPrefix ?? 'api'}/docs`,
      app,
      document,
      swaggerConfigValue?.swaggerOptions,
    );
  }

  // Start server
  const port = appConfig?.port ?? 3000;
  await app.listen(port);

  console.log(
    `🚀 Application is running on: ${appConfig?.backendUrl ?? 'http://localhost:3000'}`,
  );
  console.log(
    `📚 Swagger Documentation: ${appConfig?.backendUrl ?? 'http://localhost:3000'}/${appConfig?.apiPrefix ?? 'api'}/docs`,
  );
  console.log(`🌍 Environment: ${appConfig?.env ?? 'development'}`);
}

void bootstrap().catch((error) => {
  console.error('Error starting application:', error);
  process.exit(1);
});
