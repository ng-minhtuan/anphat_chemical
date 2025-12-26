import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule, ThrottlerModuleOptions } from '@nestjs/throttler';

// Config imports
import appConfig from '@config/app.config';
import databaseConfig from '@config/database.config';
import cacheConfig from '@config/cache.config';
import jwtConfig from '@config/jwt.config';
import securityConfig from '@config/security.config';
import uploadConfig from '@config/upload.config';
import emailConfig from '@config/email.config';
import swaggerConfig from '@config/swagger.config';

// Common imports (sẽ tạo sau)
// import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// import { TransformInterceptor } from './common/interceptors/transform.interceptor';
// import { ValidationPipe } from './common/pipes/validation.pipe';

@Module({
  imports: [
    // Config Module - Phải import đầu tiên
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
        cacheConfig,
        jwtConfig,
        securityConfig,
        uploadConfig,
        emailConfig,
        swaggerConfig,
      ],
      envFilePath: ['.env.local', '.env'],
    }),

    // Database Module
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),

    // Cache Module
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return configService.get<unknown>('cache');
      },
      inject: [ConfigService],
      isGlobal: true,
    }),

    // Throttler Module (Rate Limiting)
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): ThrottlerModuleOptions => {
        const securityConfig = configService.get<{
          throttle: { ttl: number; limit: number };
        }>('security');
        return {
          throttlers: [
            {
              ttl: securityConfig?.throttle.ttl ?? 60,
              limit: securityConfig?.throttle.limit ?? 100,
            },
          ],
        };
      },
      inject: [ConfigService],
    }),

    // Modules sẽ được thêm sau
    // AuthModule,
    // EmployeesModule,
    // ProductsModule,
    // ...
  ],
  controllers: [],
  providers: [
    // Global Exception Filter
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // Global Response Interceptor
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
    // Global Validation Pipe
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class AppModule {}
