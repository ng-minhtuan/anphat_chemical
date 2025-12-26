import { registerAs } from '@nestjs/config';
import { DocumentBuilder } from '@nestjs/swagger';

/**
 * Cấu hình Swagger Documentation
 */
export default registerAs('swagger', () => {
  const title = process.env.SWAGGER_TITLE || 'APC Company API';
  const description =
    process.env.SWAGGER_DESCRIPTION ||
    'API Documentation cho hệ thống quản lý website công ty';

  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    // Add development server
    .addServer(
      process.env.BACKEND_URL ?? 'http://localhost:3000',
      'Development Server',
    )
    // Add production server (nếu có)
    .addServer(
      process.env.PRODUCTION_URL ?? 'https://api.example.com',
      'Production Server',
    )
    // Add tags
    .addTag('auth', 'Authentication endpoints')
    .addTag('employees', 'Employee management')
    .addTag('products', 'Product management')
    .addTag('categories', 'Category management')
    .addTag('news', 'News management')
    .addTag('contacts', 'Contact management')
    .addTag('customers', 'Customer management')
    .addTag('authors', 'Author management')
    .addTag('files', 'File management')
    .addTag('settings', 'Settings management')
    .addTag('dashboard', 'Dashboard statistics');

  const documentConfig = config.build();

  return {
    documentConfig,
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle:
      process.env.SWAGGER_TITLE || 'APC Backend API Documentation',
  };
});
