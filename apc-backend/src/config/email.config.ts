import { registerAs } from '@nestjs/config';

/**
 * Cấu hình email service với Nodemailer
 */
export default registerAs('email', () => ({
  transport: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
    tls: {
      rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
    },
  },
  defaults: {
    from: `"${process.env.EMAIL_FROM_NAME || 'APC Company'}" <${process.env.EMAIL_FROM || 'noreply@example.com'}>`,
  },
  template: {
    dir: __dirname + '/../../modules/email/templates',
    adapter: 'handlebars',
    options: {
      strict: true,
    },
  },
  preview: process.env.EMAIL_PREVIEW === 'true',
}));
