<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

APC Backend - Hệ thống quản lý website công ty An Phát Chemical

Backend API được xây dựng với NestJS, TypeScript, PostgreSQL, và Redis.

## Yêu Cầu Hệ Thống

- Node.js >= 18.x
- PostgreSQL >= 14.x
- Redis >= 6.x (optional, cho cache)

## Cài Đặt

### 1. Clone repository và cài đặt dependencies

```bash
cd apc-backend
npm install
```

### 2. Cấu hình Environment Variables

```bash
# Copy file .env.example thành .env
cp .env.example .env

# Chỉnh sửa file .env với thông tin database, JWT secret, etc.
```

### 3. Tạo Database

```bash
# Tạo database PostgreSQL
createdb anphat_chemical
```

### 4. Chạy Migrations (khi có)

```bash
npm run migration:run
```

## Chạy Ứng Dụng

```bash
# Development mode (với hot reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

## Cấu Trúc Dự Án

```
src/
├── config/              # Cấu hình (database, jwt, email, etc.)
├── common/              # Common utilities
│   ├── decorators/      # Custom decorators
│   ├── filters/         # Exception filters
│   ├── guards/          # Auth guards
│   ├── interceptors/    # Response interceptors
│   └── pipes/           # Validation pipes
├── modules/             # Feature modules
│   ├── auth/           # Authentication
│   ├── employees/      # Quản lý nhân viên
│   ├── products/       # Quản lý sản phẩm
│   ├── categories/     # Quản lý danh mục
│   ├── news/           # Quản lý tin tức
│   ├── contacts/       # Quản lý liên hệ
│   ├── customers/      # Quản lý khách hàng
│   ├── authors/        # Quản lý tác giả
│   ├── files/          # Quản lý file uploads
│   ├── settings/       # Quản lý settings
│   ├── activity-logs/  # Activity logs
│   ├── upload/         # File upload service
│   ├── email/          # Email service
│   └── dashboard/      # Dashboard stats
├── app.module.ts       # Root module
└── main.ts             # Application entry point
```

## API Documentation

Sau khi chạy ứng dụng, truy cập Swagger documentation tại:

```
http://localhost:3000/api/docs
```

## Environment Variables

Xem file `.env.example` để biết danh sách đầy đủ các biến môi trường cần thiết.

**Lưu ý quan trọng:**
- ⚠️ `JWT_SECRET` phải là chuỗi ngẫu nhiên mạnh (ít nhất 32 ký tự)
- ⚠️ `DB_SYNC` phải là `false` trong production
- ⚠️ Sử dụng migrations để quản lý schema trong production

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
