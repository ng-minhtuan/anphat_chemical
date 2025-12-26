# 📘 Tài Liệu Dự Án Website - Phiên Bản Đầy Đủ

## 📑 Mục Lục

1. [Tổng Quan Dự Án](#tong-quan)
2. [Công Nghệ Sử Dụng](#cong-nghe)
3. [Kiến Trúc Hệ Thống](#kien-truc)
4. [Chức Năng Chi Tiết](#chuc-nang)
5. [Cơ Sở Dữ Liệu](#co-so-du-lieu)
6. [Hệ Thống Upload & Lưu Trữ](#upload-storage)
7. [Authentication & Security](#auth-security)
8. [Giao Diện Người Dùng](#giao-dien)
9. [API Documentation](#api-docs)
10. [Cài Đặt & Triển Khai](#cai-dat)
11. [Testing & Quality Assurance](#testing)
12. [Monitoring & Maintenance](#monitoring)
13. [Business Rules & Workflows](#business-rules)
14. [Quy Trình Phát Triển](#quy-trinh)
15. [Checklist & Roadmap](#checklist)

---

## 1. Tổng Quan Dự Án {#tong-quan}

### 1.1 Mục Đích
Xây dựng hệ thống website bao gồm trang quản trị (Admin) và trang người dùng (User) để quản lý và hiển thị thông tin sản phẩm, tin tức, và tương tác với khách hàng.

### 1.2 Phạm Vi
Website gồm 2 phần chính:

**Trang Quản Trị (Admin):** Quản lý toàn bộ nội dung và dữ liệu
- Quản lý nhân viên
- Quản lý sản phẩm & danh mục
- Quản lý tin tức & tác giả
- Quản lý yêu cầu liên hệ
- Quản lý khách hàng
- Quản lý file uploads
- Quản lý cài đặt hệ thống
- Xem nhật ký hoạt động
- Dashboard & Analytics

**Trang Người Dùng:** Hiển thị thông tin công ty, sản phẩm, tin tức
- Trang chủ
- Giới thiệu công ty
- Danh sách sản phẩm & chi tiết
- Tin tức & blog
- Liên hệ

### 1.3 Đối Tượng Sử Dụng
- **Quản trị viên/Nhân viên:** Quản lý nội dung website
- **Khách hàng/Người dùng:** Xem thông tin và liên hệ với công ty

---

## 2. Công Nghệ Sử Dụng {#cong-nghe}

### 2.1 Tech Stack Tổng Quan

```
┌─────────────────────────────────────────────────┐
│         Client Layer (Browser/Mobile)           │
│    Next.js 14 + TypeScript + Tailwind CSS       │
└──────────────────┬──────────────────────────────┘
                   │ HTTPS/REST API
┌──────────────────▼──────────────────────────────┐
│         Nginx Reverse Proxy + SSL               │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│      Backend Layer (NestJS + TypeScript)        │
│  Controllers → Services → Repositories          │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│     Data Layer (PostgreSQL + Redis Cache)       │
│          + Local File Storage System            │
└─────────────────────────────────────────────────┘
```

### 2.2 Backend Technologies

#### Core Framework
```bash
# NestJS - Progressive Node.js Framework
npm install @nestjs/core @nestjs/common @nestjs/platform-express
npm install @nestjs/config @nestjs/typeorm typeorm
npm install rxjs reflect-metadata
```
#### Database & ORM
```bash
# PostgreSQL + TypeORM
npm install typeorm pg @nestjs/typeorm

```

#### Cache Layer
```bash
# Redis for caching
npm install ioredis @nestjs/cache-manager cache-manager-ioredis-yet
```

#### API & Validation
```bash
# REST API Documentation
npm install @nestjs/swagger swagger-ui-express

# Validation & Transformation
npm install class-validator class-transformer

# Security
npm install helmet compression @nestjs/throttler
```

#### File Processing
```bash
# Image Processing
npm install sharp multer @nestjs/platform-express
npm install -D @types/multer

# Video Processing
npm install fluent-ffmpeg
npm install -D @types/fluent-ffmpeg

# File System
npm install fs-extra uuid
npm install -D @types/uuid
```

### 2.3 Frontend Technologies

#### Core Framework
```bash
# Next.js 14 with App Router
npx create-next-app@latest --typescript --tailwind --app

# Dependencies included:
# - next (14.x)
# - react (18.x)
# - typescript
# - tailwindcss
```

#### UI & Styling
```bash
# Tailwind CSS (included in Next.js)
npm install @tailwindcss/forms @tailwindcss/typography
npm install clsx tailwind-merge

# Component Libraries
# Shadcn UI (recommended)
npx shadcn-ui@latest init
```

#### State Management
```bash
# Server State (Data Fetching & Caching)
npm install @tanstack/react-query axios

# Global State (Lightweight, recommended)
npm install zustand

```

#### Form Handling
```bash
# React Hook Form + Zod validation
npm install react-hook-form zod @hookform/resolvers
```

#### Rich Text Editor
```bash
# Tiptap (Modern, extensible)
npm install @tiptap/react @tiptap/starter-kit
npm install @tiptap/extension-image @tiptap/extension-link
```

#### Charts & Visualization
```bash
# For Dashboard
npm install recharts date-fns
```

### 2.4 DevOps & Tools

#### Containerization
```bash
# Docker & Docker Compose
# Install: https://docs.docker.com/get-docker/
```

#### Web Server
```bash
# Nginx (Reverse Proxy, Static Files)
# Install: 
# - Ubuntu: sudo apt install nginx
# - macOS: brew install nginx
# - Windows: Download from nginx.org
```

#### Process Manager
```bash
# PM2 (Node.js Process Manager)
npm install -g pm2
```

#### Version Control
```bash
# Git
# Install: https://git-scm.com/downloads
```

#### Database Tools
- **pgAdmin 4** - PostgreSQL GUI
- **DBeaver** - Universal database tool
- **TablePlus** - Modern, native client

### 2.5 Development Tools

```bash
# Code Quality
npm install -D eslint prettier
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint-config-prettier eslint-plugin-prettier

# Testing
npm install -D jest @nestjs/testing @types/jest
npm install -D @testing-library/react @testing-library/jest-dom

# Pre-commit Hooks
npm install -D husky lint-staged
```

### 2.6 Security & Authentication

```bash
# JWT Authentication
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install bcrypt
npm install -D @types/bcrypt @types/passport-jwt

# Security Headers & Protection
npm install helmet hpp xss-clean
npm install express-rate-limit
```

### 2.7 Email Service

```bash
# NodeMailer
npm install @nestjs-modules/mailer nodemailer handlebars
npm install -D @types/nodemailer

```

### 2.8 Cấu Hình Backend (Configuration)

Hệ thống sử dụng `@nestjs/config` để quản lý cấu hình tập trung. Tất cả các file config được đặt trong `src/config/`.

#### 2.8.1 App Configuration (`app.config.ts`)

**Mục đích:** Cấu hình chung cho ứng dụng

**Các tham số:**
- `env`: Môi trường chạy (development/production/test)
- `port`: Port server (mặc định: 3000)
- `name`: Tên ứng dụng
- `adminFrontendUrl`: URL admin frontend (RIÊNG BIỆT - apc-admin, cho CORS và email links)
- `publicFrontendUrl`: URL public frontend (RIÊNG BIỆT - apc-public, cho CORS và email links)
- `backendUrl`: URL backend (cho Swagger)
- `timezone`: Timezone (mặc định: Asia/Ho_Chi_Minh)
- `defaultLocale`: Ngôn ngữ mặc định (mặc định: vi)
- `debug`: Bật/tắt debug mode
- `apiPrefix`: Prefix cho API routes (mặc định: api)
- `version`: Phiên bản ứng dụng

**Environment Variables:**
```env
NODE_ENV=development
PORT=3000
APP_NAME=APC Backend
ADMIN_FRONTEND_URL=http://localhost:3001
PUBLIC_FRONTEND_URL=http://localhost:3002
BACKEND_URL=http://localhost:3000
TZ=Asia/Ho_Chi_Minh
DEFAULT_LOCALE=vi
DEBUG=false
API_PREFIX=api
APP_VERSION=1.0.0
```

#### 2.8.2 Database Configuration (`database.config.ts`)

**Mục đích:** Cấu hình kết nối PostgreSQL với TypeORM

**Các tham số:**
- `type`: Loại database (postgres)
- `host`: Host database
- `port`: Port database (mặc định: 5432)
- `username`: Username database
- `password`: Password database
- `database`: Tên database
- `entities`: Đường dẫn đến các entity files
- `autoLoadEntities`: Tự động load entities
- `migrations`: Đường dẫn đến migration files
- `migrationsRun`: Tự động chạy migrations khi khởi động
- `synchronize`: Đồng bộ schema (CHỈ BẬT TRONG DEVELOPMENT)
- `logging`: Bật/tắt logging queries
- `extra.max`: Số connection tối đa trong pool
- `extra.min`: Số connection tối thiểu trong pool
- `ssl`: Cấu hình SSL (cho production)

**Environment Variables:**
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=anphat_chemical
DB_MIGRATIONS_RUN=false
DB_SYNC=false
DB_LOGGING=true
DB_LOGGER=advanced-console
DB_POOL_MAX=10
DB_POOL_MIN=2
DB_IDLE_TIMEOUT=30000
DB_SSL=false
DB_SSL_REJECT_UNAUTHORIZED=true
DB_RETRY_ATTEMPTS=3
DB_RETRY_DELAY=3000
```

**Lưu ý quan trọng:**
- ⚠️ `synchronize` PHẢI là `false` trong production
- ⚠️ Sử dụng migrations để quản lý schema trong production
- ⚠️ Bật SSL trong production với `DB_SSL=true`

#### 2.8.3 Cache Configuration (`cache.config.ts`)

**Mục đích:** Cấu hình Redis Cache

**Các tham số:**
- `store`: Redis store (cache-manager-ioredis-yet)
- `host`: Redis host
- `port`: Redis port (mặc định: 6379)
- `password`: Redis password (nếu có)
- `db`: Redis database number (mặc định: 0)
- `ttl`: Time to live mặc định (mặc định: 3600 giây = 1 giờ)
- `max`: Số lượng items tối đa trong cache (mặc định: 100)
- `connectTimeout`: Timeout khi kết nối (mặc định: 10000ms)
- `retryStrategy`: Chiến lược retry khi mất kết nối
- `enableOfflineQueue`: Bật queue khi offline
- `enableReadyCheck`: Bật ready check

**Environment Variables:**
```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
CACHE_TTL=3600
CACHE_MAX=100
REDIS_CONNECT_TIMEOUT=10000
```

**Use Cases:**
- Cache kết quả API queries (TTL: 1 giờ)
- Cache session data (TTL: 30 phút)
- Cache dashboard statistics (TTL: 5 phút)
- Cache product/news listings (TTL: 15 phút)
- Cache category trees (TTL: 1 giờ)

**Cache Strategy:**
- **Public endpoints:** Cache với TTL dài hơn (15-60 phút)
- **Admin endpoints:** Cache với TTL ngắn hơn (1-5 phút)
- **Real-time data:** Không cache (dashboard stats, notifications)
- **Invalidation:** Xóa cache khi có thay đổi dữ liệu (create/update/delete)
- **Cache Keys Pattern:**
  - Entity: `{entity}:{id}` (ví dụ: `product:123`)
  - List: `{entity}:list:{filters}` (ví dụ: `products:list:category:1:page:1`)
  - Stats: `{entity}:stats` (ví dụ: `dashboard:stats`)

**Query Optimization:**
- **Tránh N+1 Queries:**
  - Sử dụng `relations` trong TypeORM để eager load
  - Sử dụng `QueryBuilder` với `leftJoinAndSelect` cho các query phức tạp
  - Ví dụ: `productRepository.find({ relations: ['category', 'featured_image'] })`
- **Batch Operations:**
  - Sử dụng `save()` với array để insert/update nhiều records cùng lúc
  - Sử dụng `createQueryBuilder().insert().values([]).execute()` cho bulk insert
- **Pagination:**
  - Luôn sử dụng `LIMIT` và `OFFSET` cho danh sách
  - Sử dụng cursor-based pagination cho danh sách lớn (thay vì offset)

#### 2.8.4 Email Configuration (`email.config.ts`)

**Mục đích:** Cấu hình email service với Nodemailer

**Các tham số:**
- `transport.host`: SMTP host
- `transport.port`: SMTP port (mặc định: 587)
- `transport.secure`: Sử dụng SSL/TLS (true cho port 465)
- `transport.auth.user`: SMTP username
- `transport.auth.pass`: SMTP password
- `transport.tls.rejectUnauthorized`: Reject unauthorized certificates
- `defaults.from`: Email mặc định gửi từ
- `template.dir`: Đường dẫn đến email templates
- `template.adapter`: Template adapter (Handlebars)
- `preview`: Preview email trong development

**Environment Variables:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_REJECT_UNAUTHORIZED=true
EMAIL_FROM_NAME=APC Company
EMAIL_FROM=noreply@example.com
EMAIL_PREVIEW=true
```

**Email Templates:**
- `welcome.hbs`: Email chào mừng
- `contact-reply.hbs`: Email phản hồi yêu cầu liên hệ
- `reset-password.hbs`: Email reset mật khẩu
- `contact-notification.hbs`: Thông báo yêu cầu liên hệ mới

#### 2.8.5 JWT Configuration (`jwt.config.ts`)

**Mục đích:** Cấu hình JWT Authentication

**Các tham số:**
- `secret`: Secret key để ký token (PHẢI đặt trong .env)
- `signOptions.expiresIn`: Thời gian hết hạn token mặc định (giây)
- `signOptions.algorithm`: Thuật toán ký (HS256)
- `signOptions.issuer`: Issuer của token
- `signOptions.audience`: Audience của token
- `verifyOptions`: Options khi verify token

**Token Expiration:**
- `default`: Token thông thường (30 phút = 1800 giây)
- `rememberMe`: Token remember me (30 ngày = 2592000 giây)
- `refresh`: Refresh token (7 ngày = 604800 giây)

**Environment Variables:**
```env
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=1800
JWT_REMEMBER_ME_EXPIRES_IN=2592000
JWT_REFRESH_EXPIRES_IN=604800
JWT_ISSUER=apc-backend
JWT_AUDIENCE=apc-frontend
```

**Lưu ý bảo mật:**
- ⚠️ `JWT_SECRET` PHẢI là chuỗi ngẫu nhiên mạnh (ít nhất 32 ký tự)
- ⚠️ KHÔNG commit secret vào git
- ⚠️ Sử dụng secret khác nhau cho mỗi môi trường

#### 2.8.6 Security Configuration (`security.config.ts`)

**Mục đích:** Cấu hình bảo mật (Helmet, CORS, Rate Limiting, Bcrypt)

**Các tham số:**

**Helmet Options:**
- `contentSecurityPolicy`: CSP directives
- `crossOriginEmbedderPolicy`: Cross-origin embedder policy

**Rate Limiting:**
- `ttl`: Time window (mặc định: 60 giây)
- `limit`: Số request tối đa trong time window (mặc định: 100)

**CORS:**
- `origin`: Danh sách origins được phép (bao gồm cả admin và public frontend)
  - Admin frontend: `http://localhost:3001` (dev) / `https://admin.example.com` (prod)
  - Public frontend: `http://localhost:3002` (dev) / `https://www.example.com` (prod)
- `credentials`: Cho phép credentials (cần cho JWT authentication)
- `methods`: HTTP methods được phép
- `allowedHeaders`: Headers được phép

**Security Settings:**
- `bcryptRounds`: Số rounds cho bcrypt hashing (mặc định: 10)
- `jwtSecretRotation`: Bật rotation cho JWT secret
- `sessionTimeout`: Timeout session (mặc định: 1800 giây = 30 phút)
- `rememberMeDuration`: Thời gian remember me (mặc định: 2592000 giây = 30 ngày)
- `maxFailedLoginAttempts`: Số lần đăng nhập sai tối đa (mặc định: 5)
- `accountLockDuration`: Thời gian khóa tài khoản (mặc định: 900 giây = 15 phút)

**Environment Variables:**
```env
THROTTLE_TTL=60
THROTTLE_LIMIT=100
# CORS Origins - Cho phép cả admin và public frontend
CORS_ORIGIN=http://localhost:3001,http://localhost:3002
# Production: CORS_ORIGIN=https://admin.example.com,https://www.example.com
BCRYPT_ROUNDS=10
JWT_SECRET_ROTATION=false
SESSION_TIMEOUT=1800
REMEMBER_ME_DURATION=2592000
MAX_FAILED_LOGIN_ATTEMPTS=5
ACCOUNT_LOCK_DURATION=900
```

#### 2.8.7 Swagger Configuration (`swagger.config.ts`)

**Mục đích:** Cấu hình Swagger/OpenAPI documentation

**Các tham số:**

**Swagger Options:**
- `persistAuthorization`: Giữ token khi refresh page
- `tagsSorter`: Sắp xếp tags (alpha)
- `operationsSorter`: Sắp xếp operations (alpha)
- `customSiteTitle`: Tiêu đề trang Swagger
- `customCss`: CSS tùy chỉnh

**Document Builder:**
- `title`: Tiêu đề API
- `description`: Mô tả API
- `version`: Phiên bản API
- `contact`: Thông tin liên hệ
- `bearerAuth`: Cấu hình JWT Bearer Auth
- `servers`: Danh sách servers (development, production)
- `tags`: Các tags cho API endpoints

**Environment Variables:**
```env
SWAGGER_TITLE=APC Company API
SWAGGER_DESCRIPTION=API Documentation cho hệ thống quản lý website công ty
SWAGGER_CONTACT_NAME=APC Team
SWAGGER_CONTACT_URL=
SWAGGER_CONTACT_EMAIL=support@example.com
PRODUCTION_URL=https://api.example.com
```

**API Tags:**
- `auth`: Xác thực và phân quyền
- `employees`: Quản lý nhân viên
- `products`: Quản lý sản phẩm
- `categories`: Quản lý danh mục
- `news`: Quản lý tin tức
- `contacts`: Quản lý yêu cầu liên hệ
- `customers`: Quản lý khách hàng
- `upload`: Upload file
- `dashboard`: Dashboard và thống kê

#### 2.8.8 Upload Configuration (`upload.config.ts`)

**Mục đích:** Cấu hình upload và xử lý file

**Các tham số:**

**File Size Limits:**
- `maxFileSize`: Kích thước file tối đa (mặc định: 10MB)
- `maxImageSize`: Kích thước ảnh tối đa (mặc định: 5MB)
- `maxVideoSize`: Kích thước video tối đa (mặc định: 100MB)

**Allowed Types:**
- `allowedImageTypes`: Định dạng ảnh cho phép (jpg, jpeg, png, gif, webp)
- `allowedVideoTypes`: Định dạng video cho phép (mp4, avi, mov, wmv)

**Directories:**
- `products`: Thư mục upload sản phẩm
- `news`: Thư mục upload tin tức
- `employees`: Thư mục upload nhân viên
- `videos`: Thư mục upload video

**Settings:**
- `path`: Đường dẫn lưu trữ file (mặc định: ./uploads)
- `publicUrl`: URL base để truy cập file (mặc định: /uploads)
- `autoProcessImages`: Không sử dụng - luôn false (ảnh được lưu nguyên gốc, không resize)
- `autoProcessVideos`: Tự động xử lý video (mặc định: false)

**Environment Variables:**
```env
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10485760
MAX_IMAGE_SIZE=5242880
MAX_VIDEO_SIZE=104857600
ALLOWED_IMAGE_TYPES=jpg,jpeg,png,gif,webp
ALLOWED_VIDEO_TYPES=mp4,avi,mov,wmv
UPLOAD_PUBLIC_URL=/uploads
AUTO_PROCESS_IMAGES=false
AUTO_PROCESS_VIDEOS=false
```

**Cấu trúc thư mục upload:**
```
uploads/
├── products/
├── news/
├── employees/
└── videos/
```

---

## 3. Kiến Trúc Hệ Thống {#kien-truc}

### 3.0 Tách Riêng Frontend

**Quyết định kiến trúc:** Hệ thống sử dụng **2 frontend riêng biệt** thay vì một frontend chung:

1. **apc-admin** - Admin Frontend (RIÊNG BIỆT)
   - Dành cho quản trị viên/nhân viên
   - Port: 3001 (development)
   - Domain: admin.example.com (production)
   - Yêu cầu authentication (JWT)
   - Chức năng: Quản lý toàn bộ nội dung hệ thống

2. **apc-public** - Public Frontend (RIÊNG BIỆT)
   - Dành cho người dùng cuối (khách hàng)
   - Port: 3002 (development)
   - Domain: www.example.com (production)
   - Không yêu cầu authentication
   - Chức năng: Hiển thị thông tin công ty, sản phẩm, tin tức, liên hệ.

**Cấu hình Backend:**
- Backend cấu hình 2 URLs riêng:
  - `ADMIN_FRONTEND_URL`: URL của admin frontend (cho CORS)
  - `PUBLIC_FRONTEND_URL`: URL của public frontend (cho CORS)
- CORS được cấu hình để cho phép cả 2 origins
- JWT tokens được validate riêng cho Admin frontend

### 3.1 Architecture Pattern

```
┌───────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                         │
│                                                           │
│  ┌────────────────────────────────────────────────────┐   │
│  │      ADMIN FRONTEND (apc-admin)                    │   │
│  │  Next.js 14 + TypeScript + Tailwind CSS            │   │
│  │  Port: 3001 (dev) / admin.example.com (prod)       │   │
│  └────────────────────────────────────────────────────┘   │
│                                                           │
│  ┌────────────────────────────────────────────────────┐   │
│  │      PUBLIC FRONTEND (apc-public)                  │   │
│  │  Next.js 14 + TypeScript + Tailwind CSS            │   │
│  │  Port: 3002 (dev) / www.example.com (prod)         │   │
│  └────────────────────────────────────────────────────┘   │
└──────────────────────┬────────────────────────────────────┘
                       │ HTTPS REST API
┌──────────────────────▼────────────────────────────────────┐
│              NGINX REVERSE PROXY                          │
│  • SSL/TLS Termination                                    │
│  • Load Balancing                                         │
│  • Static File Serving (/uploads)                         │
│  • Rate Limiting                                          │
│  • Gzip Compression                                       │
└──────────────────────┬────────────────────────────────────┘
                       │
┌──────────────────────▼────────────────────────────────────┐
│                 BACKEND LAYER (NestJS)                    │
│  ┌──────────────────────────────────────────────────────┐ │
│  │           APPLICATION LAYER                          │ │
│  │  ┌───────────┐  ┌──────────┐  ┌──────────┐           │ │
│  │  │Controllers│→ │ Services │→ │Repository│           │ │
│  │  └───────────┘  └──────────┘  └──────────┘           │ │
│  │                                                      │ │
│  │  Middleware: Auth, Logging, Validation, CORS         │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌──────────────────────────────────────────────────────┐ │
│  │              BUSINESS LOGIC LAYER                    │ │
│  │  • Authentication & Authorization (JWT)              │ │
│  │  • File Upload & Processing (Sharp, FFmpeg)          │ │
│  │  • Email Service (NodeMailer)                        │ │
│  │  • Cache Management (Redis)                          │ │
│  │  • Search & Filter Logic                             │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────┬────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                   DATA LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  PostgreSQL  │  │    Redis     │  │Local Storage │   │
│  │   Database   │  │  (Caching)   │  │  (Uploads)   │   │
│  │              │  │              │  │              │   │
│  │ • employees  │  │ • Sessions   │  │ • products/  │   │
│  │ • products   │  │ • API Cache  │  │ • news/      │   │
│  │ • categories │  │ • Query      │  │ • employees/ │   │
│  │ • news       │  │   Results    │  │ • videos/    │   │
│  │ • contacts   │  │              │  │              │   │
│  │ • customers  │  │              │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Cấu Trúc Thư Mục Dự Án

```
project-root/
├── apc-backend/                          # NestJS Backend
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/                 # Authentication
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── jwt.strategy.ts
│   │   │   │   └── guards/
│   │   │   │       └── jwt-auth.guard.ts
│   │   │   │
│   │   │   ├── employees/            # Quản lý nhân viên
│   │   │   │   ├── employees.module.ts
│   │   │   │   ├── employees.service.ts
│   │   │   │   ├── employees.controller.ts
│   │   │   │   ├── entities/
│   │   │   │   │   └── employee.entity.ts
│   │   │   │   └── dto/
│   │   │   │       ├── create-employee.dto.ts
│   │   │   │       └── update-employee.dto.ts
│   │   │   │
│   │   │   ├── products/             # Quản lý sản phẩm
│   │   │   │   ├── products.module.ts
│   │   │   │   ├── products.service.ts
│   │   │   │   ├── products.controller.ts
│   │   │   │   ├── entities/
│   │   │   │   │   └── product.entity.ts
│   │   │   │   └── dto/
│   │   │   │
│   │   │   ├── categories/           # Quản lý danh mục
│   │   │   │   ├── categories.module.ts
│   │   │   │   ├── categories.service.ts
│   │   │   │   ├── categories.controller.ts
│   │   │   │   └── entities/
│   │   │   │       └── category.entity.ts
│   │   │   │
│   │   │   ├── news/                 # Quản lý tin tức
│   │   │   │   ├── news.module.ts
│   │   │   │   ├── news.service.ts
│   │   │   │   ├── news.controller.ts
│   │   │   │   └── entities/
│   │   │   │       └── news.entity.ts
│   │   │   │
│   │   │   ├── contacts/             # Quản lý liên hệ
│   │   │   │   ├── contacts.module.ts
│   │   │   │   ├── contacts.service.ts
│   │   │   │   ├── contacts.controller.ts
│   │   │   │   └── entities/
│   │   │   │       ├── contact.entity.ts
│   │   │   │       └── response.entity.ts
│   │   │   │
│   │   │   ├── customers/            # Quản lý khách hàng
│   │   │   │   ├── customers.module.ts
│   │   │   │   ├── customers.service.ts
│   │   │   │   ├── customers.controller.ts
│   │   │   │   └── entities/
│   │   │   │       └── customer.entity.ts
│   │   │   │
│   │   │   ├── authors/              # Quản lý tác giả
│   │   │   │   ├── authors.module.ts
│   │   │   │   ├── authors.service.ts
│   │   │   │   ├── authors.controller.ts
│   │   │   │   ├── entities/
│   │   │   │   │   └── author.entity.ts
│   │   │   │   └── dto/
│   │   │   │       ├── create-author.dto.ts
│   │   │   │       └── update-author.dto.ts
│   │   │   │
│   │   │   ├── files/                # Quản lý file uploads
│   │   │   │   ├── files.module.ts
│   │   │   │   ├── files.service.ts
│   │   │   │   ├── files.controller.ts
│   │   │   │   └── entities/
│   │   │   │       └── file-upload.entity.ts
│   │   │   │
│   │   │   ├── settings/             # Quản lý settings
│   │   │   │   ├── settings.module.ts
│   │   │   │   ├── settings.service.ts
│   │   │   │   ├── settings.controller.ts
│   │   │   │   └── entities/
│   │   │   │       └── setting.entity.ts
│   │   │   │
│   │   │   ├── activity-logs/        # Quản lý activity logs
│   │   │   │   ├── activity-logs.module.ts
│   │   │   │   ├── activity-logs.service.ts
│   │   │   │   ├── activity-logs.controller.ts
│   │   │   │   └── entities/
│   │   │   │       └── activity-log.entity.ts
│   │   │   │
│   │   │   ├── upload/               # File upload
│   │   │   │   ├── upload.module.ts
│   │   │   │   ├── upload.service.ts
│   │   │   │   └── upload.controller.ts
│   │   │   │
│   │   │   ├── email/                # Email service
│   │   │   │   ├── email.module.ts
│   │   │   │   ├── email.service.ts
│   │   │   │   └── templates/
│   │   │   │       ├── welcome.hbs
│   │   │   │       ├── contact-reply.hbs
│   │   │   │       └── reset-password.hbs
│   │   │   │
│   │   │   └── dashboard/            # Dashboard stats
│   │   │       ├── dashboard.module.ts
│   │   │       ├── dashboard.service.ts
│   │   │       └── dashboard.controller.ts
│   │   │
│   │   ├── common/
│   │   │   ├── decorators/           # Custom decorators
│   │   │   ├── filters/              # Exception filters
│   │   │   ├── interceptors/         # Response interceptors
│   │   │   ├── guards/               # Auth guards
│   │   │   └── pipes/                # Validation pipes
│   │   │
│   │   ├── config/
│   │   │   ├── database.config.ts
│   │   │   ├── jwt.config.ts
│   │   │   ├── upload.config.ts
│   │   │   ├── app.config.ts
│   │   │   ├── cache.config.ts
│   │   │   ├── email.config.ts
│   │   │   ├── security.config.ts
│   │   │   └── swagger.config.ts
│   │   │
│   │   ├── app.module.ts
│   │   └── main.ts
│   │
│   ├── uploads/                      # File storage
│   │   ├── products/
│   │   ├── news/
│   │   ├── employees/
│   │   └── videos/
│   │
│   ├── test/                         # Tests
│   ├── migrations/                   # Database migrations
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── apc-admin/                      # Admin Frontend (Next.js) - RIÊNG BIỆT
│   ├── src/
│   │   ├── app/                      # App Router
│   │   │   ├── (auth)/
│   │   │   │   └── login/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── (admin)/              # Admin pages
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── employees/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── products/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── categories/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── news/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── contacts/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── customers/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [id]/
│   │   │   │           └── page.tsx
│   │   │   │   ├── authors/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── files/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── settings/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── activity-logs/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   │
│   │   ├── components/
│   │   │   ├── admin/                # Admin components
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── DataTable.tsx
│   │   │   │   ├── Charts/
│   │   │   │   │   ├── LineChart.tsx
│   │   │   │   │   ├── BarChart.tsx
│   │   │   │   │   └── PieChart.tsx
│   │   │   │   ├── Forms/
│   │   │   │   │   ├── EmployeeForm.tsx
│   │   │   │   │   ├── ProductForm.tsx
│   │   │   │   │   ├── NewsForm.tsx
│   │   │   │   │   └── AuthorForm.tsx
│   │   │   │   └── Modals/
│   │   │   │       ├── AuthorModal.tsx
│   │   │   │       └── FilePreviewModal.tsx
│   │   │   │
│   │   │   ├── common/               # Shared components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Loading.tsx
│   │   │   │   └── ConfirmDialog.tsx
│   │   │   │
│   │   │   └── ui/                   # UI components (shadcn)
│   │   │
│   │   ├── lib/
│   │   │   ├── api.ts                # API client (chỉ admin endpoints)
│   │   │   ├── auth.ts               # Auth utilities
│   │   │   └── utils.ts              # Helper functions
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useEmployees.ts
│   │   │   ├── useProducts.ts
│   │   │   ├── useNews.ts
│   │   │   ├── useUpload.ts
│   │   │   ├── useAuthors.ts
│   │   │   ├── useFiles.ts
│   │   │   ├── useSettings.ts
│   │   │   └── useActivityLogs.ts
│   │   │
│   │   ├── store/                    # Zustand store
│   │   │   ├── authStore.ts
│   │   │   └── uiStore.ts
│   │   │
│   │   └── types/                    # TypeScript types
│   │       ├── employee.ts
│   │       ├── product.ts
│   │       ├── news.ts
│   │       ├── author.ts
│   │       ├── file.ts
│   │       ├── setting.ts
│   │       ├── activity-log.ts
│   │       └── api.ts
│   │
│   ├── public/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── .env.local
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── Dockerfile
│
├── apc-public/                      # Public/User Frontend (Next.js) - RIÊNG BIỆT
│   ├── src/
│   │   ├── app/                      # App Router
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx          # Danh sách sản phẩm
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Chi tiết sản phẩm
│   │   │   ├── news/
│   │   │   │   ├── page.tsx          # Danh sách tin tức
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Chi tiết tin tức
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── layout/               # Layout components
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   │
│   │   │   ├── home/                 # Homepage components
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── FeaturedProducts.tsx
│   │   │   │   ├── LatestNews.tsx
│   │   │   │   └── Partners.tsx
│   │   │   │
│   │   │   ├── products/            # Product components
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   ├── ProductGallery.tsx
│   │   │   │   └── ProductFilters.tsx
│   │   │   │
│   │   │   ├── news/                 # News components
│   │   │   │   ├── NewsCard.tsx
│   │   │   │   ├── NewsGrid.tsx
│   │   │   │   └── NewsSidebar.tsx
│   │   │   │
│   │   │   ├── common/               # Shared components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Loading.tsx
│   │   │   │   └── Breadcrumbs.tsx
│   │   │   │
│   │   │   └── ui/                   # UI components (shadcn)
│   │   │
│   │   ├── lib/
│   │   │   ├── api.ts                # API client (chỉ public endpoints)
│   │   │   └── utils.ts              # Helper functions
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useProducts.ts
│   │   │   ├── useNews.ts
│   │   │   └── useContact.ts
│   │   │
│   │   └── types/                    # TypeScript types
│   │       ├── product.ts
│   │       ├── news.ts
│   │       └── contact.ts
│   │
│   ├── public/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── banners/
│   │   └── icons/
│   │
│   ├── .env.local
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── Dockerfile
│
├── docker-compose.yml
├── nginx.conf
├── .gitignore
└── README.md
```

### 3.2.1 Development Setup cho 2 Frontend Riêng Biệt

**Khởi động development servers:**

```bash
# Terminal 1: Backend
cd apc-backend
npm install
npm run start:dev
# Backend chạy tại http://localhost:3000

# Terminal 2: Admin Frontend
cd apc-admin
npm install
npm run dev
# Admin frontend chạy tại http://localhost:3001

# Terminal 3: Public Frontend
cd apc-public
npm install
npm run dev
# Public frontend chạy tại http://localhost:3002
```

**Environment Variables:**

**apc-admin/.env.local:**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
```

**apc-public/.env.local:**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_PUBLIC_URL=http://localhost:3002
```

**Lưu ý:**
- Mỗi frontend có `.env.local` riêng
- Mỗi frontend có `package.json` riêng và dependencies riêng
- Có thể chạy độc lập hoặc cùng lúc
- Backend phải chạy trước để frontend có thể gọi API

**Production Deployment:**

**Admin Frontend:**
- Domain: `admin.example.com`
- Port: 3001 (internal)
- Nginx reverse proxy: `/admin` → `http://localhost:3001`
- SSL certificate riêng

**Public Frontend:**
- Domain: `www.example.com` hoặc `example.com`
- Port: 3002 (internal)
- Nginx reverse proxy: `/` → `http://localhost:3002`
- SSL certificate riêng

**Backend:**
- Domain: `api.example.com`
- Port: 3000 (internal)
- Nginx reverse proxy: `/api` → `http://localhost:3000`
- CORS cho phép cả 2 frontend origins

### 3.3 Module Dependencies

```
┌─────────────────────────────────────────────────┐
│               AppModule (Root)                  │
└──────────────────┬──────────────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
    ▼              ▼              ▼
┌─────────────┐  ┌──────────────┐  ┌────────────┐
│ConfigModule │  │TypeOrmModule │  │CacheModule │
└─────────────┘  └──────────────┘  └────────────┘
                   │
    ┌──────────────┼────────────────────────────────┐
    │              │                 │              │
    ▼              ▼                 ▼              ▼
┌───────────┐  ┌──────────────┐  ┌──────────────┐ ┌──────────┐
│AuthModule │  │EmployeeModule│  │ProductsModule│ │NewsModule│
└────┬──────┘  └──────────────┘  └────┬─────────┘ └──────────┘
     │                                │
     │      ┌─────────────────────────┘
     │      │
     ▼      ▼
┌──────────────┐  ┌───────────┐  ┌──────────────┐
│UploadModule  │  │EmailModule│  │ContactsModule│
└──────────────┘  └───────────┘  └──────────────┘
```

---

## 4. Chức Năng Chi Tiết {#chuc-nang}

### 4.1 TRANG QUẢN TRỊ (ADMIN PANEL)

#### 4.1.1 Đăng Nhập
**Endpoint:** `POST /api/auth/login`

**Mô tả:** Xác thực người dùng trước khi truy cập hệ thống quản trị

**Thông tin đăng nhập:**
- Mã nhân viên (bắt buộc)
- SĐT/Email/Tên đăng nhập (chọn 1)
- Mật khẩu (bắt buộc)

**Chức năng:**
- ✅ Xác thực thông tin đăng nhập
- ✅ Quản lý phiên đăng nhập (JWT Token)
- ✅ Quên mật khẩu (gửi email reset)
- ✅ Đăng xuất
- ✅ Remember me (30 ngày)

**Quy tắc bảo mật:**
- 🔒 Khóa tài khoản sau 5 lần đăng nhập sai
- 🔒 Timeout session sau 30 phút không hoạt động
- 🔒 Password hashing với bcrypt (cost factor: 10)
- 🔒 Rate limiting: 5 requests/phút

**Implementation:**
```typescript
// auth.dto.ts
export class LoginDto {
  @IsString()
  @IsNotEmpty()
  employee_code: string;

  @IsString()
  @IsNotEmpty()
  identifier: string; // email, phone, or username

  @IsString()
  @MinLength(8)
  password: string;

  @IsBoolean()
  @IsOptional()
  remember_me?: boolean;
}

// auth.service.ts
async login(loginDto: LoginDto) {
  // 1. Find user
  const user = await this.findByIdentifier(loginDto);
  
  // 2. Check password
  const isValid = await bcrypt.compare(
    loginDto.password, 
    user.password
  );
  
  if (!isValid) {
    await this.incrementFailedAttempts(user.id);
    throw new UnauthorizedException('Sai mật khẩu');
  }
  
  // 3. Generate JWT
  const token = this.jwtService.sign({
    sub: user.id,
    employee_code: user.employee_code,
    role: user.role
  });
  
  return { access_token: token, user };
}
```

#### 4.1.2 Dashboard (Màn Hình Chính)
**Endpoint:** `GET /api/dashboard/stats`

**Mô tả:** Trang chính sau khi đăng nhập thành công

**Menu chính:**
- 📊 Dashboard & Analytics
- 👥 Quản lý nhân viên
- 📦 Quản lý sản phẩm
- 📁 Quản lý danh mục sản phẩm
- 📰 Quản lý tin tức
- 📧 Quản lý yêu cầu liên hệ
- 👤 Quản lý thông tin khách hàng
- 📁 Quản lý file uploads

**Thống kê hiển thị:**
```typescript
interface DashboardStats {
  employees: {
    total: number;
    active: number;
    inactive: number;
  };
  products: {
    total: number;
    visible: number;
    featured: number;
  };
  news: {
    total: number;
    published: number;
    draft: number;
  };
  contacts: {
    total: number;
    pending: number;
    processing: number;
    resolved: number;
  };
  customers: {
    total: number;
    new_this_month: number;
  };
  file_uploads: {
    total: number;
    image: number;
    video: number;
    file_is_not_include: number;
  }
  analytics: {
    page_views: number;
    unique_visitors: number;
    popular_products: Product[];
    popular_news: News[];
  };
}
```

**Biểu đồ:**
- 📈 Line chart: Lượt truy cập website (7 ngày / 30 ngày / 12 tháng)
- 📊 Bar chart: Sản phẩm xem nhiều nhất
- 🥧 Pie chart: Phân bố yêu cầu liên hệ theo trạng thái

#### 4.1.3 Quản Lý Nhân Viên
**Endpoints:**
- `GET /api/employees` - Danh sách nhân viên
- `GET /api/employees/:id` - Chi tiết nhân viên
- `POST /api/employees` - Thêm nhân viên
- `PUT /api/employees/:id` - Cập nhật nhân viên
- `DELETE /api/employees/:id` - Xóa nhân viên (soft delete)
- `GET /api/employees/search` - Tìm kiếm nhân viên

**Danh sách nhân viên:**
- Hiển thị bảng: STT, Mã NV, Họ tên, Email, SĐT, Tên đăng nhập, Chức vụ, Trạng thái, Hành động
- Phân trang: 10/20/50 bản ghi/trang
- Sắp xếp: Theo tên, email, ngày tạo
- Export: Excel, CSV

**Tìm kiếm:**
- Theo mã nhân viên
- Theo email
- Theo số điện thoại
- Theo tên đăng nhập
- Tìm kiếm nâng cao (kết hợp nhiều điều kiện)

**Thêm/Sửa nhân viên:**
```typescript
interface EmployeeDto {
  employee_code?: string;              // Auto-generate nếu không nhập
  full_name: string;                   // Required
  email: string;                       // Required, unique
  phone: string;                       // Required
  username: string;                    // Required, unique
  password?: string;                   // Required when creating new
  role: 'admin' | 'employee';
  avatar_id?: number;                   // ID from file_uploads table with entity_type='employee'
  address?: string;
  date_of_birth?: Date;
  status: 'active' | 'locked';
}
```

**Validation Rules:**
- Email: Valid email format, unique
- SĐT: 10-11 digits, Vietnamese phone format
- Mật khẩu: Min 8 chars, chứa chữ hoa, chữ thường, số
- Không cho phép xóa tài khoản đang đăng nhập

#### 4.1.4 Quản Lý Sản Phẩm
**Endpoints:**
- `GET /api/products` - Danh sách sản phẩm
- `GET /api/products/:id` - Chi tiết sản phẩm
- `POST /api/products` - Thêm sản phẩm
- `PUT /api/products/:id` - Cập nhật sản phẩm
- `DELETE /api/products/:id` - Xóa sản phẩm
- `GET /api/products/search` - Tìm kiếm sản phẩm
- `PATCH /api/products/:id/toggle-featured` - Bật/tắt nổi bật

**Danh sách sản phẩm:**
- Hiển thị: STT, Ảnh, Mã SP, Tên SP, Danh mục, Giá, Trạng thái, Hành động
- Lọc: Theo danh mục, trạng thái, sản phẩm nổi bật
- Sắp xếp: Tên, giá, ngày tạo, lượt xem
- Phân trang: 12/24/48 sản phẩm/trang

**Tìm kiếm:**
- Full-text search: Tên sản phẩm, mô tả
- Theo mã sản phẩm
- Theo danh mục
- Theo khoảng giá (từ - đến)
- Theo tags

**Thêm/Sửa sản phẩm:**
```typescript
interface ProductDto {
  code?: string;               // Auto-generate
  name: string;                // Required
  category_id: number;         // Required
  short_description?: string;  // Max 200 chars
  description?: string;        // Rich text
  price: number;               // Required
  sale_price?: number;         // Sale price
  featured_image_id: number;   // Required, ID from file_uploads table
  specifications?: Record<string, string>;
  // Note: image_gallery is retrieved from file_uploads table using entity_type='product' and entity_id
  tags?: string;
  seo_title?: string;
  seo_description?: string;
  url_slug?: string;           // Auto-generate from name
  status: 'visible' | 'hidden';
  featured: boolean;
}
```

**Image Upload Flow (Client-side temporary files):**
```
1. User chọn file từ máy tính → File được lưu tạm ở client (không gửi lên server)
2. Hiển thị preview file trên UI
3. User sắp xếp thứ tự và đánh dấu ảnh chính
4. Khi submit form: Gửi tất cả files cùng với data trong 1 request POST /api/products
5. Backend xử lý tất cả files cùng lúc, lưu vào file_uploads với entity_id và order
6. Featured image được đánh dấu bằng is_main=true trong file_uploads
```

**Lưu ý:**
- File tạm chỉ tồn tại ở client, không lưu trên server
- Tất cả files được xử lý trong cùng 1 transaction khi tạo entity
- Thứ tự hiển thị được lưu trong cột `display_order` của bảng `file_uploads`
- Ảnh chính được đánh dấu bằng `is_main=true` trong bảng `file_uploads`

#### 4.1.5 Quản Lý Danh Mục Sản Phẩm
**Endpoints:**
- `GET /api/categories` - Danh sách danh mục
- `GET /api/categories/tree` - Cây danh mục (parent-child)
- `GET /api/categories/:id` - Chi tiết danh mục
- `POST /api/categories` - Thêm danh mục
- `PUT /api/categories/:id` - Cập nhật danh mục
- `DELETE /api/categories/:id` - Xóa danh mục
- `PATCH /api/categories/reorder` - Sắp xếp thứ tự

**Danh sách danh mục:**
- Hiển thị dạng cây (tree view): Danh mục cha → Danh mục con
- STT, Tên, Danh mục cha, Số sản phẩm, Thứ tự, Trạng thái
- Kéo thả để sắp xếp
- Thu gọn/Mở rộng

**Thêm/Sửa danh mục:**
```typescript
interface CategoryDto {
  name: string;                // Required
  parent_id?: number;          // Nullable (root category)
  description?: string;
  display_order?: number;      // Display order
  seo_title?: string;
  seo_description?: string;
  url_slug?: string;
  status: 'visible' | 'hidden';
}
```

**Business Rules:**
- Không cho phép chọn chính nó làm danh mục cha
- Không cho phép tạo vòng lặp (A → B → C → A)
- Khi xóa danh mục có sản phẩm: Yêu cầu di chuyển sản phẩm trước
- Max depth: 3 levels (Root → Level 1 → Level 2)

#### 4.1.6 Quản Lý Tin Tức
**Endpoints:**
- `GET /api/news` - Danh sách tin tức
- `GET /api/news/:slug` - Chi tiết tin tức (by slug)
- `POST /api/news` - Thêm bài viết
- `PUT /api/news/:id` - Cập nhật bài viết
- `DELETE /api/news/:id` - Xóa bài viết
- `PATCH /api/news/:id/publish` - Đăng bài
- `POST /api/news/:id/schedule` - Đặt lịch đăng

**Danh sách tin tức:**
- Hiển thị: STT, Ảnh, Tiêu đề, Tác giả, Ngày đăng, Lượt xem, Trạng thái
- Lọc: Trạng thái (Nháp/Đã đăng/Ẩn), Tác giả, Ngày đăng
- Sắp xếp: Ngày đăng, Lượt xem, Tiêu đề

**Thêm/Sửa bài viết:**
```typescript
interface NewsDto {
  title: string;               // Required
  summary?: string;            // Max 300 chars
  content: string;             // Rich text, required
  // Files được gửi cùng với form data
  // featured_image: File (multipart/form-data) - Ảnh chính
  // image_gallery: File[] (multipart/form-data) - Gallery ảnh
  // gallery_orders: number[] - Thứ tự hiển thị tương ứng với image_gallery
  author_id: number;           // Required, ID from authors table
  tags?: string;
  seo_title?: string;
  seo_description?: string;
  url_slug?: string;
  status: 'draft' | 'published' | 'hidden';
  featured: boolean;
  published_at?: Date;         // Schedule publish
}
```

**Form UI - Upload Files:**
- Tương tự như form sản phẩm
- Upload tạm ở client, hiển thị preview
- Chọn ảnh chính và sắp xếp thứ tự gallery
- Gửi tất cả files cùng với data khi submit

**Form UI - Chọn Author:**
- Dropdown chọn author từ danh sách authors có sẵn (gọi `GET /api/authors` để lấy danh sách)
- Nếu không có author cần chọn, có option "Thêm mới" ở cuối dropdown
- Khi click "Thêm mới", mở popup/modal form thêm author với các field:
  - **Họ và tên đầy đủ của tác giả** (required, text input, min: 1, max: 255)
  - **Chức danh / vai trò** (optional, text input, max: 255)
  - **Tổ chức / đơn vị đang làm việc** (optional, text input, max: 255)
  - **Bio** (optional, textarea, max: 1000)
  - Nút "Lưu" và "Hủy"
- Sau khi submit form, gọi API `POST /api/authors` để tạo author mới
- Sau khi tạo thành công, tự động chọn author vừa tạo trong dropdown và đóng popup
- Nếu có lỗi validation, hiển thị thông báo lỗi trong popup

**Rich Text Editor Features:**
- Headings (H2, H3, H4)
- Bold, Italic, Underline, Strikethrough
- Lists (Bullet, Numbered)
- Links
- Images (inline)
- Code blocks
- Blockquotes
- Tables

#### 4.1.7 Quản Lý File Uploads

**Mục đích:**
- Quản lý và xóa các file đã upload (image, video)
- Quản lý orphan files (files không thuộc entity nào - file thừa)
- **Lưu ý:** Mục này KHÔNG có chức năng upload file mới, chỉ quản lý và xóa file đã có

**Endpoints:**
- `GET /api/files` - Danh sách file đã upload (có filter orphan files)
- `GET /api/files/:id` - Chi tiết file
- `DELETE /api/files/:id` - Xóa 1 file
- `DELETE /api/files/bulk` - Xóa nhiều file cùng lúc (chỉ admin)

**Danh sách file (List View):**

**Hiển thị:**
- **Checkbox:** Để chọn file (cho bulk delete)
- **Thumbnail/Icon:**
  - Image: Hiển thị thumbnail ảnh (resize 150x150px)
  - Video: Hiển thị icon video với play button overlay
  - File khác: Hiển thị icon file type
- **Tên file:** `original_name` (tên file gốc khi upload)
- **File name:** `file_name` (tên file trên server)
- **Loại file:** Badge hiển thị `image` hoặc `video`
- **Entity Type:** 
  - Hiển thị entity type nếu có (product, news, employee, author)
  - Hiển thị "Orphan" (màu đỏ) nếu `entity_type = null` hoặc `entity_id = null`
- **Entity ID:** ID của entity (nếu có)
- **Entity Name:** Tên entity (nếu có, ví dụ: tên sản phẩm, tiêu đề bài viết)
- **Kích thước:** Format: `1.5 MB`, `500 KB`, `2.3 GB`
- **Người upload:** Tên và email của employee upload
- **Ngày upload:** Format: `DD/MM/YYYY HH:mm`
- **Actions:**
  - Icon "Xem" → Mở modal preview
  - Icon "Xóa" → Xóa file (có confirm dialog)

**Filters:**
- **Entity Type:** Dropdown (All, Product, News, Employee, Author)
- **File Type:** Dropdown (All, Image, Video)
- **Orphan Files:** Toggle switch - Chỉ hiển thị files không thuộc entity nào
- **Người upload:** Dropdown chọn employee
- **Ngày upload:** Date range picker (từ ngày - đến ngày)
- **Tìm kiếm:** Input text - Tìm theo tên file, original name

**Sắp xếp:**
- Dropdown: Ngày upload (mới nhất trước), Ngày upload (cũ nhất trước), Kích thước (lớn nhất), Kích thước (nhỏ nhất), Tên file (A-Z), Tên file (Z-A)

**View Modes:**
- **Grid view:** 
  - Hiển thị thumbnail ảnh/video dạng grid (3-4 cột)
  - Mỗi item có checkbox, thumbnail, tên file, kích thước, entity info
  - Hover hiển thị actions (Xem, Xóa)
- **List view:** 
  - Bảng với tất cả thông tin chi tiết
  - Có thể sort theo từng cột

**Bulk Actions:**
- **Select All:** Checkbox ở header để chọn tất cả files trong trang hiện tại
- **Selected Count:** Hiển thị số lượng file đã chọn (ví dụ: "3 files selected")
- **Bulk Delete Button:** 
  - Chỉ hiển thị khi có file được chọn
  - Chỉ admin mới thấy button này
  - Click hiển thị confirm dialog: "Bạn có chắc muốn xóa {count} files?"
  - Sau khi xóa thành công, hiển thị toast notification

**Chi tiết file (Modal Preview):**

**Khi click "Xem" hoặc click vào thumbnail:**
- Mở modal fullscreen hoặc large modal
- **Preview:**
  - Image: Hiển thị ảnh full size (có thể zoom)
  - Video: Hiển thị video player với controls
- **Thông tin metadata:**
  - Tên file gốc: `original_name`
  - Tên file trên server: `file_name`
  - Kích thước: Format bytes
  - MIME type: `image/jpeg`, `video/mp4`, etc.
  - Entity Type: Badge (nếu có) hoặc "Orphan" (màu đỏ)
  - Entity ID: ID (nếu có)
  - Entity Name: Link đến entity (nếu có)
  - URL: Copy button để copy URL file
  - Người upload: Tên và email
  - Ngày upload: Format đầy đủ
- **Actions:**
  - Button "Copy URL" - Copy URL file vào clipboard
  - Button "Xóa file" - Xóa file (có confirm dialog)
  - Button "Đóng" - Đóng modal

**Orphan Files Management:**

**Hiển thị Orphan Files:**
- Toggle switch "Chỉ hiển thị orphan files" ở filter bar
- Khi bật, chỉ hiển thị files có `entity_type = null` hoặc `entity_id = null`
- Badge "Orphan" màu đỏ hiển thị rõ ràng
- Có thể bulk delete nhiều orphan files cùng lúc

**Xóa Orphan Files:**
- Có thể xóa từng file hoặc bulk delete
- Confirm dialog: "File này không thuộc entity nào. Bạn có chắc muốn xóa?"
- Sau khi xóa, refresh danh sách

**Lưu ý:**
- **KHÔNG có chức năng upload file mới** trong mục này
- Upload file chỉ thực hiện khi tạo/sửa product, news, employee, author
- Chỉ cho phép xóa file do chính user upload hoặc admin
- Khi xóa file, sẽ xóa cả file trên disk và record trong database (soft delete)
- Cảnh báo khi xóa file đang được sử dụng bởi entity:
  - Hiển thị thông báo: "File này đang được sử dụng bởi {entity_type} '{entity_name}'. Bạn có chắc muốn xóa?"
  - Vẫn cho phép xóa (có thể entity đã bị xóa nhưng file còn lại)
- Orphan files thường là file thừa, nên được ưu tiên hiển thị và có thể bulk delete

#### 4.1.8 Quản Lý Yêu Cầu Liên Hệ
**Endpoints:**
- `GET /api/contacts` - Danh sách yêu cầu
- `GET /api/contacts/:id` - Chi tiết yêu cầu
- `POST /api/contacts` - Tạo yêu cầu (from user website)
- `PUT /api/contacts/:id/status` - Cập nhật trạng thái
- `POST /api/contacts/:id/reply` - Phản hồi yêu cầu
- `DELETE /api/contacts/:id` - Xóa yêu cầu

**Danh sách yêu cầu:**
- Hiển thị: STT, Họ tên, Email, SĐT, Tiêu đề, Ngày gửi, Trạng thái
- Lọc: Trạng thái (Mới/Đang xử lý/Đã xử lý)
- Sắp xếp: Ngày gửi (mới nhất trước)

**Chi tiết yêu cầu:**
```typescript
interface ContactDetail {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  status: 'new' | 'processing' | 'resolved';
  created_at: Date;
  processed_at?: Date;
  responses?: Response[];      // History of responses
}

interface Response {
  id: number;
  employee_id: number;
  employee_name: string;
  content: string;
  created_at: Date;
}
```

**Phản hồi yêu cầu:**
```typescript
interface ReplyDto {
  content: string;              // Email content
  send_email: boolean;         // Auto send email to customer
}
```

**Email Template (contact-reply.hbs):**
```handlebars
Hello {{full_name}},

Thank you for contacting us about "{{subject}}".

{{content}}

Trân trọng,
{{employee_name}}
{{company_name}}
```

#### 4.1.9 Quản Lý Thông Tin Khách Hàng
**Endpoints:**
- `GET /api/customers` - Danh sách khách hàng
- `GET /api/customers/:id` - Chi tiết khách hàng
- `PUT /api/customers/:id` - Cập nhật ghi chú
- `GET /api/customers/export` - Xuất Excel/CSV

**Danh sách khách hàng:**
- Hiển thị: STT, Họ tên, Email, SĐT, Công ty, Số lần liên hệ, Ngày gần nhất
- Tự động thu thập từ form liên hệ
- Tự động merge nếu trùng email

**Chi tiết khách hàng:**
```typescript
interface CustomerDetail {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
  contact_count: number;
  last_contact_at: Date;
  notes?: string;              // Internal notes
  contact_history: Contact[];  // All contact requests
}
```

### 4.2 TRANG WEBSITE NGƯỜI DÙNG

#### 4.2.1 Trang Chủ (Homepage)
**Route:** `/`

**Các thành phần:**

1. **Header**
   - Logo
   - Menu điều hướng (Trang chủ, Về công ty, Sản phẩm, Tin tức, Liên hệ)
   - Tìm kiếm
   - Hotline

2. **Hero Section / Banner Slider**
   - 3-5 slides tự động chuyển
   - Hình ảnh full-width
   - CTA buttons

3. **Giới thiệu ngắn**
   - 2-3 đoạn văn về công ty
   - Button "Xem thêm" → /about

4. **Sản phẩm nổi bật**
   - Hiển thị 8 sản phẩm (featured = true)
   - Grid layout 4 columns
   - Product card: Ảnh, Tên, Giá, Button "Xem chi tiết"

5. **Tin tức mới nhất**
   - Hiển thị 3-4 bài viết gần nhất
   - Card: Ảnh, Tiêu đề, Tóm tắt, Ngày đăng, Button "Đọc thêm"

6. **Đối tác/Khách hàng**
   - Logo slider
   - Auto scroll

7. **Footer**
   - Thông tin công ty (Địa chỉ, SĐT, Email)
   - Menu links
   - Social media links
   - Google Maps embed
   - Copyright

**API Calls:**
```typescript
// Homepage data
GET /api/public/homepage
Response: {
  featured_products: Product[],
  latest_news: News[]
}
```

#### 4.2.2 Về Công Ty
**Route:** `/about`

**Nội dung:**
- Lịch sử hình thành
- Tầm nhìn - Sứ mệnh - Giá trị cốt lõi
- Đội ngũ lãnh đạo (tùy chọn)
- Thành tựu đạt được
- Chứng nhận/Giải thưởng
- Album ảnh công ty
- Video giới thiệu (embed YouTube/Vimeo)

**SEO:**
```typescript
export async function generateMetadata() {
  return {
    title: 'Về Chúng Tôi - Company Name',
    description: 'Tìm hiểu về lịch sử, tầm nhìn, sứ mệnh...',
    openGraph: {
      title: 'Về Chúng Tôi',
      description: '...',
      images: ['/images/about-og.jpg'],
    }
  }
}
```

#### 4.2.3 Tin Tức
**Route:** `/news`, `/news/[slug]`

**Danh sách tin tức:**
```typescript
GET /api/public/news?page=1&limit=12&tag=technology

Response: {
  data: News[],
  pagination: {
    total: 100,
    page: 1,
    limit: 12,
    totalPages: 9
  },
  tags: string[]
}
```

**Layout:**
- Main content: Grid 2-3 columns
- Sidebar:
  - Tin nổi bật (top 5)
  - Tags cloud
  - Search box

**Chi tiết bài viết:**
```typescript
GET /api/public/news/:slug

Response: {
  id: number,
  title: string,
  content: string,  // HTML content
  featured_image: string,
  author: {
    id: number,
    name: string,
    role?: string,
    organization?: string
  },
  published_at: Date,
  views: number,
  tags: string[],
  related_posts: News[]  // 3-4 related articles
}
```

**Features:**
- Social share buttons (Facebook, Twitter, LinkedIn)
- Print button
- Reading time estimate
- View counter
- Related posts

#### 4.2.4 Sản Phẩm
**Route:** `/products`, `/products/[slug]`

**Danh sách sản phẩm:**
```typescript
GET /api/public/products?
  category=1&
  priceMin=1000000&
  priceMax=5000000&
  sort=price_asc&
  page=1&
  limit=12

Response: {
  data: Product[],
  pagination: {...},
  filters: {
    categories: Category[],
    priceRange: { min: number, max: number },
    tags: string[]
  }
}
```

**Layout:**
- Sidebar: 
  - Danh mục (tree view, multi-level)
  - Lọc theo giá (slider)
  - Tags
- Main content:
  - Grid view (12/24/48 sản phẩm)
  - Sort options
  - Pagination

**Chi tiết sản phẩm:**
```typescript
GET /api/public/products/:slug

Response: {
  id: number,
  code: string,
  name: string,
  category: Category,
  short_description: string,
  description: string,
  price: number,
  sale_price?: number,
  featured_image: FileUpload,  // file_uploads object
  image_gallery: FileUpload[],  // Array of file_uploads objects (retrieved from file_uploads table with entity_type='product' and entity_id)
  specifications: Record<string, string>,
  tags: string[],
  related_products: Product[]
}
```

**Layout:**
- Gallery: 
  - Main image (large)
  - Thumbnails (clickable)
  - Zoom on hover
  - Lightbox on click
- Product info:
  - Name, Code
  - Price (with sale price if available)
  - Short description
  - Contact button
  - Share buttons
- Tabs:
  - Description
  - Specifications
  - Related products

#### 4.2.5 Liên Hệ
**Route:** `/contact`

**Thông tin liên hệ:**
- Địa chỉ
- Số điện thoại (clickable tel: link)
- Email (clickable mailto: link)
- Giờ làm việc
- Google Maps (embed với marker)

**Form liên hệ:**
```typescript
interface ContactFormData {
  full_name: string;            // Required
  email: string;                // Required, validated
  phone: string;                // Required, Vietnamese format
  company?: string;             // Optional
  subject: string;              // Required
  message: string;              // Required, min 10 chars
  recaptcha_token: string;      // Required
}

POST /api/public/contacts

// On success:
1. Save to database (contact_requests table)
2. Auto create/update customer record
3. Send notification email to admin
4. Send confirmation email to customer
5. Return success message
```

**Validation:**
- Email: Valid format
- SĐT: 10-11 digits, Vietnamese format (0xxx or 84xxx)
- Captcha: Google reCAPTCHA v2/v3
- Rate limiting: Max 3 submissions / hour per IP

**Success Response:**
```json
{
  "success": true,
  "message": "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h."
}
```

### 4.3 Chi Tiết Trang Quản Trị (Admin Panel)

#### 4.3.1 Layout & Navigation

**Cấu trúc layout:**
- **Header:** Logo, thông tin user đăng nhập, dropdown menu (Profile, Settings, Logout), notifications
- **Sidebar:** Menu điều hướng với icons, collapse/expand, active state highlighting
- **Main Content:** Breadcrumbs, page title, action buttons, data table/form
- **Footer:** Copyright, version info

**Responsive Design:**
- Desktop: Sidebar luôn hiển thị
- Tablet: Sidebar có thể collapse
- Mobile: Sidebar dạng drawer (slide in/out)

**Menu Structure:**
```
📊 Dashboard
👥 Quản lý nhân viên
   ├── Danh sách nhân viên
   ├── Thêm nhân viên
   └── Phân quyền
📦 Quản lý sản phẩm
   ├── Danh sách sản phẩm
   ├── Thêm sản phẩm
   └── Import/Export
📁 Quản lý danh mục
   ├── Danh sách danh mục
   └── Sắp xếp danh mục
📰 Quản lý tin tức
   ├── Danh sách bài viết
   ├── Thêm bài viết
   └── Tags
📧 Yêu cầu liên hệ
   ├── Yêu cầu mới
   ├── Đang xử lý
   └── Đã xử lý
👤 Quản lý khách hàng
   ├── Danh sách khách hàng
   └── Export dữ liệu
⚙️ Cài đặt
   ├── Thông tin công ty
   ├── Email templates
   └── Hệ thống
```

#### 4.3.2 Dashboard Chi Tiết

**Các widget hiển thị:**
1. **Tổng quan nhanh:**
   - Tổng số nhân viên (active/inactive)
   - Tổng số sản phẩm (visible/hidden/featured)
   - Tổng số tin tức (published/draft)
   - Yêu cầu liên hệ mới (chưa xử lý)
   - Khách hàng mới trong tháng

2. **Biểu đồ thống kê:**
   - **Lượt truy cập website:** Line chart theo ngày/tuần/tháng
   - **Sản phẩm phổ biến:** Bar chart top 10 sản phẩm xem nhiều nhất
   - **Phân bố yêu cầu liên hệ:** Pie chart theo trạng thái
   - **Tin tức phổ biến:** Bar chart top 10 bài viết xem nhiều nhất

3. **Hoạt động gần đây:**
   - Danh sách các thao tác gần đây (log)
   - Yêu cầu liên hệ mới nhất
   - Sản phẩm/tin tức mới thêm

4. **Thông báo:**
   - Yêu cầu liên hệ chưa xử lý
   - Cảnh báo hệ thống
   - Thông báo cập nhật

**API Endpoints:**
- `GET /api/dashboard/stats` - Tổng quan thống kê
- `GET /api/dashboard/analytics?period=7d` - Phân tích lượt truy cập
- `GET /api/dashboard/recent-activities` - Hoạt động gần đây
- `GET /api/dashboard/notifications` - Thông báo

#### 4.3.3 Quản Lý Nhân Viên Chi Tiết

**Danh sách nhân viên:**
- **Bảng dữ liệu:**
  - Columns: STT, Ảnh đại diện, Mã NV, Họ tên, Email, SĐT, Tên đăng nhập, Chức vụ, Trạng thái, Hành động
  - Actions: Xem chi tiết, Sửa, Xóa, Khóa/Mở khóa
  - Bulk actions: Xóa nhiều, Khóa nhiều, Export

- **Filters:**
  - Theo chức vụ (admin/employee)
  - Theo trạng thái (hoatdong/khoa)
  - Theo ngày tạo

- **Search:**
  - Tìm kiếm theo: Mã NV, Họ tên, Email, SĐT, Tên đăng nhập
  - Tìm kiếm nâng cao với nhiều điều kiện

- **Pagination:**
  - Options: 10, 20, 50, 100 records/page
  - Hiển thị: "Showing X to Y of Z records"

**Form thêm/sửa nhân viên:**
- **Thông tin cơ bản:**
  - Mã nhân viên (auto-generate hoặc nhập thủ công)
  - Họ tên (required)
  - Email (required, unique, validated)
  - Số điện thoại (required, Vietnamese format)
  - Tên đăng nhập (required, unique)
  - Mật khẩu (required khi thêm mới, optional khi sửa)
  - Xác nhận mật khẩu

- **Thông tin bổ sung:**
  - Chức vụ (dropdown: admin/employee)
  - Ảnh đại diện (upload, preview)
  - Địa chỉ
  - Ngày sinh (date picker)
  - Trạng thái (radio: hoatdong/khoa)

- **Validation:**
  - Email: Format validation, unique check
  - SĐT: Vietnamese phone format (10-11 digits)
  - Mật khẩu: Min 8 chars, chứa chữ hoa, chữ thường, số
  - Tên đăng nhập: Min 3 chars, alphanumeric + underscore

**Chi tiết nhân viên:**
- Thông tin đầy đủ
- Lịch sử đăng nhập
- Lịch sử hoạt động
- Bài viết đã tạo

#### 4.3.4 Quản Lý Sản Phẩm Chi Tiết

**Danh sách sản phẩm:**
- **View modes:**
  - Grid view: Hiển thị dạng lưới với ảnh
  - List view: Hiển thị dạng bảng chi tiết

- **Filters:**
  - Theo danh mục (multi-select)
  - Theo trạng thái (hien/an)
  - Theo sản phẩm nổi bật (yes/no)
  - Theo khoảng giá (slider)
  - Theo tags

- **Sort options:**
  - Tên A-Z / Z-A
  - Giá tăng dần / giảm dần
  - Ngày tạo mới nhất / cũ nhất
  - Lượt xem nhiều nhất / ít nhất

**Form thêm/sửa sản phẩm:**
- **Tab 1: Thông tin cơ bản**
  - Mã sản phẩm (auto-generate từ tên)
  - Tên sản phẩm (required)
  - Danh mục (required, dropdown tree)
  - Mô tả ngắn (max 200 chars)
  - Mô tả chi tiết (rich text editor)
  - Giá (required, number)
  - Giá khuyến mãi (optional, number)
  - Trạng thái (radio: hien/an)
  - Nổi bật (checkbox)

- **Tab 2: Hình ảnh**
  - Album ảnh (max 10 ảnh, drag & drop để sắp xếp, required ít nhất 1 ảnh, upload với preview, chọn để đặt làm ảnh đại diện)
  - Upload multiple images
  - Crop/resize images

- **Tab 3: Thông số kỹ thuật**
  - Dynamic key-value pairs
  - Add/remove fields
  - Example: "Khối lượng": "500g", "Xuất xứ": "Việt Nam"

- **Tab 4: SEO & Tags**
  - SEO Title
  - SEO Description
  - URL Slug (auto-generate từ tên, có thể chỉnh sửa)
  - Tags (comma-separated hoặc tag input)

**Image Upload:**
- Drag & drop hoặc click to upload
- Preview images
- Delete images
- Set main image
- Không resize ảnh, lưu nguyên file gốc

#### 4.3.5 Quản Lý Danh Mục Chi Tiết

**Tree View:**
- Hiển thị dạng cây với expand/collapse
- Drag & drop để sắp xếp
- Indent để tạo danh mục con
- Context menu: Thêm, Sửa, Xóa, Duplicate

**Form thêm/sửa danh mục:**
- Tên danh mục (required)
- Danh mục cha (dropdown tree, nullable cho root)
- Mô tả (rich text)
- Thứ tự hiển thị (number)
- SEO Title
- SEO Description
- URL Slug (auto-generate)
- Trạng thái (hien/an)

**Business Rules:**
- Không cho phép chọn chính nó làm danh mục cha
- Kiểm tra vòng lặp khi chọn danh mục cha
- Max depth: 3 levels
- Khi xóa danh mục có sản phẩm: Hiển thị cảnh báo và yêu cầu di chuyển sản phẩm

#### 4.3.6 Quản Lý Tin Tức Chi Tiết

**Danh sách tin tức:**
- **View modes:**
  - List view: Bảng với ảnh thumbnail
  - Card view: Card layout với ảnh lớn

- **Filters:**
  - Trạng thái (nhap/dadang/an)
  - Tác giả
  - Ngày đăng (date range)
  - Tags
  - Nổi bật (yes/no)

**Form thêm/sửa bài viết:**
- **Rich Text Editor (Tiptap):**
  - Toolbar đầy đủ: Bold, Italic, Underline, Strikethrough
  - Headings (H2, H3, H4)
  - Lists (Bullet, Numbered)
  - Links
  - Images (inline, upload)
  - Code blocks
  - Blockquotes
  - Tables
  - Undo/Redo
  - Word count
  - Preview mode

- **Metadata:**
  - Tiêu đề (required)
  - Tóm tắt (max 300 chars)
  - Ảnh đại diện (required, upload)
  - Album ảnh (optional)
  - Tags (tag input)
  - Tác giả (auto từ user đăng nhập hoặc chọn điền thông tin tác giả, nếu chọn điền thông tin tác giả thì nhập form thông tin tác giả gồm: tên tác giả (required), vai trò/chức danh (option), Tổ chức / đơn vị đang làm việc(option), bio (option), ảnh chân dung tác giả (option, upload & preview))
  - Trạng thái (nhap/dadang/an)
  - Nổi bật (checkbox)
  - Ngày đăng (date picker, có thể đặt lịch)

- **SEO:**
  - SEO Title
  - SEO Description
  - URL Slug (auto-generate)

**Publish Flow:**
1. Save draft (status = 'draft')
2. Preview article
3. Publish now (status = 'published', published_at = now)
4. Schedule publish (published_at = future date)

#### 4.3.7 Quản Lý Yêu Cầu Liên Hệ Chi Tiết

**Danh sách yêu cầu:**
- **Tabs:**
  - Tất cả
  - New (status = 'new')
  - Processing (status = 'processing')
  - Resolved (status = 'resolved')

- **Columns:**
  - STT, Họ tên, Email, SĐT, Tiêu đề, Ngày gửi, Trạng thái, Người xử lý, Hành động

- **Actions:**
  - Xem chi tiết
  - Cập nhật trạng thái
  - Phản hồi
  - Xóa

**Chi tiết yêu cầu:**
- **Thông tin yêu cầu:**
  - Họ tên, Email, SĐT, Công ty
  - Tiêu đề, Nội dung
  - Ngày gửi
  - Trạng thái hiện tại

- **Lịch sử phản hồi:**
  - Danh sách các phản hồi đã gửi
  - Hiển thị: Người phản hồi, Nội dung, Ngày phản hồi

- **Form phản hồi:**
  - Rich text editor
  - Checkbox: "Gửi email cho khách hàng"
  - Preview email
  - Gửi phản hồi

**Email Templates:**
- Tự động gửi email khi có yêu cầu mới (thông báo admin)
- Tự động gửi email xác nhận cho khách hàng
- Email phản hồi từ admin

#### 4.3.8 Quản Lý Khách Hàng Chi Tiết

**Danh sách khách hàng:**
- **Columns:**
  - STT, Họ tên, Email, SĐT, Công ty, Số lần liên hệ, Ngày gần nhất, Hành động

- **Filters:**
  - Theo email
  - Theo công ty
  - Theo số lần liên hệ
  - Theo ngày gần nhất

**Chi tiết khách hàng:**
- **Thông tin khách hàng:**
  - Họ tên, Email, SĐT, Công ty, Địa chỉ
  - Số lần liên hệ
  - Ngày gần nhất
  - Ghi chú nội bộ

- **Lịch sử liên hệ:**
  - Tất cả các yêu cầu liên hệ của khách hàng này
  - Hiển thị: Tiêu đề, Ngày gửi, Trạng thái, Phản hồi

- **Actions:**
  - Cập nhật ghi chú
  - Xem lịch sử liên hệ
  - Export thông tin

### 4.4 Chi Tiết Trang Người Dùng (User Website)

#### 4.4.1 Layout & Navigation

**Cấu trúc layout:**
- **Header:**
  - Logo (clickable → homepage)
  - Main navigation menu (Trang chủ, Về công ty, Sản phẩm, Tin tức, Liên hệ)
  - Search box (global search)
  - Hotline (clickable tel: link)
  - Language switcher (vi/en)
  - Mobile menu (hamburger icon)

- **Main Content:**
  - Dynamic content theo route
  - Breadcrumbs (trừ homepage)

- **Footer:**
  - Thông tin công ty (Địa chỉ, SĐT, Email)
  - Quick links (menu)
  - Social media links
  - Google Maps embed
  - Copyright

**Responsive Design:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation: Desktop horizontal, Mobile drawer

#### 4.4.2 Trang Chủ Chi Tiết

**Hero Section / Banner Slider:**
- 3-5 slides tự động chuyển
- Auto-play với pause on hover
- Navigation dots
- Previous/Next arrows
- Mỗi slide: Hình ảnh full-width, Tiêu đề, Mô tả ngắn, CTA button
- Responsive images (lazy load)

**Giới thiệu ngắn:**
- 2-3 đoạn văn về công ty
- 1-2 hình ảnh minh họa
- Button "Xem thêm" → /about
- Layout: Text left, Image right (desktop) / Stack (mobile)

**Sản phẩm nổi bật:**
- **API:** `GET /api/public/products?featured=true&limit=8`
- Grid layout: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Product card:
  - Ảnh sản phẩm (lazy load, hover effect)
  - Tên sản phẩm
  - Giá (với giá khuyến mãi nếu có)
  - Button "Xem chi tiết" → /products/[slug]
- "Xem tất cả sản phẩm" button → /products

**Tin tức mới nhất:**
- **API:** `GET /api/public/news?limit=4&status=published&sort=published_at:desc`
- Layout: 2 columns (desktop), 1 column (mobile)
- News card:
  - Ảnh đại diện
  - Tiêu đề
  - Tóm tắt (truncate)
  - Ngày đăng
  - Button "Đọc thêm" → /news/[slug]
- "Xem tất cả tin tức" button → /news

**Đối tác/Khách hàng (Optional - Static Content):**
- Logo slider (auto-scroll) - Có thể được cấu hình tĩnh trong frontend
- 10-20 logo partners - Có thể được quản lý qua settings hoặc cấu hình tĩnh
- Infinite loop
- Pause on hover

**SEO:**
- Meta title, description
- Open Graph tags
- Structured data (JSON-LD)

#### 4.4.3 Trang Về Công Ty Chi Tiết

**Sections:**
1. **Lịch sử hình thành:**
   - Timeline hoặc text với images
   - Các mốc quan trọng

2. **Tầm nhìn - Sứ mệnh - Giá trị cốt lõi:**
   - 3 columns layout
   - Icons + text

3. **Đội ngũ lãnh đạo:**
   - Grid layout với ảnh và thông tin
   - Optional section

4. **Thành tựu đạt được:**
   - Numbers/Stats (animated counters)
   - Awards/Certifications

5. **Chứng nhận/Giải thưởng:**
   - Grid layout với images
   - Lightbox on click

6. **Album ảnh công ty:**
   - Gallery với lightbox
   - Filter by category

7. **Video giới thiệu:**
   - YouTube/Vimeo embed
   - Responsive iframe

**SEO:**
- Meta tags
- Structured data (Organization)

#### 4.4.4 Trang Tin Tức Chi Tiết

**Danh sách tin tức:**
- **Layout:**
  - Main: Grid 2-3 columns (desktop)
  - Sidebar: Tin nổi bật, Tags cloud, Search box

- **Filters:**
  - Theo tags (clickable tags)
  - Search box (full-text search)
  - Sort: Mới nhất, Xem nhiều nhất, Nổi bật

- **Pagination:**
  - Page numbers
  - Previous/Next buttons
  - "Load more" option (infinite scroll)

- **News card:**
  - Ảnh đại diện (lazy load)
  - Tiêu đề (truncate)
  - Tóm tắt (truncate)
  - Ngày đăng
  - Tags (clickable)
  - Button "Đọc thêm"

**Chi tiết bài viết:**
- **Header:**
  - Tiêu đề
  - Meta: Tác giả, Ngày đăng, Lượt xem, Reading time
  - Ảnh đại diện (full-width)

- **Content:**
  - Rich text content (HTML)
  - Images (responsive, lightbox)
  - Related posts (3-4 bài)

- **Sidebar:**
  - Tin nổi bật
  - Tags cloud
  - Social share buttons

- **SEO:**
  - Meta tags
  - Open Graph
  - Structured data (Article)

#### 4.4.5 Trang Sản Phẩm Chi Tiết

**Danh sách sản phẩm:**
- **Layout:**
  - Sidebar: Danh mục (tree), Lọc giá (slider), Tags
  - Main: Grid view với sort options

- **Filters:**
  - Danh mục (tree view, multi-select)
  - Khoảng giá (slider với min/max)
  - Tags (checkboxes)
  - Search box

- **Sort:**
  - Mặc định, Giá tăng, Giá giảm, Tên A-Z, Mới nhất

- **View options:**
  - Grid view (default)
  - List view
  - Items per page: 12, 24, 48

- **Product card:**
  - Ảnh sản phẩm (lazy load, hover zoom)
  - Tên sản phẩm
  - Mã sản phẩm
  - Giá (với giá khuyến mãi nếu có)
  - Button "Xem chi tiết"

**Chi tiết sản phẩm:**
- **Gallery:**
  - Main image (large, zoom on hover)
  - Thumbnails (clickable, scrollable)
  - Lightbox on click
  - Image navigation

- **Product info:**
  - Tên sản phẩm
  - Mã sản phẩm
  - Giá (với giá khuyến mãi, % discount)
  - Mô tả ngắn
  - Button "Liên hệ" (scroll to contact form hoặc open modal)
  - Social share buttons

- **Tabs:**
  - Mô tả chi tiết (rich text)
  - Thông số kỹ thuật (table)
  - Sản phẩm liên quan (grid)

- **Related products:**
  - Cùng danh mục
  - Grid layout
  - 4-6 sản phẩm

- **SEO:**
  - Meta tags
  - Open Graph
  - Structured data (Product)

#### 4.4.6 Trang Liên Hệ Chi Tiết

**Thông tin liên hệ:**
- **Layout:** 2 columns (desktop), 1 column (mobile)
  - Left: Form liên hệ
  - Right: Thông tin công ty + Google Maps

**Thông tin công ty:**
- Địa chỉ (clickable → Google Maps)
- Số điện thoại (clickable tel: link)
- Email (clickable mailto: link)
- Giờ làm việc
- Google Maps embed (responsive, với marker)

**Form liên hệ:**
- **Fields:**
  - Họ tên (required, text)
  - Email (required, email validation)
  - Số điện thoại (required, Vietnamese format)
  - Công ty (optional, text)
  - Tiêu đề (required, text)
  - Nội dung (required, textarea, min 10 chars)
  - reCAPTCHA (required)

- **Validation:**
  - Real-time validation
  - Error messages hiển thị dưới mỗi field
  - Disable submit button khi invalid

- **Submit:**
  - Loading state
  - Success message
  - Error handling
  - Auto-reset form sau khi submit thành công

- **Rate limiting:**
  - Max 3 submissions per hour per IP
  - Hiển thị thông báo nếu vượt quá

**Success flow:**
1. Validate form
2. Verify reCAPTCHA
3. Check rate limit
4. Submit to API
5. Show success message
6. Send confirmation email (async)
7. Reset form

---

## 5. Cơ Sở Dữ Liệu {#co-so-du-lieu}

### 5.1 Database Schema (PostgreSQL)

```sql
-- ============================================
-- Table: employees
-- Store employee information and accounts
-- ============================================
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  employee_code VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'employee')),
  avatar_id INT REFERENCES file_uploads(id) ON DELETE SET NULL,
  address TEXT,
  date_of_birth DATE,
  status VARCHAR(20) NOT NULL DEFAULT 'active' 
    CHECK (status IN ('active', 'locked')),
  failed_login_attempts INT DEFAULT 0,
  locked_until TIMESTAMP,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP  -- Soft delete
);

CREATE INDEX idx_employees_email ON employees(email);
CREATE INDEX idx_employees_username ON employees(username);
CREATE INDEX idx_employees_status ON employees(status);

-- ============================================
-- Table: categories
-- Store product categories (tree structure)
-- ============================================
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  parent_id INT REFERENCES categories(id) ON DELETE SET NULL,
  description TEXT,
  display_order INT DEFAULT 0,
  seo_title VARCHAR(255),
  seo_description TEXT,
  url_slug VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'visible'
    CHECK (status IN ('visible', 'hidden')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_categories_parent_id ON categories(parent_id);
CREATE INDEX idx_categories_slug ON categories(url_slug);
CREATE INDEX idx_categories_status ON categories(status);

-- ============================================
-- Table: products
-- Store product information
-- ============================================
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_id INT NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  short_description TEXT,
  description TEXT,
  price DECIMAL(15,2) NOT NULL,
  sale_price DECIMAL(15,2),
  featured_image_id INT REFERENCES file_uploads(id) ON DELETE SET NULL,
  specifications JSONB,  -- Key-value pairs
  tags VARCHAR(500),
  seo_title VARCHAR(255),
  seo_description TEXT,
  url_slug VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'visible'
    CHECK (status IN ('visible', 'hidden')),
  featured BOOLEAN DEFAULT false,
  views INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_slug ON products(url_slug);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_views ON products(views);
CREATE INDEX idx_products_featured_image_id ON products(featured_image_id);

-- Full-text search
CREATE INDEX idx_products_search ON products 
  USING gin(to_tsvector('vietnamese', name || ' ' || COALESCE(short_description, '')));

-- ============================================
-- Table: authors
-- Store author information for news articles
-- ============================================
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  role VARCHAR(255),  -- Chức danh / vai trò
  organization VARCHAR(255),  -- Tổ chức / đơn vị đang làm việc
  bio TEXT,
  avatar_id INT REFERENCES file_uploads(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_authors_email ON authors(email);
CREATE INDEX idx_authors_name ON authors(name);
CREATE INDEX idx_authors_avatar_id ON authors(avatar_id);

-- ============================================
-- Table: news
-- Store news/blog articles
-- ============================================
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  summary TEXT,
  content TEXT NOT NULL,
  featured_image_id INT REFERENCES file_uploads(id) ON DELETE SET NULL,
  author_id INT NOT NULL REFERENCES authors(id) ON DELETE RESTRICT,
  tags VARCHAR(500),
  seo_title VARCHAR(255),
  seo_description TEXT,
  url_slug VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'published', 'hidden')),
  featured BOOLEAN DEFAULT false,
  views INT DEFAULT 0,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_news_author_id ON news(author_id);
CREATE INDEX idx_news_slug ON news(url_slug);
CREATE INDEX idx_news_status ON news(status);
CREATE INDEX idx_news_featured ON news(featured);
CREATE INDEX idx_news_published_at ON news(published_at DESC);
CREATE INDEX idx_news_views ON news(views);
CREATE INDEX idx_news_featured_image_id ON news(featured_image_id);

-- Full-text search
CREATE INDEX idx_news_search ON news 
  USING gin(to_tsvector('vietnamese', title || ' ' || COALESCE(summary, '')));

-- ============================================
-- Table: contact_requests
-- Store contact requests from customers
-- ============================================
CREATE TABLE contact_requests (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(255),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'processing', 'resolved')),
  assigned_to_id INT REFERENCES employees(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  processed_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_contact_requests_email ON contact_requests(email);
CREATE INDEX idx_contact_requests_phone ON contact_requests(phone);
CREATE INDEX idx_contact_requests_status ON contact_requests(status);
CREATE INDEX idx_contact_requests_created_at ON contact_requests(created_at DESC);

-- ============================================
-- Table: responses
-- Store responses to contact requests
-- ============================================
CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  contact_request_id INT NOT NULL REFERENCES contact_requests(id) ON DELETE CASCADE,
  employee_id INT NOT NULL REFERENCES employees(id) ON DELETE RESTRICT,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_responses_contact_request_id ON responses(contact_request_id);
CREATE INDEX idx_responses_employee_id ON responses(employee_id);

-- ============================================
-- Table: customers
-- Store customer information
-- ============================================
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  address TEXT,
  contact_count INT DEFAULT 1,
  last_contact_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_phone ON customers(phone);
CREATE INDEX idx_customers_last_contact_at ON customers(last_contact_at DESC);

-- ============================================
-- Table: migrations
-- Store migration history (auto-created by TypeORM)
-- ============================================
CREATE TABLE migrations (
  id SERIAL PRIMARY KEY,
  timestamp BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL
);

-- ============================================
-- Table: system_logs
-- Store system logs
-- ============================================
CREATE TABLE system_logs (
  id SERIAL PRIMARY KEY,
  level VARCHAR(20) NOT NULL CHECK (level IN ('error', 'warn', 'info', 'debug')),
  message TEXT NOT NULL,
  context JSONB,
  user_id INT REFERENCES employees(id),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_system_logs_level ON system_logs(level);
CREATE INDEX idx_system_logs_created_at ON system_logs(created_at DESC);
CREATE INDEX idx_system_logs_user_id ON system_logs(user_id);

-- ============================================
-- Table: activity_logs
-- Store employee activity history
-- ============================================
CREATE TABLE activity_logs (
  id SERIAL PRIMARY KEY,
  employee_id INT NOT NULL REFERENCES employees(id) ON DELETE RESTRICT,
  action VARCHAR(100) NOT NULL, -- 'create', 'update', 'delete', 'login', 'logout'
  entity_type VARCHAR(50) NOT NULL, -- 'product', 'news', 'employee', etc.
  entity_id INT,
  description TEXT,
  old_values JSONB,
  new_values JSONB,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_activity_logs_employee_id ON activity_logs(employee_id);
CREATE INDEX idx_activity_logs_entity ON activity_logs(entity_type, entity_id);
CREATE INDEX idx_activity_logs_created_at ON activity_logs(created_at DESC);
CREATE INDEX idx_activity_logs_action ON activity_logs(action);

-- ============================================
-- Table: settings
-- Store system settings
-- ============================================
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  type VARCHAR(20) NOT NULL DEFAULT 'string' CHECK (type IN ('string', 'number', 'boolean', 'json')),
  description TEXT,
  group_name VARCHAR(50), -- 'general', 'email', 'seo', etc.
  updated_by INT REFERENCES employees(id),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_settings_key ON settings(key);
CREATE INDEX idx_settings_group ON settings(group_name);

-- ============================================
-- Table: url_redirects
-- Store URL redirects when slug changes
-- ============================================
CREATE TABLE url_redirects (
  id SERIAL PRIMARY KEY,
  old_url VARCHAR(500) NOT NULL,
  new_url VARCHAR(500) NOT NULL,
  entity_type VARCHAR(50) NOT NULL, -- 'product', 'news', 'category'
  entity_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_url_redirects_old_url ON url_redirects(old_url);
CREATE INDEX idx_url_redirects_entity ON url_redirects(entity_type, entity_id);
CREATE UNIQUE INDEX idx_url_redirects_old_url_unique ON url_redirects(old_url);

-- Trigger to auto-update updated_at
CREATE TRIGGER trg_url_redirects_updated_at
  BEFORE UPDATE ON url_redirects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Table: file_uploads
-- Store uploaded file information
-- ============================================
CREATE TABLE file_uploads (
  id SERIAL PRIMARY KEY,
  original_name VARCHAR(255) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size BIGINT NOT NULL,
  mime_type VARCHAR(100),
  file_type VARCHAR(20) NOT NULL CHECK (file_type IN ('image', 'video')),
  entity_type VARCHAR(50), -- 'product', 'news', 'employee', 'author'
  entity_id INT,
  uploaded_by INT REFERENCES employees(id),
  display_order INT DEFAULT 0,  -- Thứ tự hiển thị (cho gallery)
  is_main BOOLEAN DEFAULT false,  -- Đánh dấu ảnh chính (featured_image)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_file_uploads_entity ON file_uploads(entity_type, entity_id);
CREATE INDEX idx_file_uploads_uploaded_by ON file_uploads(uploaded_by);
CREATE INDEX idx_file_uploads_file_type ON file_uploads(file_type);
CREATE INDEX idx_file_uploads_created_at ON file_uploads(created_at DESC);
CREATE INDEX idx_file_uploads_order ON file_uploads(entity_type, entity_id, display_order);
CREATE INDEX idx_file_uploads_main ON file_uploads(entity_type, entity_id, is_main) WHERE is_main = true;

-- ============================================
-- Comments cho các bảng
-- ============================================
COMMENT ON TABLE employees IS 'Table storing employee information and login accounts';
COMMENT ON COLUMN employees.username IS 'Username for login (unique, required)';
COMMENT ON COLUMN employees.employee_code IS 'Employee code (unique, can be auto-generated)';
COMMENT ON COLUMN employees.failed_login_attempts IS 'Number of consecutive failed login attempts';
COMMENT ON COLUMN employees.locked_until IS 'Account lock expiration time (NULL if not locked)';
COMMENT ON COLUMN employees.deleted_at IS 'Soft delete: Deletion timestamp (NULL if not deleted)';

COMMENT ON TABLE categories IS 'Table storing product categories (tree structure)';
COMMENT ON COLUMN categories.parent_id IS 'Parent category ID (NULL if root category)';
COMMENT ON COLUMN categories.display_order IS 'Display order (smaller number displays first)';

COMMENT ON TABLE products IS 'Table storing product information';
COMMENT ON COLUMN products.featured_image_id IS 'Foreign key to file_uploads table for featured image';
COMMENT ON COLUMN products.specifications IS 'JSON object containing technical specifications (key-value pairs)';
COMMENT ON COLUMN products.image_gallery IS 'Image gallery is retrieved from file_uploads table using entity_type=''product'' and entity_id';
COMMENT ON COLUMN products.views IS 'Number of product views (auto-incremented when viewed)';

COMMENT ON TABLE authors IS 'Table storing author information for news articles';
COMMENT ON COLUMN authors.name IS 'Author full name (required)';
COMMENT ON COLUMN authors.email IS 'Author email (optional)';
COMMENT ON COLUMN authors.role IS 'Author role/position (optional)';
COMMENT ON COLUMN authors.organization IS 'Author organization/company (optional)';
COMMENT ON COLUMN authors.bio IS 'Author biography (optional)';

COMMENT ON TABLE url_redirects IS 'Table storing URL redirects when entity slugs change';
COMMENT ON COLUMN url_redirects.old_url IS 'Old URL (before slug change), format: /{entity_type}/{old_slug}';
COMMENT ON COLUMN url_redirects.new_url IS 'New URL (after slug change), format: /{entity_type}/{new_slug}';
COMMENT ON COLUMN url_redirects.entity_type IS 'Entity type: product, news, or category';
COMMENT ON COLUMN url_redirects.entity_id IS 'ID of the entity (for reference)';
COMMENT ON COLUMN authors.avatar_id IS 'Foreign key to file_uploads table for author avatar';

COMMENT ON TABLE news IS 'Table storing news/blog articles';
COMMENT ON COLUMN news.featured_image_id IS 'Foreign key to file_uploads table for featured image';
COMMENT ON COLUMN news.author_id IS 'Foreign key to authors table';
COMMENT ON COLUMN news.status IS 'Status: draft (draft), published (published), hidden (hidden)';
COMMENT ON COLUMN news.image_gallery IS 'Image gallery is retrieved from file_uploads table using entity_type=''news'' and entity_id';
COMMENT ON COLUMN news.published_at IS 'Article publication date (NULL if not published, can be scheduled)';

COMMENT ON TABLE contact_requests IS 'Table storing contact requests from customers';
COMMENT ON COLUMN contact_requests.assigned_to_id IS 'ID of employee handling the request (NULL if not assigned)';
COMMENT ON COLUMN contact_requests.processed_at IS 'Request processing start time';

COMMENT ON TABLE responses IS 'Table storing response history for contact requests';
COMMENT ON COLUMN responses.contact_request_id IS 'ID of contact request being responded to';

COMMENT ON TABLE customers IS 'Table storing customer information (auto-created from contact form)';
COMMENT ON COLUMN customers.contact_count IS 'Number of times customer has contacted';
COMMENT ON COLUMN customers.last_contact_at IS 'Most recent contact date';

COMMENT ON TABLE file_uploads IS 'Table storing metadata of uploaded files';
COMMENT ON COLUMN file_uploads.display_order IS 'Display order for gallery images (0-based)';
COMMENT ON COLUMN file_uploads.is_main IS 'Whether this is the main/featured image (true) or gallery image (false)';

COMMENT ON TABLE system_logs IS 'Table storing system logs (errors, warnings, info)';
COMMENT ON TABLE activity_logs IS 'Table storing employee activity history';
COMMENT ON TABLE settings IS 'Table storing system settings (key-value)';
COMMENT ON TABLE file_uploads IS 'Table storing metadata of uploaded files';

-- ============================================
-- Triggers: Auto-update updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for employees table
CREATE TRIGGER update_employees_updated_at
  BEFORE UPDATE ON employees
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for categories table
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for products table
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for news table
CREATE TRIGGER update_news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for customers table
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON customers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for settings table
CREATE TRIGGER update_settings_updated_at
  BEFORE UPDATE ON settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for authors table
CREATE TRIGGER update_authors_updated_at
  BEFORE UPDATE ON authors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Foreign Key Constraints (additional)
-- ============================================
-- Ensure foreign keys have appropriate ON DELETE/UPDATE
ALTER TABLE categories
  ADD CONSTRAINT fk_categories_parent
  FOREIGN KEY (parent_id)
  REFERENCES categories(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE products
  ADD CONSTRAINT fk_products_category
  FOREIGN KEY (category_id)
  REFERENCES categories(id)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;

ALTER TABLE news
  ADD CONSTRAINT fk_news_author
  FOREIGN KEY (author_id)
  REFERENCES authors(id)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;

ALTER TABLE authors
  ADD CONSTRAINT fk_authors_avatar
  FOREIGN KEY (avatar_id)
  REFERENCES file_uploads(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE contact_requests
  ADD CONSTRAINT fk_contact_requests_assigned_to
  FOREIGN KEY (assigned_to_id)
  REFERENCES employees(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE responses
  ADD CONSTRAINT fk_responses_contact_request
  FOREIGN KEY (contact_request_id)
  REFERENCES contact_requests(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE responses
  ADD CONSTRAINT fk_responses_employee
  FOREIGN KEY (employee_id)
  REFERENCES employees(id)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;

-- Foreign keys for file references
ALTER TABLE products
  ADD CONSTRAINT fk_products_featured_image
  FOREIGN KEY (featured_image_id)
  REFERENCES file_uploads(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE news
  ADD CONSTRAINT fk_news_featured_image
  FOREIGN KEY (featured_image_id)
  REFERENCES file_uploads(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE employees
  ADD CONSTRAINT fk_employees_avatar
  FOREIGN KEY (avatar_id)
  REFERENCES file_uploads(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

-- ============================================
-- Additional indexes for performance
-- ============================================
-- Composite indexes for common queries
CREATE INDEX idx_products_category_status ON products(category_id, status);
CREATE INDEX idx_products_featured_status ON products(featured, status) WHERE status = 'visible';
CREATE INDEX idx_news_status_published_at ON news(status, published_at DESC) WHERE status = 'published';
CREATE INDEX idx_contact_requests_status_created_at ON contact_requests(status, created_at DESC);

-- Partial indexes for soft delete
CREATE INDEX idx_employees_active ON employees(id) WHERE deleted_at IS NULL;
CREATE INDEX idx_products_active ON products(id) WHERE deleted_at IS NULL;
CREATE INDEX idx_news_active ON news(id) WHERE deleted_at IS NULL;

-- ============================================
-- Useful views
-- ============================================
-- View: Visible products list (only non-deleted and visible products)
CREATE OR REPLACE VIEW vw_products_visible AS
SELECT 
  p.*,
  c.name AS category_name,
  c.url_slug AS category_slug
FROM products p
INNER JOIN categories c ON p.category_id = c.id
WHERE p.deleted_at IS NULL
  AND p.status = 'visible'
  AND c.deleted_at IS NULL
  AND c.status = 'visible';

-- View: Published news list (only non-deleted and published news)
CREATE OR REPLACE VIEW vw_news_published AS
SELECT 
  n.*,
  a.name AS author_name
FROM news n
INNER JOIN authors a ON n.author_id = a.id
WHERE n.deleted_at IS NULL
  AND n.status = 'published'
  AND n.published_at IS NOT NULL
  AND n.published_at <= CURRENT_TIMESTAMP;

-- View: Dashboard statistics
CREATE OR REPLACE VIEW vw_dashboard_stats AS
SELECT 
  (SELECT COUNT(*) FROM employees WHERE deleted_at IS NULL AND status = 'active') AS employees_active,
  (SELECT COUNT(*) FROM employees WHERE deleted_at IS NULL) AS employees_total,
  (SELECT COUNT(*) FROM products WHERE deleted_at IS NULL AND status = 'visible') AS products_visible,
  (SELECT COUNT(*) FROM products WHERE deleted_at IS NULL AND featured = true) AS products_featured,
  (SELECT COUNT(*) FROM news WHERE deleted_at IS NULL AND status = 'published') AS news_published,
  (SELECT COUNT(*) FROM news WHERE deleted_at IS NULL AND status = 'draft') AS news_draft,
  (SELECT COUNT(*) FROM contact_requests WHERE status = 'new' AND deleted_at IS NULL) AS contacts_pending,
  (SELECT COUNT(*) FROM customers WHERE deleted_at IS NULL) AS customers_total;
```

### 5.2 Database Relationships Diagram

```
authors (1) ──< (N) news (author_id)
employees (1) ──< (N) contact_requests (assigned_to_id)
employees (1) ──< (N) responses (employee_id)
employees (1) ──< (N) activity_logs (employee_id)
employees (1) ──< (N) file_uploads (uploaded_by)
employees (1) ──< (1) file_uploads (avatar_id)
authors (1) ──< (1) file_uploads (avatar_id)

products (1) ──< (1) file_uploads (featured_image_id)
news (1) ──< (1) file_uploads (featured_image_id)

categories (1) ──< (N) categories (parent_id) [self-reference]
categories (1) ──< (N) products (category_id)

contact_requests (1) ──< (N) responses (contact_request_id)

customers (1) ──< (N) contact_requests (email match, no FK)
```

### 5.3 Database Indexes Summary

**Primary Indexes (Primary Keys):**
- All tables have `id SERIAL PRIMARY KEY`

**Unique Indexes:**
- `employees.employee_code`, `employees.email`, `employees.username`
- `categories.url_slug`
- `products.code`, `products.url_slug`
- `news.url_slug`
- `customers.email`
- `settings.key`

**Foreign Key Indexes (for file references):**
- `products.featured_image_id` → `file_uploads.id`
- `news.featured_image_id` → `file_uploads.id`
- `employees.avatar_id` → `file_uploads.id`
- `authors.avatar_id` → `file_uploads.id`

**Foreign Key Indexes:**
- All foreign keys have automatic indexes

**File Reference Indexes:**
- `idx_products_featured_image_id` on `products.featured_image_id`
- `idx_news_featured_image_id` on `news.featured_image_id`
- `idx_employees_avatar_id` on `employees.avatar_id`
- `idx_authors_avatar_id` on `authors.avatar_id`

**Performance Indexes:**
- Full-text search indexes for `products` and `news` (GIN index với Vietnamese language)
- Composite indexes for common queries (category+status, featured+status, status+published_at)
- Partial indexes for soft delete (WHERE deleted_at IS NULL)
- Indexes on columns frequently used for filtering/sorting (views, created_at, price)
- Covering indexes cho các query thường dùng (bao gồm các columns thường được SELECT)

**Query Optimization Tips:**
- Sử dụng `SELECT` cụ thể thay vì `SELECT *`
- Sử dụng `JOIN` thay vì N+1 queries
- Sử dụng `LIMIT` và `OFFSET` cho pagination
- Sử dụng `EXPLAIN ANALYZE` để phân tích query performance
- Cache các query phức tạp hoặc thường xuyên được gọi

### 5.4 Database Constraints

**Check Constraints:**
- `employees.role`: Only allows 'admin' or 'employee'
- `employees.status`: Only allows 'active' or 'locked'
- `categories.status`: Only allows 'visible' or 'hidden'
- `products.status`: Only allows 'visible' or 'hidden'
- `news.status`: Only allows 'draft', 'published', or 'hidden'
- `contact_requests.status`: Only allows 'new', 'processing', or 'resolved'
- `system_logs.level`: Only allows 'error', 'warn', 'info', or 'debug'
- `file_uploads.file_type`: Only allows 'image' or 'video'
- `settings.type`: Only allows 'string', 'number', 'boolean', or 'json'

**Foreign Key Constraints:**
- All foreign keys have appropriate ON DELETE and ON UPDATE
- CASCADE: Delete child when parent is deleted (responses → contact_requests)
- RESTRICT: Do not allow deletion if child exists (products → categories)
- SET NULL: Set NULL when parent is deleted (contact_requests.assigned_to_id)

### 5.5 Database Triggers

**Auto-update Timestamps:**
- Automatically update `updated_at` on UPDATE for tables:
  - `employees`
  - `authors`
  - `categories`
  - `products`
  - `news`
  - `customers`
  - `settings`

### 5.6 Database Views

**Created Views:**
1. `vw_products_visible`: Visible products (joined with categories)
2. `vw_news_published`: Published news (joined with author)
3. `vw_dashboard_stats`: Overall statistics for dashboard

### 5.7 Database Best Practices

**Soft Delete:**
- All main tables have `deleted_at TIMESTAMP`
- Use `WHERE deleted_at IS NULL` to filter non-deleted data
- Partial indexes on `deleted_at IS NULL` to optimize performance

**Timestamps:**
- `created_at`: Automatically set on INSERT (DEFAULT CURRENT_TIMESTAMP)
- `updated_at`: Automatically updated on UPDATE (trigger)

**JSON/JSONB Fields:**
- `products.specifications`: Object key-value pairs
- Image gallery: Retrieved from `file_uploads` table where `entity_type='product'` and `entity_id=products.id`
- Image gallery: Retrieved from `file_uploads` table where `entity_type='news'` and `entity_id=news.id`
- `activity_logs.old_values`, `new_values`: Object JSON

**File References:**
- `products.featured_image_id`: Foreign key to `file_uploads` table
- `products.image_gallery`: Retrieved from `file_uploads` table where `entity_type='product'` and `entity_id=products.id`
- `news.featured_image_id`: Foreign key to `file_uploads` table
- `news.image_gallery`: Retrieved from `file_uploads` table where `entity_type='news'` and `entity_id=news.id`
- `employees.avatar_id`: Foreign key to `file_uploads` table
- `authors.avatar_id`: Foreign key to `file_uploads` table

**Full-text Search:**
- Use PostgreSQL GIN index with `to_tsvector('vietnamese', ...)`
- Support Vietnamese language search
- Indexes on `products` and `news`

---

## 6. Hệ Thống Upload & Lưu Trữ {#upload-storage}

### 6.1 Cấu Trúc Thư Mục Upload

**Thư mục gốc:** `./uploads` (có thể cấu hình qua `UPLOAD_PATH`)

**Cấu trúc:**
```
uploads/
├── products/          # Ảnh sản phẩm
├── news/              # Ảnh tin tức
├── employees/         # Ảnh nhân viên
└── videos/            # Video
```

**Lưu ý:**
- Mỗi loại file được lưu trong thư mục riêng
- Tên file được generate tự động (UUID) để tránh trùng lặp
- Giữ nguyên extension của file gốc

### 6.2 Upload Flow

**Quy trình upload (Client-side temporary files):**

1. **Client tạo file tạm:**
   - User chọn file từ máy tính
   - File được lưu tạm ở client (không gửi lên server ngay)
   - Hiển thị preview file trên UI
   - Cho phép sắp xếp thứ tự, đánh dấu ảnh chính (main image)
   - File tạm có cấu trúc:
     ```typescript
     interface TempFile {
       id: string;              // Temporary ID (UUID hoặc timestamp)
       file: File;              // File object từ input
       preview: string;         // URL preview (blob URL)
       display_order: number;           // Thứ tự hiển thị
       is_main: boolean;        // Đánh dấu ảnh chính (chỉ cho featured_image)
       file_type: 'image' | 'video';
     }
     ```

2. **Khi submit form (ví dụ tạo sản phẩm):**
   - Client gửi request `POST /api/products` với:
     - Form data chứa tất cả fields của sản phẩm
     - Files (multipart/form-data) kèm metadata:
       - `files[]`: Array các file
       - `file_orders[]`: Array thứ tự tương ứng với files
       - `main_file_index`: Index của file được đánh dấu là main (featured_image)
     - Hoặc JSON body với base64/files + metadata (tùy implementation)

3. **Backend xử lý (trong 1 transaction):**
   - Bắt đầu database transaction
   - Validate tất cả files cùng lúc (type, size, count)
   - Generate unique filename cho từng file (UUID)
   - Save files to disk (parallel nếu có thể)
   - Tạo entity (product/news) trong database
   - Save metadata to `file_uploads` table với:
     - `entity_type`: 'product' (hoặc 'news', 'employee', 'author')
     - `entity_id`: ID của entity vừa tạo
     - `display_order`: Thứ tự hiển thị (cho image_gallery)
     - `is_main`: true/false (cho featured_image)
   - Update `featured_image_id` trong entity nếu `is_main=true`
   - Commit transaction
   - Nếu có lỗi: Rollback transaction và xóa files đã lưu
   - Invalidate cache liên quan
   - Return entity với đầy đủ thông tin files

4. **Response:**
   ```json
   {
     "success": true,
     "data": {
       "id": 1,
       "name": "Product Name",
       "featured_image": {
         "id": 1,
         "url": "http://localhost:3000/uploads/products/uuid-main.jpg"
       },
       "image_gallery": [
         {
           "id": 2,
           "url": "http://localhost:3000/uploads/products/uuid-1.jpg",
           "display_order": 1
         },
         {
           "id": 3,
           "url": "http://localhost:3000/uploads/products/uuid-2.jpg",
           "display_order": 2
         }
       ]
     }
   }
   ```

**Lưu ý:**
- File tạm chỉ tồn tại ở client, không lưu trên server
- Tất cả files được xử lý trong cùng 1 transaction khi tạo entity
- Nếu có lỗi, tất cả files sẽ được rollback
- Cho phép sắp xếp thứ tự files trước khi submit

### 6.3 Image Processing
- Lưu nguyên file gốc, không resize
- Chỉ trả về 1 URL

### 6.4 Video Processing
- Lưu nguyên file video gốc
- Không extract thumbnail tự động
- Chỉ trả về 1 URL duy nhất

### 6.5 File Validation

**Image Validation:**
- Allowed types: `jpg`, `jpeg`, `png`, `gif`, `webp`
- Max size: 5MB (có thể cấu hình)
- Validate MIME type
- Check file signature (magic bytes)

**Video Validation:**
- Allowed types: `mp4`, `avi`, `mov`, `wmv`
- Max size: 100MB (có thể cấu hình)
- Validate MIME type

### 6.6 File Storage

**Local Storage:**
- Files lưu trên server filesystem
- Nginx serve static files từ `/uploads`
- URL pattern: `http://domain.com/uploads/{type}/{filename}`

**Future: Cloud Storage (Optional):**
- AWS S3
- Google Cloud Storage
- Azure Blob Storage

### 6.7 File Management

**Metadata Tracking:**
- Tất cả file upload được lưu trong `file_uploads` table
- Track: original name, file path, size, mime type, entity relationship
- Soft delete: `deleted_at` timestamp

**Cleanup:**
- Xóa file khi entity bị xóa
- Xóa file orphan (không liên kết với entity nào)
- Scheduled job để cleanup files cũ

---

## 7. Authentication & Security {#auth-security}

### 7.1 Authentication Flow

**Login Process:**
1. User gửi credentials (employee_code, identifier, password)
2. Backend validate credentials
3. Check account status (active/locked)
4. Check failed login attempts
5. Verify password với bcrypt
6. Generate JWT token
7. Update last_login timestamp
8. Return token và user info

**JWT Token Structure:**
```json
{
  "sub": 1,
  "employee_code": "NV001",
  "role": "admin",
  "iat": 1234567890,
  "exp": 1234575690
}
```

### 7.2 Authorization

**Role-based Access Control (RBAC):**
- `admin`: Full access to all features
- `employee`: Limited access (có thể customize)

**Guards:**
- `JwtAuthGuard`: Verify JWT token
- `RolesGuard`: Check user role
- `Public()`: Bypass authentication (cho public endpoints)

### 7.3 Security Features

**Password Security:**
- Bcrypt hashing với 10 rounds
- Password requirements:
  - Min 8 characters
  - Contains uppercase letter
  - Contains lowercase letter
  - Contains number
  - (Optional) Special character

**Account Locking:**
- Lock after 5 failed login attempts
- Lock duration: 15 minutes
- Auto-unlock sau thời gian lock
- Admin có thể unlock manually

**Session Management:**
- JWT token expiration: 30 minutes (default)
- Remember me: 30 days
- Refresh token: 7 days
- Logout: Invalidate token (blacklist)

**Rate Limiting:**
- Login endpoint: 5 requests/minute
- API endpoints: 100 requests/minute
- Contact form: 3 requests/hour per IP

**Security Headers (Helmet):**
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security (HTTPS only)

### 7.4 CORS Configuration

**Allowed Origins:**
- Admin frontend: `http://localhost:3001` (dev) / `https://admin.example.com` (prod)
- Public frontend: `http://localhost:3002` (dev) / `https://www.example.com` (prod)

**CORS Settings:**
- Credentials: `true` (cho JWT cookies nếu dùng)
- Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
- Headers: Content-Type, Authorization, Accept

### 7.5 Input Validation

**Validation Strategy:**
- DTOs với `class-validator` decorators
- Global validation pipe
- Custom validators cho business rules

**Common Validators:**
- `@IsString()`, `@IsEmail()`, `@IsNumber()`
- `@IsNotEmpty()`, `@IsOptional()`
- `@MinLength()`, `@MaxLength()`
- `@Matches()` (regex patterns)

### 7.6 SQL Injection Prevention

**TypeORM Protection:**
- Parameterized queries (automatic)
- Entity validation
- Type safety với TypeScript

**Best Practices:**
- Không dùng raw SQL queries
- Validate input trước khi query
- Use TypeORM query builder

### 7.7 XSS Prevention

**Backend:**
- Sanitize user input
- Escape HTML trong responses
- Content Security Policy headers

**Frontend:**
- React auto-escapes
- Sanitize rich text content
- Validate user input

---

## 8. Giao Diện Người Dùng {#giao-dien}

### 8.1 Design System

**Color Palette:**
- Primary color: Brand color
- Secondary color: Accent color
- Neutral colors: Gray scale
- Status colors: Success, Warning, Error, Info

**Typography:**
- Font family: System fonts hoặc custom fonts
- Font sizes: Responsive scale
- Line heights: Optimized for readability

**Spacing:**
- Consistent spacing scale (4px, 8px, 16px, 24px, 32px...)
- Tailwind spacing utilities

**Components:**
- Reusable UI components (Button, Input, Modal, etc.)
- Consistent styling
- Responsive design

### 8.2 Admin Frontend UI

**Design Principles:**
- Clean, professional interface
- Easy navigation
- Clear data visualization
- Efficient workflows

**Key Components:**
- Sidebar navigation
- Data tables với sorting, filtering, pagination
- Forms với validation
- Charts và graphs
- Modals và dialogs

**Responsive Breakpoints:**
- Desktop: > 1024px (full sidebar)
- Tablet: 768px - 1024px (collapsible sidebar)
- Mobile: < 768px (drawer sidebar)

### 8.3 Public Frontend UI

**Design Principles:**
- Modern, attractive design
- Fast loading
- SEO optimized
- Mobile-first approach

**Key Components:**
- Header với navigation
- Hero sections
- Product cards
- News cards
- Contact forms
- Footer

**Responsive Breakpoints:**
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### 8.4 Performance Optimization

**Backend Performance:**

**Database Optimization:**
- Sử dụng indexes phù hợp (đã được định nghĩa trong schema)
- Tránh N+1 queries bằng cách sử dụng `relations` trong TypeORM
- Sử dụng `QueryBuilder` cho các query phức tạp
- Batch operations cho bulk updates/deletes
- Connection pooling (đã cấu hình trong database.config.ts)

**Caching Strategy:**
- **Redis Cache:**
  - Public API responses: TTL 15-60 phút
  - Admin API responses: TTL 1-5 phút
  - Dashboard stats: TTL 5 phút
  - Category trees: TTL 1 giờ
- **Cache Invalidation:**
  - Xóa cache khi create/update/delete entity
  - Xóa cache theo pattern (ví dụ: `products:*` khi update product)
- **Cache Keys:**
  - Format: `{entity}:{id}` hoặc `{entity}:list:{filters}`
  - Ví dụ: `product:123`, `products:list:category:1:page:1`

**API Response Optimization:**
- Chỉ trả về fields cần thiết (không dùng `SELECT *`)
- Sử dụng pagination cho danh sách lớn
- Compress response với gzip (đã cấu hình trong NestJS)
- Sử dụng HTTP/2 nếu có thể

**File Upload Optimization:**
- Validate files trước khi lưu
- Sử dụng transaction để đảm bảo atomicity
- Parallel file processing nếu có thể
- Cleanup files không được sử dụng (cron job)

**Frontend Performance:**

**Image Optimization:**
- Next.js Image component (automatic optimization)
- Lazy loading
- Responsive images
- WebP format support

**Code Splitting:**
- Dynamic imports
- Route-based code splitting
- Component lazy loading

**Caching:**
- Static page generation (SSG) cho các trang tĩnh
- Incremental Static Regeneration (ISR) cho các trang động
- API response caching với React Query
- Browser caching cho static assets

**Bundle Optimization:**
- Tree shaking
- Minification
- Code splitting theo route
- Lazy load heavy components

---

## 9. API Documentation {#api-docs}

### 9.1 Swagger/OpenAPI

**Access:**
- Development: `http://localhost:3000/api/docs`
- Production: `https://api.example.com/api/docs`

**Features:**
- Interactive API explorer
- Try out endpoints
- View request/response schemas
- Authentication testing

### 9.2 API Endpoints Chi Tiết

#### 9.2.1 Authentication Endpoints

##### POST /api/auth/login
**Mô tả:** Đăng nhập vào hệ thống

**Authentication:** Không cần

**Request Body:**
```json
{
  "employee_code": "string (required, min: 1, max: 50)",
  "identifier": "string (required, min: 1) - email, phone, or username",
  "password": "string (required, min: 8)",
  "remember_me": "boolean (optional, default: false)"
}
```

**Validation Rules:**
- `employee_code`: Required, string, không rỗng
- `identifier`: Required, string, không rỗng (có thể là email, phone, hoặc username)
- `password`: Required, string, min 8 characters
- `remember_me`: Optional, boolean

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "access_token": "string (JWT token)",
    "user": {
      "id": "number",
      "employee_code": "string",
      "full_name": "string",
      "email": "string",
      "role": "admin | employee",
      "avatar": "string | null"
    }
  }
}
```

**Error Responses:**
- `401 Unauthorized`: Sai thông tin đăng nhập
- `423 Locked`: Tài khoản bị khóa
- `429 Too Many Requests`: Vượt quá rate limit

---

##### POST /api/auth/logout
**Mô tả:** Đăng xuất khỏi hệ thống

**Authentication:** Required (JWT Bearer Token)

**Request Body:** Không có

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

##### POST /api/auth/refresh
**Mô tả:** Làm mới JWT token

**Authentication:** Required (JWT Bearer Token)

**Request Body:** Không có

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "access_token": "string (new JWT token)"
  }
}
```

---

##### POST /api/auth/forgot-password
**Mô tả:** Yêu cầu reset mật khẩu

**Authentication:** Không cần

**Request Body:**
```json
{
  "email": "string (required, valid email format)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

---

##### POST /api/auth/reset-password
**Mô tả:** Reset mật khẩu với token

**Authentication:** Không cần

**Request Body:**
```json
{
  "token": "string (required) - reset token from email",
  "new_password": "string (required, min: 8, must contain uppercase, lowercase, number)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

---

#### 9.2.2 Employees Endpoints

##### GET /api/employees
**Mô tả:** Lấy danh sách nhân viên

**Authentication:** Required (JWT Bearer Token, role: admin)

**Query Parameters:**
- `page`: number (optional, default: 1, min: 1)
- `limit`: number (optional, default: 10, min: 1, max: 100)
- `search`: string (optional) - Tìm kiếm theo mã NV, tên, email, SĐT, username
- `role`: string (optional) - Filter theo role: `admin` | `employee`
- `status`: string (optional) - Filter theo status: `active` | `locked`
- `sort`: string (optional, default: `created_at:desc`) - Sort field và direction
  - Format: `field:direction` (e.g., `full_name:asc`, `email:desc`)
  - Available fields: `full_name`, `email`, `created_at`, `last_login`
  - Directions: `asc`, `desc`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "employee_code": "string",
      "full_name": "string",
      "email": "string",
      "phone": "string",
      "username": "string",
      "role": "admin | employee",
      "avatar": {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)"
      } | null,
      "status": "active | locked",
      "last_login": "string (ISO 8601) | null",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/employees/:id
**Mô tả:** Lấy chi tiết nhân viên

**Authentication:** Required (JWT Bearer Token, role: admin)

**Path Parameters:**
- `id`: number (required) - ID nhân viên

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "employee_code": "string",
    "full_name": "string",
    "email": "string",
    "phone": "string",
    "username": "string",
    "role": "admin | employee",
    "avatar": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "address": "string | null",
    "date_of_birth": "string (YYYY-MM-DD) | null",
    "status": "active | locked",
    "failed_login_attempts": "number",
    "last_login": "string (ISO 8601) | null",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  }
}
```

---

##### POST /api/employees
**Mô tả:** Tạo nhân viên mới

**Authentication:** Required (JWT Bearer Token, role: admin)

**Request Body:**
```json
{
  "employee_code": "string (optional, auto-generate if not provided)",
  "full_name": "string (required, min: 1, max: 255)",
  "email": "string (required, valid email format, unique)",
  "phone": "string (required, Vietnamese phone format: 10-11 digits)",
  "username": "string (required, min: 3, max: 100, unique, alphanumeric + underscore)",
  "password": "string (required, min: 8, must contain uppercase, lowercase, number)",
  "role": "admin | employee (required)",
  "avatar_id": "number (optional, ID của file trong file_uploads table với entity_type='employee')",
  "address": "string (optional)",
  "date_of_birth": "string (optional, YYYY-MM-DD format)",
  "status": "active | locked (optional, default: active)"
}
```

**Validation Rules:**
- `email`: Required, valid email format, unique trong database
- `phone`: Required, Vietnamese phone format (10-11 digits, bắt đầu bằng 0 hoặc 84)
- `username`: Required, min 3 chars, max 100 chars, unique, chỉ chứa alphanumeric và underscore
- `password`: Required, min 8 chars, phải chứa chữ hoa, chữ thường, và số

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "employee_code": "string",
    "full_name": "string",
    "email": "string",
    "username": "string",
    "role": "admin | employee",
    "status": "active | locked",
    "created_at": "string (ISO 8601)"
  },
  "message": "Employee created successfully"
}
```

---

##### PUT /api/employees/:id
**Mô tả:** Cập nhật thông tin nhân viên

**Authentication:** Required (JWT Bearer Token, role: admin)

**Path Parameters:**
- `id`: number (required) - ID nhân viên

**Request Body:**
```json
{
  "full_name": "string (optional, min: 1, max: 255)",
  "email": "string (optional, valid email format, unique)",
  "phone": "string (optional, Vietnamese phone format)",
  "username": "string (optional, min: 3, max: 100, unique)",
  "password": "string (optional, min: 8) - chỉ cập nhật nếu có",
  "role": "admin | employee (optional)",
  "avatar_id": "number (optional, ID của file trong file_uploads table với entity_type='employee')",
  "address": "string (optional)",
  "date_of_birth": "string (optional, YYYY-MM-DD)",
  "status": "active | locked (optional)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "employee_code": "string",
    "full_name": "string",
    "email": "string",
    "updated_at": "string (ISO 8601)"
  },
  "message": "Employee updated successfully"
}
```

---

##### DELETE /api/employees/:id
**Mô tả:** Xóa nhân viên (soft delete)

**Authentication:** Required (JWT Bearer Token, role: admin)

**Path Parameters:**
- `id`: number (required) - ID nhân viên

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Employee deleted successfully"
}
```

**Lưu ý:** Không cho phép xóa tài khoản đang đăng nhập

---

#### 9.2.3 Products Endpoints

##### GET /api/products
**Mô tả:** Lấy danh sách sản phẩm

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1, min: 1)
- `limit`: number (optional, default: 12, min: 1, max: 100)
- `search`: string (optional) - Full-text search theo tên, mô tả
- `category_id`: number (optional) - Filter theo danh mục
- `status`: string (optional) - Filter theo status: `visible` | `hidden`
- `featured`: boolean (optional) - Filter sản phẩm nổi bật
- `price_min`: number (optional) - Giá tối thiểu
- `price_max`: number (optional) - Giá tối đa
- `tags`: string (optional, comma-separated) - Filter theo tags
- `sort`: string (optional, default: `created_at:desc`)
  - Available fields: `name`, `price`, `created_at`, `views`
  - Directions: `asc`, `desc`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "code": "string",
      "name": "string",
      "category_id": "number",
      "category_name": "string",
      "short_description": "string | null",
      "price": "number",
      "sale_price": "number | null",
      "featured_image": {
        "id": "number",
        "original_name": "string",
        "file_name": "string",
        "file_path": "string",
        "file_size": "number",
        "mime_type": "string",
        "url": "string (full URL)"
      } | null,
      "status": "visible | hidden",
      "featured": "boolean",
      "views": "number",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/products/:id
**Mô tả:** Lấy chi tiết sản phẩm

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID sản phẩm

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "code": "string",
    "name": "string",
    "category_id": "number",
    "category": {
      "id": "number",
      "name": "string",
      "url_slug": "string"
    },
    "short_description": "string | null",
    "description": "string | null",
    "price": "number",
    "sale_price": "number | null",
    "featured_image": {
      "id": "number",
      "original_name": "string",
      "file_name": "string",
      "file_path": "string",
      "file_size": "number",
      "mime_type": "string",
      "url": "string (full URL)"
    } | null,
    "image_gallery": [
      {
        "id": "number",
        "original_name": "string",
        "file_name": "string",
        "file_path": "string",
        "file_size": "number",
        "mime_type": "string",
        "url": "string (full URL)",
      }
    ],
    "specifications": "object (key-value pairs)",
    "tags": "string | null",
    "seo_title": "string | null",
    "seo_description": "string | null",
    "url_slug": "string",
    "status": "visible | hidden",
    "featured": "boolean",
    "views": "number",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  }
}
```

---

##### POST /api/products
**Mô tả:** Tạo sản phẩm mới

**Authentication:** Required (JWT Bearer Token)

**Request Body:**
```json
{
  "code": "string (optional, auto-generate from name if not provided)",
  "name": "string (required, min: 1, max: 255)",
  "category_id": "number (required, must exist)",
  "short_description": "string (optional, max: 500)",
  "description": "string (optional, rich text HTML)",
  "price": "number (required, min: 0)",
  "sale_price": "number (optional, min: 0, must be < price)",
  "featured_image_id": "number (required, ID của file trong file_uploads table)",
  "specifications": "object (optional, key-value pairs)",
  "tags": "string (optional, comma-separated)",
  "seo_title": "string (optional, max: 255)",
  "seo_description": "string (optional, max: 500)",
  "url_slug": "string (optional, auto-generate from name if not provided, unique)",
  "status": "visible | hidden (optional, default: visible)",
  "featured": "boolean (optional, default: false)"
}
```

**Validation Rules:**
- `name`: Required, string, không rỗng
- `category_id`: Required, number, phải tồn tại trong database
- `price`: Required, number, >= 0
- `sale_price`: Optional, number, >= 0, phải < price
- `featured_image_id`: Required, number, phải là ID hợp lệ trong `file_uploads` table với `entity_type='product'`
- Image gallery: Được lấy tự động từ `file_uploads` table với `entity_type='product'` và `entity_id` của sản phẩm

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "code": "string",
    "name": "string",
    "url_slug": "string",
    "created_at": "string (ISO 8601)"
  },
  "message": "Product created successfully"
}
```

---

##### PUT /api/products/:id
**Mô tả:** Cập nhật sản phẩm

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID sản phẩm

**Request Body:** (Tất cả fields optional, chỉ gửi fields cần cập nhật)
```json
{
  "name": "string (optional)",
  "category_id": "number (optional)",
  "short_description": "string (optional)",
  "description": "string (optional)",
  "price": "number (optional)",
  "sale_price": "number (optional)",
  "featured_image_id": "number (optional, ID của file trong file_uploads table)",
  "specifications": "object (optional)",
  "tags": "string (optional)",
  "seo_title": "string (optional)",
  "seo_description": "string (optional)",
  "url_slug": "string (optional)",
  "status": "visible | hidden (optional)",
  "featured": "boolean (optional)"
}
```

**Redirect Handling:**
- Nếu `url_slug` thay đổi:
  1. Lấy slug cũ từ database
  2. Tạo hoặc update record trong `url_redirects`:
     - `old_url`: `/products/{old_slug}`
     - `new_url`: `/products/{new_slug}`
     - `entity_type`: `product`
     - `entity_id`: `{id}`
  3. Nếu đã có redirect với `old_url` này, update `new_url` và `entity_id`
  4. Nếu chưa có, tạo redirect mới

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "updated_at": "string (ISO 8601)"
  },
  "message": "Product updated successfully"
}
```

---

##### DELETE /api/products/:id
**Mô tả:** Xóa sản phẩm (soft delete)

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID sản phẩm

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

---

##### GET /api/public/products
**Mô tả:** Lấy danh sách sản phẩm (public, không cần authentication)

**Authentication:** Không cần

**Query Parameters:**
- `page`: number (optional, default: 1)
- `limit`: number (optional, default: 12, max: 48)
- `category`: number (optional) - Category ID hoặc slug
- `priceMin`: number (optional)
- `priceMax`: number (optional)
- `sort`: string (optional, default: `created_at:desc`)
  - Options: `default`, `price_asc`, `price_desc`, `name_asc`, `name_desc`, `newest`
- `featured`: boolean (optional) - Chỉ lấy sản phẩm nổi bật
- `search`: string (optional) - Full-text search

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "code": "string",
      "name": "string",
      "category": {
        "id": "number",
        "name": "string",
        "slug": "string"
      },
      "short_description": "string | null",
      "price": "number",
      "sale_price": "number | null",
      "featured_image": {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)"
      } | null,
      "url_slug": "string",
      "views": "number"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  },
  "filters": {
    "categories": "Category[]",
    "priceRange": {
      "min": "number",
      "max": "number"
    },
    "tags": "string[]"
  }
}
```

---

#### 9.2.4 Categories Endpoints

##### GET /api/categories
**Mô tả:** Lấy danh sách danh mục

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `parent_id`: number (optional) - Filter theo danh mục cha (null để lấy root categories)
- `status`: string (optional) - Filter theo status: `visible` | `hidden`
- `include_children`: boolean (optional, default: false) - Bao gồm danh mục con

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "name": "string",
      "parent_id": "number | null",
      "description": "string | null",
      "display_order": "number",
      "url_slug": "string",
      "status": "visible | hidden",
      "product_count": "number",
      "created_at": "string (ISO 8601)"
    }
  ]
}
```

---

##### GET /api/categories/tree
**Mô tả:** Lấy cây danh mục (hierarchical structure)

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `status`: string (optional) - Filter theo status

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "name": "string",
      "url_slug": "string",
      "status": "visible | hidden",
      "product_count": "number",
      "children": [
        {
          "id": "number",
          "name": "string",
          "url_slug": "string",
          "status": "visible | hidden",
          "product_count": "number",
          "children": []
        }
      ]
    }
  ]
}
```

---

##### GET /api/categories/:id
**Mô tả:** Lấy chi tiết danh mục

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID danh mục

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "parent_id": "number | null",
    "parent": {
      "id": "number",
      "name": "string"
    } | null,
    "description": "string | null",
    "featured_image": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "display_order": "number",
    "seo_title": "string | null",
    "seo_description": "string | null",
    "url_slug": "string",
    "status": "visible | hidden",
    "product_count": "number",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  }
}
```

---

##### POST /api/categories
**Mô tả:** Tạo danh mục mới

**Authentication:** Required (JWT Bearer Token)

**Request Body:**
```json
{
  "name": "string (required, min: 1, max: 255)",
  "parent_id": "number (optional, null for root category, must not be self)",
  "description": "string (optional, rich text HTML)",
  "display_order": "number (optional, default: 0)",
  "seo_title": "string (optional, max: 255)",
  "seo_description": "string (optional, max: 500)",
  "url_slug": "string (optional, auto-generate from name if not provided, unique)",
  "status": "visible | hidden (optional, default: visible)"
}
```

**Validation Rules:**
- `name`: Required, string, không rỗng
- `parent_id`: Optional, nếu có phải tồn tại và không được là chính nó
- Max depth: 3 levels (Root → Level 1 → Level 2)

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "url_slug": "string",
    "created_at": "string (ISO 8601)"
  },
  "message": "Category created successfully"
}
```

---

##### PUT /api/categories/:id
**Mô tả:** Cập nhật danh mục

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID danh mục

**Request Body:** (Tất cả fields optional)
```json
{
  "name": "string (optional)",
  "parent_id": "number (optional, must not create circular reference)",
  "description": "string (optional)",
  "display_order": "number (optional)",
  "seo_title": "string (optional)",
  "seo_description": "string (optional)",
  "url_slug": "string (optional)",
  "status": "visible | hidden (optional)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "updated_at": "string (ISO 8601)"
  },
  "message": "Category updated successfully"
}
```

---

##### DELETE /api/categories/:id
**Mô tả:** Xóa danh mục

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID danh mục

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Category deleted successfully"
}
```

**Lưu ý:** Nếu danh mục có sản phẩm, sẽ trả về lỗi và yêu cầu di chuyển sản phẩm trước

---

#### 9.2.5 News Endpoints

##### GET /api/news
**Mô tả:** Lấy danh sách tin tức

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1)
- `limit`: number (optional, default: 12)
- `search`: string (optional) - Full-text search
- `status`: string (optional) - Filter theo status: `draft` | `published` | `hidden`
- `author_id`: number (optional) - Filter theo tác giả
- `featured`: boolean (optional) - Filter tin nổi bật
- `tags`: string (optional, comma-separated)
- `published_from`: string (optional, YYYY-MM-DD) - Từ ngày
- `published_to`: string (optional, YYYY-MM-DD) - Đến ngày
- `sort`: string (optional, default: `created_at:desc`)
  - Available fields: `title`, `published_at`, `views`, `created_at`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "title": "string",
      "summary": "string | null",
      "featured_image": {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)"
      } | null,
      "author": {
        "id": "number",
        "name": "string",
        "role": "string | null",
        "organization": "string | null"
      },
      "status": "draft | published | hidden",
      "featured": "boolean",
      "views": "number",
      "published_at": "string (ISO 8601) | null",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/news/:id
**Mô tả:** Lấy chi tiết tin tức (by ID)

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID tin tức

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "title": "string",
    "summary": "string | null",
    "content": "string (HTML)",
    "featured_image": {
      "id": "number",
      "original_name": "string",
      "file_name": "string",
      "file_path": "string",
      "file_size": "number",
      "mime_type": "string",
      "url": "string (full URL)"
    } | null,
    "image_gallery": [
      {
        "id": "number",
        "original_name": "string",
        "file_name": "string",
        "file_path": "string",
        "file_size": "number",
        "mime_type": "string",
        "url": "string (full URL)",
      }
    ],
    "author": {
      "id": "number",
      "name": "string",
      "email": "string | null",
      "role": "string | null",
      "organization": "string | null",
      "bio": "string | null",
      "avatar": {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)",
      } | null
    },
    "tags": "string | null",
    "seo_title": "string | null",
    "seo_description": "string | null",
    "url_slug": "string",
    "status": "draft | published | hidden",
    "featured": "boolean",
    "views": "number",
    "published_at": "string (ISO 8601) | null",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  }
}
```

---

##### POST /api/news
**Mô tả:** Tạo bài viết mới (kèm files trong cùng request)

**Authentication:** Required (JWT Bearer Token)

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data với các fields:

**Form Data Fields:**
- `title`: string (required, min: 1, max: 500)
- `summary`: string (optional, max: 300)
- `content`: string (required, rich text HTML)
- `featured_image`: File (required) - Ảnh chính của bài viết
- `image_gallery[]`: File[] (optional) - Array các ảnh gallery
- `gallery_orders[]`: number[] (optional) - Thứ tự hiển thị tương ứng với image_gallery
- `author_id`: number (required, ID từ authors table)
- `tags`: string (optional, comma-separated)
- `seo_title`: string (optional, max: 255)
- `seo_description`: string (optional, max: 500)
- `url_slug`: string (optional, auto-generate from title if not provided, unique)
- `status`: string (optional, default: "draft") - `draft` | `published` | `hidden`
- `featured`: boolean (optional, default: false)
- `published_at`: string (optional, ISO 8601, for scheduled publish)

**File Requirements:**
- `featured_image`: Required, image file (jpg, jpeg, png, gif, webp), max 5MB
- `image_gallery[]`: Optional, image files, max 5MB mỗi file

**Validation Rules:**
- `title`: Required, string, không rỗng
- `content`: Required, string, không rỗng
- `featured_image`: Required, file ảnh hợp lệ (jpg, jpeg, png, gif, webp), max 5MB
- `image_gallery[]`: Optional, mỗi file phải là ảnh hợp lệ, max 5MB mỗi file
- `gallery_orders[]`: Optional, số lượng phải khớp với số lượng files trong `image_gallery[]`
- `content`: Required, string, không rỗng
- `featured_image_id`: Required, number, phải là ID hợp lệ trong `file_uploads` table với `entity_type='news'`
- `author_id`: Required, number, phải là ID hợp lệ trong `authors` table
- Image gallery: Được lấy tự động từ `file_uploads` table với `entity_type='news'` và `entity_id` của bài viết

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "title": "string",
    "url_slug": "string",
    "status": "draft | published | hidden",
    "created_at": "string (ISO 8601)"
  },
  "message": "News article created successfully"
}
```

---

##### PUT /api/news/:id
**Mô tả:** Cập nhật bài viết

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID bài viết

**Request Body:** (Tất cả fields optional)
```json
{
  "title": "string (optional)",
  "summary": "string (optional)",
  "content": "string (optional)",
  "featured_image_id": "number (optional, ID của file trong file_uploads table)",
  "tags": "string (optional)",
  "seo_title": "string (optional)",
  "seo_description": "string (optional)",
  "url_slug": "string (optional)",
  "status": "draft | published | hidden (optional)",
  "featured": "boolean (optional)",
  "published_at": "string (optional, ISO 8601)"
}
```

**Redirect Handling:**
- Nếu `url_slug` thay đổi:
  1. Lấy slug cũ từ database
  2. Tạo hoặc update record trong `url_redirects`:
     - `old_url`: `/news/{old_slug}`
     - `new_url`: `/news/{new_slug}`
     - `entity_type`: `news`
     - `entity_id`: `{id}`
  3. Nếu đã có redirect với `old_url` này, update `new_url` và `entity_id`
  4. Nếu chưa có, tạo redirect mới

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "title": "string",
    "updated_at": "string (ISO 8601)"
  },
  "message": "News article updated successfully"
}
```

---

##### DELETE /api/news/:id
**Mô tả:** Xóa bài viết (soft delete)

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID bài viết

**Response (200 OK):**
```json
{
  "success": true,
  "message": "News article deleted successfully"
}
```

---

##### PATCH /api/news/:id/publish
**Mô tả:** Đăng bài viết ngay

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID bài viết

**Request Body:** Không có

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "status": "published",
    "published_at": "string (ISO 8601)"
  },
  "message": "News article published successfully"
}
```

---

##### POST /api/news/:id/schedule
**Mô tả:** Đặt lịch đăng bài viết

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID bài viết

**Request Body:**
```json
{
  "published_at": "string (required, ISO 8601, must be future date)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "published_at": "string (ISO 8601)"
  },
  "message": "News article scheduled successfully"
}
```

---

##### GET /api/public/news
**Mô tả:** Lấy danh sách tin tức (public)

**Authentication:** Không cần

**Query Parameters:**
- `page`: number (optional, default: 1)
- `limit`: number (optional, default: 12, max: 48)
- `tag`: string (optional) - Filter theo tag
- `search`: string (optional) - Full-text search
- `sort`: string (optional, default: `published_at:desc`)
  - Options: `newest`, `oldest`, `views_desc`, `views_asc`, `featured`
- `featured`: boolean (optional) - Chỉ lấy tin nổi bật

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "title": "string",
      "summary": "string | null",
      "featured_image": {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)"
      } | null,
      "author": {
        "id": "number",
        "name": "string",
        "role": "string | null",
        "organization": "string | null"
      },
      "published_at": "string (ISO 8601)",
      "views": "number",
      "tags": "string[]",
      "url_slug": "string"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  },
  "tags": "string[]"
}
```

---

#### 9.2.6 Contacts Endpoints

##### GET /api/contacts
**Mô tả:** Lấy danh sách yêu cầu liên hệ

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1)
- `limit`: number (optional, default: 10)
- `status`: string (optional) - Filter theo status: `new` | `processing` | `resolved`
- `assigned_to_id`: number (optional) - Filter theo người xử lý
- `search`: string (optional) - Tìm kiếm theo tên, email, SĐT, tiêu đề
- `sort`: string (optional, default: `created_at:desc`)

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "full_name": "string",
      "email": "string",
      "phone": "string",
      "subject": "string",
      "status": "new | processing | resolved",
      "assigned_to": {
        "id": "number",
        "full_name": "string"
      } | null,
      "created_at": "string (ISO 8601)",
      "processed_at": "string (ISO 8601) | null"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/contacts/:id
**Mô tả:** Lấy chi tiết yêu cầu liên hệ

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID yêu cầu

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "full_name": "string",
    "email": "string",
    "phone": "string",
    "company": "string | null",
    "subject": "string",
    "message": "string",
    "status": "new | processing | resolved",
    "assigned_to": {
      "id": "number",
      "full_name": "string"
    } | null,
    "created_at": "string (ISO 8601)",
    "processed_at": "string (ISO 8601) | null",
    "responses": [
      {
        "id": "number",
        "employee": {
          "id": "number",
          "full_name": "string"
        },
        "content": "string",
        "created_at": "string (ISO 8601)"
      }
    ]
  }
}
```

---

##### POST /api/public/contacts
**Mô tả:** Tạo yêu cầu liên hệ (public, từ website)

**Authentication:** Không cần

**Request Body:**
```json
{
  "full_name": "string (required, min: 1, max: 255)",
  "email": "string (required, valid email format)",
  "phone": "string (required, Vietnamese phone format: 10-11 digits)",
  "company": "string (optional, max: 255)",
  "subject": "string (required, min: 1, max: 500)",
  "message": "string (required, min: 10, max: 5000)",
  "recaptcha_token": "string (required) - Google reCAPTCHA token"
}
```

**Validation Rules:**
- `email`: Required, valid email format
- `phone`: Required, Vietnamese phone format (10-11 digits)
- `message`: Required, min 10 characters
- `recaptcha_token`: Required, phải verify với Google reCAPTCHA

**Rate Limiting:** Max 3 requests per hour per IP

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will respond within 24 hours."
}
```

**Lưu ý:** 
- Tự động tạo/update customer record
- Gửi email thông báo cho admin
- Gửi email xác nhận cho khách hàng

---

##### PUT /api/contacts/:id/status
**Mô tả:** Cập nhật trạng thái yêu cầu liên hệ

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID yêu cầu

**Request Body:**
```json
{
  "status": "new | processing | resolved (required)",
  "assigned_to_id": "number (optional) - ID nhân viên được giao xử lý"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "status": "new | processing | resolved",
    "processed_at": "string (ISO 8601) | null"
  },
  "message": "Contact request status updated successfully"
}
```

---

##### POST /api/contacts/:id/reply
**Mô tả:** Phản hồi yêu cầu liên hệ

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID yêu cầu

**Request Body:**
```json
{
  "content": "string (required, min: 1, rich text HTML)",
  "send_email": "boolean (optional, default: true) - Tự động gửi email cho khách hàng"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "content": "string",
    "created_at": "string (ISO 8601)"
  },
  "message": "Reply sent successfully"
}
```

---

##### DELETE /api/contacts/:id
**Mô tả:** Xóa yêu cầu liên hệ (soft delete)

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID yêu cầu

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Contact request deleted successfully"
}
```

---

#### 9.2.7 Customers Endpoints

##### GET /api/customers
**Mô tả:** Lấy danh sách khách hàng

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1)
- `limit`: number (optional, default: 10)
- `search`: string (optional) - Tìm kiếm theo tên, email, SĐT, công ty
- `email`: string (optional) - Filter theo email
- `company`: string (optional) - Filter theo công ty
- `sort`: string (optional, default: `last_contact_at:desc`)

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "full_name": "string",
      "email": "string",
      "phone": "string | null",
      "company": "string | null",
      "contact_count": "number",
      "last_contact_at": "string (ISO 8601)",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/customers/:id
**Mô tả:** Lấy chi tiết khách hàng

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID khách hàng

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "full_name": "string",
    "email": "string",
    "phone": "string | null",
    "company": "string | null",
    "address": "string | null",
    "contact_count": "number",
    "last_contact_at": "string (ISO 8601)",
    "notes": "string | null",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)",
    "contact_history": [
      {
        "id": "number",
        "subject": "string",
        "status": "new | processing | resolved",
        "created_at": "string (ISO 8601)"
      }
    ]
  }
}
```

---

##### PUT /api/customers/:id
**Mô tả:** Cập nhật ghi chú khách hàng

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID khách hàng

**Request Body:**
```json
{
  "notes": "string (optional, max: 5000) - Ghi chú nội bộ"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "notes": "string",
    "updated_at": "string (ISO 8601)"
  },
  "message": "Customer updated successfully"
}
```

---

##### GET /api/customers/export
**Mô tả:** Xuất danh sách khách hàng ra Excel/CSV

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `format`: string (optional, default: `excel`) - `excel` | `csv`
- `search`: string (optional) - Filter trước khi export

**Response (200 OK):**
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` (Excel)
- Content-Type: `text/csv` (CSV)
- File download

---

#### 9.2.8 Upload Endpoints

##### POST /api/upload/image
**Mô tả:** Upload ảnh (generic endpoint cho tất cả entity types)

**Authentication:** Required (JWT Bearer Token)

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data với các fields:
  - `file`: File (required) - File ảnh cần upload
  - `entity_type`: string (required) - Loại entity: `product` | `news` | `employee` | `author`
  - `entity_id`: number (optional) - ID của entity (required khi update, optional khi create mới)

**File Requirements:**
- Allowed types: `jpg`, `jpeg`, `png`, `gif`, `webp`
- Max size: 5MB (có thể cấu hình)
- MIME types: `image/jpeg`, `image/png`, `image/gif`, `image/webp`

**Validation Rules:**
- `entity_type`: Required, phải là một trong: `product`, `news`, `employee`, `author`
- `entity_id`: Required, entity phải tồn tại trong database
- `display_order`: Optional, number >= 0 (cho gallery)
- `is_main`: Optional, boolean (chỉ 1 file được đánh dấu main cho mỗi entity)
- File phải hợp lệ theo file requirements

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "original_name": "string",
    "file_name": "string",
    "file_path": "string",
    "file_size": "number",
    "mime_type": "string",
    "file_type": "image",
    "entity_type": "product | news | employee | author",
    "entity_id": "number | null",
    "uploaded_by": "number (employee ID)",
    "url": "string (full URL to access file)",
    "created_at": "string (ISO 8601)"
  }
}
```

**Lưu ý:**
- File được lưu vào `file_uploads` table với `entity_type` và `entity_id`
- Khi upload cho entity mới (chưa có ID), `entity_id` sẽ là `null` và cần update sau khi entity được tạo
- Khi upload cho entity đã có, `entity_id` phải được cung cấp

---

##### POST /api/upload/video
**Mô tả:** Upload video

**Authentication:** Required (JWT Bearer Token)

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data với các fields:
  - `file`: File (required) - File video cần upload
  - `entity_type`: string (required) - Loại entity: `product` | `news`
  - `entity_id`: number (optional) - ID của entity (required khi update, optional khi create mới)

**File Requirements:**
- Allowed types: `mp4`, `avi`, `mov`, `wmv`
- Max size: 100MB (có thể cấu hình)
- MIME types: `video/mp4`, `video/avi`, `video/quicktime`, `video/x-ms-wmv`

**Validation Rules:**
- `entity_type`: Required, phải là một trong: `product`, `news`
- `entity_id`: Optional khi tạo entity mới, required khi update entity đã có

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "original_name": "string",
    "file_name": "string",
    "file_path": "string",
    "file_size": "number",
    "mime_type": "string",
    "file_type": "video",
    "entity_type": "product | news",
    "entity_id": "number | null",
    "uploaded_by": "number (employee ID)",
    "url": "string (full URL to access file)",
    "created_at": "string (ISO 8601)"
  }
}
```

---

##### DELETE /api/upload/:id
**Mô tả:** Xóa file đã upload

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID của file trong `file_uploads` table

**Response (200 OK):**
```json
{
  "success": true,
  "message": "File deleted successfully"
}
```

**Lưu ý:**
- Xóa file khỏi filesystem và database (soft delete)
- Chỉ cho phép xóa file do chính user upload hoặc admin

---

#### 9.2.9 Authors Endpoints

##### GET /api/authors
**Mô tả:** Lấy danh sách tác giả

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1, min: 1)
- `limit`: number (optional, default: 10, min: 1, max: 100)
- `search`: string (optional) - Tìm kiếm theo tên, email
- `sort`: string (optional, default: `created_at:desc`)
  - Available fields: `name`, `created_at`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "name": "string",
      "email": "string | null",
      "role": "string | null",
      "organization": "string | null",
      "bio": "string | null",
      "avatar": {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)"
      } | null,
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/authors/:id
**Mô tả:** Lấy chi tiết tác giả

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID tác giả

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "email": "string | null",
    "role": "string | null",
    "organization": "string | null",
    "bio": "string | null",
    "avatar": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "news_count": "number",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  }
}
```

---

##### POST /api/authors
**Mô tả:** Tạo tác giả mới

**Authentication:** Required (JWT Bearer Token, role: admin)

**Request Body:**
```json
{
  "name": "string (required, min: 1, max: 255) - Họ và tên đầy đủ của tác giả",
  "email": "string (optional, valid email format)",
  "role": "string (optional, max: 255) - Chức danh / vai trò",
  "organization": "string (optional, max: 255) - Tổ chức / đơn vị đang làm việc",
  "bio": "string (optional, max: 1000) - Tiểu sử / giới thiệu",
  "avatar_id": "number (optional, ID của file trong file_uploads table với entity_type='author')"
}
```

**Validation Rules:**
- `name`: Required, string, không rỗng, min 1 char, max 255 chars
- `email`: Optional, valid email format nếu có
- `role`: Optional, string, max 255 chars
- `organization`: Optional, string, max 255 chars
- `bio`: Optional, string, max 1000 chars
- `avatar_id`: Optional, phải là ID hợp lệ trong `file_uploads` table với `entity_type='author'`

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "email": "string | null",
    "role": "string | null",
    "organization": "string | null",
    "bio": "string | null",
    "avatar": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "created_at": "string (ISO 8601)"
  },
  "message": "Author created successfully"
}
```

---

##### PUT /api/authors/:id
**Mô tả:** Cập nhật tác giả

**Authentication:** Required (JWT Bearer Token, role: admin)

**Path Parameters:**
- `id`: number (required) - ID tác giả

**Request Body:** (Tất cả fields optional, chỉ gửi fields cần cập nhật)
```json
{
  "name": "string (optional, min: 1, max: 255) - Họ và tên đầy đủ của tác giả",
  "email": "string (optional, valid email format)",
  "role": "string (optional, max: 255) - Chức danh / vai trò",
  "organization": "string (optional, max: 255) - Tổ chức / đơn vị đang làm việc",
  "bio": "string (optional, max: 1000) - Tiểu sử / giới thiệu",
  "avatar_id": "number (optional, ID của file trong file_uploads table)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "email": "string | null",
    "role": "string | null",
    "organization": "string | null",
    "bio": "string | null",
    "avatar": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "updated_at": "string (ISO 8601)"
  },
  "message": "Author updated successfully"
}
```

---

##### DELETE /api/authors/:id
**Mô tả:** Xóa tác giả (soft delete)

**Authentication:** Required (JWT Bearer Token, role: admin)

**Path Parameters:**
- `id`: number (required) - ID tác giả

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Author deleted successfully"
}
```

**Lưu ý:** Không cho phép xóa tác giả đã có bài viết (news) đã đăng

---

#### 9.2.10 File Management Endpoints

##### GET /api/files
**Mô tả:** Lấy danh sách file đã upload

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1, min: 1)
- `limit`: number (optional, default: 20, min: 1, max: 100)
- `search`: string (optional) - Tìm kiếm theo tên file, original name
- `entity_type`: string (optional) - Filter theo entity type: `product` | `news` | `employee` | `author`
- `entity_id`: number (optional) - Filter theo entity ID
- `file_type`: string (optional) - Filter theo file type: `image` | `video`
- `uploaded_by`: number (optional) - Filter theo employee ID (người upload)
- `uploaded_from`: string (optional, YYYY-MM-DD) - Từ ngày upload
- `uploaded_to`: string (optional, YYYY-MM-DD) - Đến ngày upload
- `orphan`: boolean (optional) - Chỉ hiển thị orphan files (files không thuộc entity nào)
- `sort`: string (optional, default: `created_at:desc`)
  - Available fields: `file_name`, `file_size`, `created_at`, `original_name`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "original_name": "string",
      "file_name": "string",
      "file_path": "string",
      "file_size": "number (bytes)",
      "mime_type": "string",
      "file_type": "image | video",
      "entity_type": "product | news | employee | author | null",
      "entity_id": "number | null",
      "uploaded_by": {
        "id": "number",
        "full_name": "string",
        "email": "string"
      },
      "url": "string (full URL to access file)",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/files/:id
**Mô tả:** Lấy chi tiết file

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID file trong `file_uploads` table

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "original_name": "string",
    "file_name": "string",
    "file_path": "string",
    "file_size": "number (bytes)",
    "mime_type": "string",
    "file_type": "image | video",
    "entity_type": "product | news | employee | author | null",
    "entity_id": "number | null",
    "entity": {
      "id": "number",
      "name": "string (tên entity tương ứng)"
    } | null,
    "uploaded_by": {
      "id": "number",
      "full_name": "string",
      "email": "string"
    },
    "url": "string (full URL to access file)",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)",
    "deleted_at": "string (ISO 8601) | null"
  }
}
```

**Lưu ý:**
- Nếu file đã bị xóa (soft delete), `deleted_at` sẽ có giá trị
- `entity` object chỉ có khi `entity_type` và `entity_id` không null

---

##### DELETE /api/files/:id
**Mô tả:** Xóa file (soft delete)

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `id`: number (required) - ID file trong `file_uploads` table

**Response (200 OK):**
```json
{
  "success": true,
  "message": "File deleted successfully"
}
```

**Lưu ý:**
- Chỉ cho phép xóa file do chính user upload hoặc admin
- Xóa file khỏi filesystem và database (soft delete)
- Nếu file đang được sử dụng bởi entity, sẽ có cảnh báo nhưng vẫn cho phép xóa
- Sau khi xóa, `deleted_at` sẽ được set

---

##### GET /api/files/entity/:entity_type/:entity_id
**Mô tả:** Lấy danh sách file của một entity cụ thể

**Authentication:** Required (JWT Bearer Token)

**Path Parameters:**
- `entity_type`: string (required) - Loại entity: `product` | `news` | `employee` | `author`
- `entity_id`: number (required) - ID của entity

**Query Parameters:**
- `file_type`: string (optional) - Filter theo file type: `image` | `video`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "original_name": "string",
      "file_name": "string",
      "file_path": "string",
      "file_size": "number (bytes)",
      "mime_type": "string",
      "file_type": "image | video",
      "url": "string (full URL to access file)",
      "created_at": "string (ISO 8601)"
    }
  ]
}
```

**Lưu ý:**
- Endpoint này hữu ích khi xem tất cả file của một sản phẩm, bài viết, nhân viên, hoặc tác giả cụ thể

---

##### GET /api/files/orphan
**Mô tả:** Lấy danh sách orphan files (files không thuộc entity nào)

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `page`: number (optional, default: 1, min: 1)
- `limit`: number (optional, default: 20, min: 1, max: 100)
- `search`: string (optional) - Tìm kiếm theo tên file, original name
- `file_type`: string (optional) - Filter theo file type: `image` | `video`
- `uploaded_by`: number (optional) - Filter theo employee ID (người upload)
- `uploaded_from`: string (optional, YYYY-MM-DD) - Từ ngày upload
- `uploaded_to`: string (optional, YYYY-MM-DD) - Đến ngày upload
- `sort`: string (optional, default: `created_at:desc`)
  - Available fields: `file_name`, `file_size`, `created_at`, `original_name`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "original_name": "string",
      "file_name": "string",
      "file_path": "string",
      "file_size": "number (bytes)",
      "mime_type": "string",
      "file_type": "image | video",
      "entity_type": null,
      "entity_id": null,
      "uploaded_by": {
        "id": "number",
        "full_name": "string",
        "email": "string"
      },
      "url": "string (full URL to access file)",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

**Lưu ý:**
- Endpoint này tương đương với `GET /api/files?orphan=true`
- Chỉ trả về files có `entity_type = null` hoặc `entity_id = null`
- Hữu ích để quản lý và cleanup các file thừa

---

##### DELETE /api/files/bulk
**Mô tả:** Xóa nhiều file cùng lúc (bulk delete)

**Authentication:** Required (JWT Bearer Token, Admin only)

**Request Body:**
```json
{
  "file_ids": "number[] (required, min: 1, max: 100)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "deleted_count": "number",
    "failed_count": "number",
    "failed_files": [
      {
        "id": "number",
        "reason": "string"
      }
    ]
  },
  "message": "Bulk delete completed"
}
```

**Lưu ý:**
- Chỉ admin mới được bulk delete
- Giới hạn tối đa 100 files mỗi lần
- Xóa file khỏi filesystem và database (soft delete)
- Nếu có file đang được sử dụng, sẽ có cảnh báo nhưng vẫn cho phép xóa
- Trả về danh sách files không thể xóa (nếu có) kèm lý do

---

##### POST /api/files/cleanup
**Mô tả:** Cleanup orphan files tự động (chỉ admin)

**Authentication:** Required (JWT Bearer Token, Admin only)

**Request Body:**
```json
{
  "older_than_days": "number (optional, default: 30) - Chỉ xóa files cũ hơn X ngày",
  "dry_run": "boolean (optional, default: false) - Chỉ liệt kê, không xóa thật"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "found_count": "number",
    "deleted_count": "number",
    "failed_count": "number",
    "files_to_delete": [
      {
        "id": "number",
        "file_name": "string",
        "created_at": "string (ISO 8601)"
      }
    ]
  },
  "message": "Cleanup completed"
}
```

**Lưu ý:**
- Chỉ admin mới được trigger cleanup
- Tìm files có `entity_id = null` hoặc entity đã bị soft delete > `older_than_days` ngày
- Nếu `dry_run = true`, chỉ trả về danh sách files sẽ bị xóa, không xóa thật
- Xóa files trên disk và soft delete records trong database
- Log tất cả cleanup actions vào `activity_logs`

---

#### 9.2.11 Dashboard Endpoints

##### GET /api/dashboard/stats
**Mô tả:** Lấy thống kê tổng quan

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:** Không có

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "employees": {
      "total": "number",
      "active": "number",
      "inactive": "number"
    },
    "products": {
      "total": "number",
      "visible": "number",
      "hidden": "number",
      "featured": "number"
    },
    "news": {
      "total": "number",
      "published": "number",
      "draft": "number",
      "hidden": "number"
    },
    "contacts": {
      "total": "number",
      "pending": "number",
      "processing": "number",
      "resolved": "number"
    },
    "customers": {
      "total": "number",
      "new_this_month": "number"
    }
  }
}
```

---

##### GET /api/dashboard/analytics
**Mô tả:** Phân tích lượt truy cập

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `period`: string (optional, default: `7d`) - `7d` | `30d` | `12m`
- `start_date`: string (optional, YYYY-MM-DD)
- `end_date`: string (optional, YYYY-MM-DD)

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "page_views": "number",
    "unique_visitors": "number",
    "popular_products": [
      {
        "id": "number",
        "name": "string",
        "views": "number"
      }
    ],
    "popular_news": [
      {
        "id": "number",
        "title": "string",
        "views": "number"
      }
    ],
    "chart_data": {
      "labels": "string[]",
      "values": "number[]"
    }
  }
}
```

---

##### GET /api/dashboard/recent-activities
**Mô tả:** Lấy hoạt động gần đây

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `limit`: number (optional, default: 20, max: 100)

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "employee": {
        "id": "number",
        "full_name": "string"
      },
      "action": "create | update | delete | login | logout",
      "entity_type": "product | news | employee | author | contact",
      "entity_id": "number",
      "description": "string",
      "created_at": "string (ISO 8601)"
    }
  ]
}
```

---

##### GET /api/dashboard/notifications
**Mô tả:** Lấy thông báo

**Authentication:** Required (JWT Bearer Token)

**Query Parameters:**
- `unread_only`: boolean (optional, default: false)

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "type": "contact_new | system_alert | update",
      "title": "string",
      "message": "string",
      "read": "boolean",
      "created_at": "string (ISO 8601)"
    }
  ]
}
```

---

#### 9.2.12 Settings Endpoints

##### GET /api/settings
**Mô tả:** Lấy tất cả settings

**Authentication:** Required (JWT Bearer Token, Admin only)

**Query Parameters:**
- `group`: string (optional) - Filter theo group: `general` | `email` | `seo` | `social` | `contact`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "key": "string",
      "value": "string | number | boolean | object",
      "type": "string | number | boolean | json",
      "group_name": "string",
      "description": "string | null",
      "created_at": "string (ISO 8601)",
      "updated_at": "string (ISO 8601)"
    }
  ]
}
```

---

##### GET /api/settings/:key
**Mô tả:** Lấy setting theo key

**Authentication:** Required (JWT Bearer Token, Admin only)

**Path Parameters:**
- `key`: string (required) - Key của setting

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "key": "string",
    "value": "string | number | boolean | object",
    "type": "string | number | boolean | json",
    "group_name": "string",
    "description": "string | null",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  }
}
```

---

##### PUT /api/settings/:key
**Mô tả:** Update setting

**Authentication:** Required (JWT Bearer Token, Admin only)

**Path Parameters:**
- `key`: string (required) - Key của setting

**Request Body:**
```json
{
  "value": "string | number | boolean | object (required)",
  "description": "string (optional)"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "key": "string",
    "value": "string | number | boolean | object",
    "type": "string | number | boolean | json",
    "group_name": "string",
    "description": "string | null",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
  },
  "message": "Setting updated successfully"
}
```

**Lưu ý:**
- Chỉ admin mới được update settings
- Log tất cả settings changes vào `activity_logs`
- Validate `value` theo `type` của setting

---

##### GET /api/settings/group/:group_name
**Mô tả:** Lấy settings theo group

**Authentication:** Required (JWT Bearer Token, Admin only)

**Path Parameters:**
- `group_name`: string (required) - Group name: `general` | `email` | `seo` | `social` | `contact`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "key": "string",
      "value": "string | number | boolean | object",
      "type": "string | number | boolean | json",
      "group_name": "string",
      "description": "string | null",
      "created_at": "string (ISO 8601)",
      "updated_at": "string (ISO 8601)"
    }
  ]
}
```

---

#### 9.2.13 Activity Logs Endpoints

##### GET /api/activity-logs
**Mô tả:** Lấy danh sách activity logs

**Authentication:** Required (JWT Bearer Token, Admin only)

**Query Parameters:**
- `page`: number (optional, default: 1, min: 1)
- `limit`: number (optional, default: 20, min: 1, max: 100)
- `employee_id`: number (optional) - Filter theo employee ID
- `action`: string (optional) - Filter theo action: `create` | `update` | `delete` | `login` | `logout` | `password_reset` | etc.
- `entity_type`: string (optional) - Filter theo entity type: `product` | `news` | `employee` | `author` | `contact` | etc.
- `entity_id`: number (optional) - Filter theo entity ID
- `from_date`: string (optional, YYYY-MM-DD) - Từ ngày
- `to_date`: string (optional, YYYY-MM-DD) - Đến ngày
- `sort`: string (optional, default: `created_at:desc`)
  - Available fields: `created_at`, `action`, `entity_type`

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "employee": {
        "id": "number",
        "full_name": "string",
        "email": "string"
      },
      "action": "string",
      "entity_type": "string | null",
      "entity_id": "number | null",
      "description": "string",
      "old_values": "object | null",
      "new_values": "object | null",
      "ip_address": "string",
      "created_at": "string (ISO 8601)"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

---

##### GET /api/activity-logs/:id
**Mô tả:** Lấy chi tiết activity log

**Authentication:** Required (JWT Bearer Token, Admin only)

**Path Parameters:**
- `id`: number (required) - ID của activity log

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "employee": {
      "id": "number",
      "full_name": "string",
      "email": "string"
    },
    "action": "string",
    "entity_type": "string | null",
    "entity_id": "number | null",
    "description": "string",
    "old_values": "object | null",
    "new_values": "object | null",
    "ip_address": "string",
    "created_at": "string (ISO 8601)"
  }
}
```

---

##### GET /api/activity-logs/export
**Mô tả:** Export activity logs ra file Excel/CSV

**Authentication:** Required (JWT Bearer Token, Admin only)

**Query Parameters:**
- `employee_id`: number (optional) - Filter theo employee ID
- `action`: string (optional) - Filter theo action
- `entity_type`: string (optional) - Filter theo entity type
- `from_date`: string (optional, YYYY-MM-DD) - Từ ngày
- `to_date`: string (optional, YYYY-MM-DD) - Đến ngày
- `format`: string (optional, default: `csv`) - `csv` | `xlsx`

**Response (200 OK):**
- Content-Type: `text/csv` hoặc `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- File download với tên: `activity-logs-{timestamp}.{format}`

**Lưu ý:**
- Chỉ admin mới được export logs
- Giới hạn export trong 90 ngày gần nhất
- Logs cũ hơn 90 ngày có thể được archive

---

#### 9.2.14 Public Endpoints

##### GET /api/public/homepage
**Mô tả:** Lấy dữ liệu cho trang chủ

**Authentication:** Không cần

**Query Parameters:** Không có

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "featured_products": "Product[] (max 8)",
    "latest_news": "News[] (max 4)"
  }
}
```

---

##### GET /api/public/products/:slug
**Mô tả:** Lấy chi tiết sản phẩm (public, by slug)

**Authentication:** Không cần

**Path Parameters:**
- `slug`: string (required) - URL slug của sản phẩm

**Redirect Handling:**
- Nếu không tìm thấy product với slug này, check trong `url_redirects` table
- Nếu tìm thấy redirect với `old_url = /products/{slug}`, return 301 redirect đến `new_url`
- Nếu không tìm thấy redirect, return 404

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "code": "string",
    "name": "string",
    "category": {
      "id": "number",
      "name": "string",
      "slug": "string"
    },
    "short_description": "string | null",
    "description": "string | null",
    "price": "number",
    "sale_price": "number | null",
    "featured_image": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "image_gallery": [
      {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)",
      }
    ],
    "specifications": "object",
    "tags": "string[]",
    "url_slug": "string",
    "views": "number",
    "related_products": "Product[] (3-6 items)"
  }
}
```

**Lưu ý:** 
- View count được tăng tự động khi xem (async, không block response)
- Sử dụng database atomic increment: `UPDATE products SET views = views + 1 WHERE id = ?`
- Hoặc sử dụng background job/queue để update view count (không block API response)
- Tránh race condition bằng cách sử dụng database-level atomic operations
- Cache view count để giảm database load (invalidate khi có update)

---

##### GET /api/public/news/:slug
**Mô tả:** Lấy chi tiết tin tức (public, by slug)

**Authentication:** Không cần

**Path Parameters:**
- `slug`: string (required) - URL slug của bài viết

**Redirect Handling:**
- Nếu không tìm thấy news với slug này, check trong `url_redirects` table
- Nếu tìm thấy redirect với `old_url = /news/{slug}`, return 301 redirect đến `new_url`
- Nếu không tìm thấy redirect, return 404

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "title": "string",
    "summary": "string | null",
    "content": "string (HTML)",
    "featured_image": {
      "id": "number",
      "file_name": "string",
      "file_path": "string",
      "url": "string (full URL)"
    } | null,
    "image_gallery": [
      {
        "id": "number",
        "file_name": "string",
        "file_path": "string",
        "url": "string (full URL)",
      }
    ],
    "author": {
      "id": "number",
      "name": "string",
      "role": "string | null",
      "organization": "string | null"
    },
    "published_at": "string (ISO 8601)",
    "views": "number",
    "tags": "string[]",
    "url_slug": "string",
    "related_posts": "News[] (3-4 items)"
  }
}
```

**Lưu ý:** 
- View count được tăng tự động khi xem (async, không block response)
- Sử dụng database atomic increment: `UPDATE products SET views = views + 1 WHERE id = ?`
- Hoặc sử dụng background job/queue để update view count (không block API response)
- Tránh race condition bằng cách sử dụng database-level atomic operations
- Cache view count để giảm database load (invalidate khi có update)

---

##### GET /api/public/sitemap.xml
**Mô tả:** Lấy sitemap.xml cho SEO

**Authentication:** Không cần

**Query Parameters:** Không có

**Response (200 OK):**
- Content-Type: `application/xml`
- XML sitemap format (xem Section 13.14)

**Cache:**
- Cache trong Redis (TTL: 24 giờ)
- Invalidate khi có thay đổi products/news/categories

---

##### GET /api/public/robots.txt
**Mô tả:** Lấy robots.txt cho SEO

**Authentication:** Không cần

**Query Parameters:** Không có

**Response (200 OK):**
- Content-Type: `text/plain`
- Robots.txt content (xem Section 13.14)

**Lưu ý:**
- Có thể serve static file thay vì dynamic endpoint
- Update khi có thay đổi domain hoặc sitemap location

---

### 9.3 API Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": { ... }
  }
}
```

**Pagination Response:**
```json
{
  "success": true,
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### 9.4 API Versioning

**Current Version:** v1

**Version Strategy:**
- URL versioning: `/api/v1/...`
- Header versioning: `Accept: application/vnd.api+json;version=1`
- Backward compatibility maintained

---

## 10. Cài Đặt & Triển Khai {#cai-dat}

### 10.1 Yêu Cầu Hệ Thống

**Backend:**
- Node.js >= 18.x
- PostgreSQL >= 14.x
- Redis >= 6.x (optional, cho cache)
- Nginx (production)

**Frontend:**
- Node.js >= 18.x
- npm hoặc yarn

**Development:**
- Git
- Docker & Docker Compose (optional)

### 10.2 Cài Đặt Development

**1. Clone repository:**
```bash
git clone <repository-url>
cd anphat_chemical
```

**2. Backend Setup:**
```bash
cd apc-backend
npm install
cp .env.example .env
# Edit .env với thông tin database, JWT secret, etc.
npm run start:dev
```

**3. Database Setup:**
```bash
# Tạo database
createdb anphat_chemical

# Chạy migrations
npm run migration:run
```

**4. Admin Frontend Setup:**
```bash
cd apc-admin
npm install
cp .env.example .env.local
# Edit .env.local với API URL
npm run dev
```

**5. Public Frontend Setup:**
```bash
cd apc-public
npm install
cp .env.example .env.local
# Edit .env.local với API URL
npm run dev
```

### 10.3 Environment Variables

**Backend (.env):**
```env
# ============================================
# CẤU HÌNH ỨNG DỤNG
# Application Configuration
# ============================================
NODE_ENV=development
PORT=3000
APP_NAME=APC Backend
APP_VERSION=1.0.0
API_PREFIX=api
DEBUG=false
TZ=Asia/Ho_Chi_Minh
DEFAULT_LOCALE=vi

# URLs
FRONTEND_URL=http://localhost:3001
BACKEND_URL=http://localhost:3000
PRODUCTION_URL=https://api.example.com

# ============================================
# CẤU HÌNH DATABASE
# Database Configuration (PostgreSQL)
# ============================================
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password_here
DB_DATABASE=anphat_chemical
DB_SSL=false
DB_SSL_REJECT_UNAUTHORIZED=true
DB_SYNC=false
DB_LOGGING=true
DB_LOGGER=advanced-console
DB_MIGRATIONS_RUN=false
DB_POOL_MAX=10
DB_POOL_MIN=2
DB_IDLE_TIMEOUT=30000
DB_RETRY_ATTEMPTS=3
DB_RETRY_DELAY=3000

# ============================================
# CẤU HÌNH JWT
# JWT Authentication Configuration
# ============================================
JWT_SECRET=change-this-secret-key-in-production-min-32-chars
JWT_EXPIRES_IN=1800
JWT_REMEMBER_ME_EXPIRES_IN=2592000
JWT_REFRESH_EXPIRES_IN=604800
JWT_ISSUER=apc-backend
JWT_AUDIENCE=apc-frontend

# ============================================
# CẤU HÌNH REDIS CACHE
# Redis Cache Configuration
# ============================================
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
REDIS_CONNECT_TIMEOUT=10000
CACHE_TTL=3600
CACHE_MAX=100

# ============================================
# CẤU HÌNH EMAIL
# Email Service Configuration (SMTP)
# ============================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_REJECT_UNAUTHORIZED=true
EMAIL_FROM=noreply@example.com
EMAIL_FROM_NAME=APC Company
EMAIL_PREVIEW=false

# ============================================
# CẤU HÌNH UPLOAD FILE
# File Upload Configuration
# ============================================
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10485760
MAX_IMAGE_SIZE=5242880
MAX_VIDEO_SIZE=104857600
ALLOWED_IMAGE_TYPES=jpg,jpeg,png,gif,webp
ALLOWED_VIDEO_TYPES=mp4,avi,mov,wmv
UPLOAD_PUBLIC_URL=/uploads
AUTO_PROCESS_IMAGES=false
AUTO_PROCESS_VIDEOS=false

# ============================================
# CẤU HÌNH BẢO MẬT
# Security Configuration
# ============================================
# CORS
CORS_ORIGIN=http://localhost:3001,http://localhost:3000

# Rate Limiting
THROTTLE_TTL=60
THROTTLE_LIMIT=100

# Bcrypt
BCRYPT_ROUNDS=10

# Session & Authentication
SESSION_TIMEOUT=1800
REMEMBER_ME_DURATION=2592000
MAX_FAILED_LOGIN_ATTEMPTS=5
ACCOUNT_LOCK_DURATION=900

# JWT Secret Rotation
JWT_SECRET_ROTATION=false

# ============================================
# CẤU HÌNH SWAGGER
# Swagger/OpenAPI Documentation
# ============================================
SWAGGER_TITLE=APC Company API
SWAGGER_DESCRIPTION=API Documentation cho hệ thống quản lý website công ty
SWAGGER_CONTACT_NAME=APC Team
SWAGGER_CONTACT_EMAIL=support@example.com
SWAGGER_CONTACT_URL=

# ============================================
# CẤU HÌNH GOOGLE RECAPTCHA (Optional)
# Google reCAPTCHA Configuration
# ============================================
RECAPTCHA_SECRET_KEY=
RECAPTCHA_SITE_KEY=

# ============================================
# CẤU HÌNH LOGGING (Optional)
# Logging Configuration
# ============================================
LOG_LEVEL=debug
LOG_FILE_PATH=./logs
LOG_MAX_SIZE=10m
LOG_MAX_FILES=14d
```

**Admin Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
```

**Public Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_PUBLIC_URL=http://localhost:3002
```

### 10.4 Production Deployment

**1. Build Applications:**
```bash
# Backend
cd apc-backend
npm run build

# Admin Frontend
cd apc-admin
npm run build

# Public Frontend
cd apc-public
npm run build
```

**2. Database Migration:**
```bash
cd apc-backend
npm run migration:run
```

**3. Process Management:**
```bash
# Backend với PM2
pm2 start dist/main.js --name apc-backend

# Frontend với PM2
pm2 start npm --name apc-admin -- start
pm2 start npm --name apc-public -- start
```

**4. Nginx Configuration:**
```nginx
# Admin Frontend
server {
    listen 80;
    server_name admin.example.com;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}

# Public Frontend
server {
    listen 80;
    server_name www.example.com;
    
    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}

# Backend API
server {
    listen 80;
    server_name api.example.com;
    
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    location /uploads {
        alias /path/to/uploads;
    }
}
```

**5. SSL Certificate:**
- Sử dụng Let's Encrypt (certbot)
- Hoặc SSL certificate từ provider

### 10.5 Docker Deployment (Optional)

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: anphat_chemical
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6-alpine
    volumes:
      - redis_data:/data

  backend:
    build: ./apc-backend
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=postgres
      - REDIS_HOST=redis
    depends_on:
      - postgres
      - redis

  admin:
    build: ./apc-admin
    ports:
      - "3001:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:3000/api

  public:
    build: ./apc-public
    ports:
      - "3002:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:3000/api

volumes:
  postgres_data:
  redis_data:
```

---

## 11. Testing & Quality Assurance {#testing}

### 11.1 Testing Strategy

**Backend Testing:**
- Unit tests: Services, utilities
- Integration tests: API endpoints
- E2E tests: Critical flows

**Frontend Testing:**
- Component tests: React components
- Integration tests: Page flows
- E2E tests: User journeys

### 11.2 Test Tools

**Backend:**
- Jest: Test framework
- Supertest: API testing
- @nestjs/testing: NestJS testing utilities

**Frontend:**
- Jest: Test framework
- React Testing Library: Component testing
- Playwright/Cypress: E2E testing

### 11.3 Code Quality

**Linting:**
- ESLint: Code linting
- Prettier: Code formatting
- Husky: Pre-commit hooks

**Type Safety:**
- TypeScript: Static type checking
- Strict mode enabled

---

## 12. Monitoring & Maintenance {#monitoring}

### 12.1 Logging

**Log Levels:**
- Error: Critical errors
- Warn: Warnings
- Info: General information
- Debug: Debug information

**Log Storage:**
- Console output (development)
- File logs (production)
- Database logs (`system_logs` table)

### 12.2 Error Tracking & Handling

**Error Handling Strategy:**
- **Global Exception Filter:** Bắt tất cả exceptions và format response chuẩn
- **Try-Catch Blocks:** 
  - Tất cả database operations phải có try-catch
  - Tất cả file operations phải có try-catch
  - Tất cả external API calls phải có try-catch
- **Transaction Handling:**
  - Sử dụng database transactions cho các operations liên quan đến nhiều tables
  - Rollback transaction khi có lỗi
  - Cleanup resources (files, cache) khi rollback
- **Error Logging:**
  - Log errors vào `system_logs` table
  - Log errors vào file (production)
  - Log errors vào console (development)
- **Error Response:**
  - Format chuẩn: `{ success: false, error: { code, message, details } }`
  - Không expose sensitive information trong error messages
  - (Optional) Sentry integration cho production monitoring

### 12.3 Performance Monitoring

**Metrics to Track:**
- **API Performance:**
  - Response times (p50, p95, p99)
  - Request rate (requests/second)
  - Error rate
  - Cache hit rate
- **Database Performance:**
  - Query execution time
  - Slow queries (> 100ms)
  - Connection pool usage
  - Index usage
- **System Resources:**
  - Memory usage
  - CPU usage
  - Disk I/O
  - Network I/O

**Monitoring Tools:**
- **PM2 Monitoring:** `pm2 monit` hoặc `pm2 plus`
- **PostgreSQL Query Analysis:**
  - `EXPLAIN ANALYZE` cho slow queries
  - `pg_stat_statements` extension để track query performance
  - Log slow queries (> 100ms) trong production
- **Redis Monitoring:**
  - `redis-cli INFO` để xem stats
  - Monitor memory usage và hit rate
- **(Optional) APM Tools:**
  - New Relic, Datadog, hoặc tự build dashboard với Prometheus + Grafana

**Performance Alerts:**
- API response time > 1s
- Database query time > 500ms
- Cache hit rate < 50%
- Memory usage > 80%
- CPU usage > 80%

### 12.4 Backup Strategy

**Database Backup:**
- **Frequency:** Daily automated backups (full backup)
- **Retention:** 30 days
- **Location:** Remote storage (S3, Google Cloud Storage, hoặc dedicated backup server)
- **Test Restore:** Test restore procedures hàng tháng
- **Backup Method:**
  - `pg_dump` cho full backup
  - WAL archiving cho point-in-time recovery
  - Automated backup script với cron job

**File Backup:**
- **Upload Files:** 
  - Daily sync to backup storage
  - Versioning cho các file quan trọng
  - Automated cleanup cho các file không được sử dụng (> 90 ngày)
- **Backup Location:** Remote storage (S3, Google Cloud Storage)

**Backup Verification:**
- Automated verification sau mỗi backup
- Test restore procedures định kỳ
- Monitor backup success/failure

---

## 13. Business Rules & Workflows {#business-rules}

### 13.1 Slug Generation & Conflict Handling

**1. Cách Tạo Slug (Slug Generation):**

**Auto-Generate từ Name/Title:**
- Khi tạo mới entity (product/news/category), nếu không cung cấp `url_slug`, system tự động generate từ:
  - **Products:** Từ field `name`
  - **News:** Từ field `title`
  - **Categories:** Từ field `name`

**Quy trình Generate:**
1. Chuyển sang lowercase (ví dụ: "Sản Phẩm" → "sản phẩm")
2. Loại bỏ dấu tiếng Việt:
   - `á, à, ả, ã, ạ` → `a`
   - `ă, ắ, ằ, ẳ, ẵ, ặ` → `a`
   - `â, ấ, ầ, ẩ, ẫ, ậ` → `a`
   - `đ` → `d`
   - `é, è, ẻ, ẽ, ẹ` → `e`
   - `ê, ế, ề, ể, ễ, ệ` → `e`
   - `í, ì, ỉ, ĩ, ị` → `i`
   - `ó, ò, ỏ, õ, ọ` → `o`
   - `ô, ố, ồ, ổ, ỗ, ộ` → `o`
   - `ơ, ớ, ờ, ở, ỡ, ợ` → `o`
   - `ú, ù, ủ, ũ, ụ` → `u`
   - `ư, ứ, ừ, ử, ữ, ự` → `u`
   - `ý, ỳ, ỷ, ỹ, ỵ` → `y`
3. Thay thế khoảng trắng và ký tự đặc biệt:
   - Khoảng trắng → `-` (dấu gạch ngang)
   - Loại bỏ các ký tự đặc biệt (chỉ giữ `a-z`, `0-9`, `-`)
4. Loại bỏ các dấu gạch ngang liên tiếp: `---` → `-`
5. Trim dấu gạch ngang ở đầu và cuối

**Ví dụ:**
- Input: "Sản Phẩm Hóa Chất #1"
- Step 1: "sản phẩm hóa chất #1"
- Step 2: "san pham hoa chat #1"
- Step 3: "san-pham-hoa-chat-1"
- Step 4: "san-pham-hoa-chat-1" (không có ---)
- Step 5: "san-pham-hoa-chat-1" (không có - ở đầu/cuối)
- Output: `san-pham-hoa-chat-1`

**Constraints:**
- Max length: 255 characters
- Min length: 3 characters
- Nếu sau khi generate < 3 characters, thêm prefix `item-` hoặc `post-` hoặc `cat-`

**2. Cách Dùng Slug:**

**Trong API Request:**
- **POST /api/products, /api/news, /api/categories:**
  - `url_slug`: Optional field
  - Nếu không cung cấp → Auto-generate từ `name`/`title`
  - Nếu cung cấp → Validate và sử dụng slug đó (phải unique)

**Trong API Response:**
- Tất cả GET endpoints trả về `url_slug` trong response
- Public endpoints sử dụng slug trong URL path: `/api/public/products/:slug`, `/api/public/news/:slug`

**Trong Frontend Routes:**
- **Public Frontend:**
  - `/products/[slug]` - Chi tiết sản phẩm
  - `/news/[slug]` - Chi tiết tin tức
  - `/categories/[slug]` - Danh sách sản phẩm theo category (nếu có route này)
- **Admin Frontend:**
  - Slug được hiển thị trong form edit
  - Có thể chỉnh sửa slug trực tiếp

**Trong Database:**
- Field `url_slug` trong các bảng: `products`, `news`, `categories`
- Constraint: `UNIQUE NOT NULL`
- Index: `idx_products_slug`, `idx_news_slug`, `idx_categories_slug`

**3. Conflict Handling (Khi Slug Trùng Lặp):**

**Khi Tạo Mới:**
- Check uniqueness trong cùng entity type:
  - `products.url_slug` phải unique trong bảng `products`
  - `news.url_slug` phải unique trong bảng `news`
  - `categories.url_slug` phải unique trong bảng `categories`
- Nếu slug đã tồn tại:
  1. Tự động thêm suffix `-{number}` bắt đầu từ `-2`
  2. Check lại uniqueness, nếu vẫn trùng → tăng số lên (`-3`, `-4`, ...)
  3. Tiếp tục cho đến khi tìm được slug unique

**Ví dụ Conflict:**
- Slug muốn tạo: `san-pham-hoa-chat`
- Nếu đã tồn tại → Thử: `san-pham-hoa-chat-2`
- Nếu vẫn tồn tại → Thử: `san-pham-hoa-chat-3`
- Tiếp tục cho đến khi unique

**Khi Update:**
- Nếu slug mới trùng với slug của entity khác (cùng type) → Return error 409 Conflict
- Nếu slug mới trùng với slug của chính entity đó → Không cần thay đổi (giữ nguyên)

**4. Khi Nào Slug Thay Đổi:**

**Trường hợp Slug Thay Đổi:**
1. **Admin chỉnh sửa trực tiếp:**
   - Trong form edit, admin thay đổi field `url_slug`
   - Gửi PUT request với `url_slug` mới

2. **Admin đổi tên entity:**
   - Nếu `url_slug` không được cung cấp trong PUT request
   - System có thể auto-generate lại từ `name`/`title` mới (tùy business logic)
   - **Lưu ý:** Thông thường, khi update `name`/`title`, slug không tự động thay đổi trừ khi admin chỉnh sửa trực tiếp

**Trường hợp Slug Không Thay Đổi:**
- Khi update các fields khác (price, description, status, ...) mà không động đến `url_slug`
- Slug giữ nguyên để đảm bảo URL ổn định

**5. Xử Lý Khi Slug Thay Đổi:**

**Business Rules:**
- Khi update slug của product/news/category:
  1. **Lấy slug cũ:** Query entity hiện tại để lấy `url_slug` cũ
  2. **So sánh:** So sánh slug cũ với slug mới
  3. **Nếu khác nhau:**
     - Check xem slug cũ có tồn tại trong `url_redirects` table không (với `old_url = /{entity_type}/{old_slug}`)
     - Nếu có redirect cũ:
       - Update `new_url` = `/{entity_type}/{new_slug}`
       - Update `entity_id` = `{id}`
       - Update `updated_at` = `now()`
     - Nếu chưa có redirect:
       - Tạo record mới trong `url_redirects`:
         - `old_url`: `/{entity_type}/{old_slug}` (ví dụ: `/products/san-pham-cu`)
         - `new_url`: `/{entity_type}/{new_slug}` (ví dụ: `/products/san-pham-moi`)
         - `entity_type`: `product` | `news` | `category`
         - `entity_id`: ID của entity
         - `created_at`: `now()`
  4. **Update entity:** Update `url_slug` trong bảng chính (products/news/categories)

**Redirect Handling trong API:**
- Trong các API `GET /api/public/products/:slug`, `GET /api/public/news/:slug`:
  1. Tìm entity theo `url_slug = {slug}`
  2. Nếu tìm thấy → Return entity data (200 OK)
  3. Nếu không tìm thấy:
     - Check trong `url_redirects` với `old_url = /{entity_type}/{slug}`
     - Nếu tìm thấy redirect:
       - Return HTTP 301 (Permanent Redirect)
       - Header `Location: {new_url}`
     - Nếu không tìm thấy redirect → Return 404 Not Found

**Max Redirect Chain:**
- Giới hạn tối đa 5 lần redirect để tránh redirect loop
- Nếu redirect chain > 5 → Return 404 (có thể có vấn đề với data)

**Validation:**
- Slug phải unique trong cùng entity type
- Không được chứa các từ khóa hệ thống: `admin`, `api`, `static`, `assets`, `uploads`, `_next`, `_error`
- Không được bắt đầu bằng số (ví dụ: `123-product` → không hợp lệ)
- Chỉ chứa: `a-z`, `0-9`, `-` (dấu gạch ngang)
- Không được có dấu gạch ngang ở đầu hoặc cuối
- Không được có nhiều dấu gạch ngang liên tiếp

### 13.2 Password Reset Flow

**Flow:**
1. User click "Quên mật khẩu" → Nhập email/phone
2. System generate reset token (JWT với expiry 1 giờ)
3. Gửi email chứa link reset: `{adminFrontendUrl}/reset-password?token={resetToken}`
4. User click link → Validate token
5. User nhập mật khẩu mới (2 lần để confirm)
6. Update password và invalidate token
7. Gửi email xác nhận đã đổi mật khẩu

**Security Rules:**
- Reset token chỉ có hiệu lực 1 giờ
- Mỗi token chỉ được sử dụng 1 lần
- Rate limit: 3 requests/email/giờ
- Log tất cả reset attempts vào `activity_logs`

### 13.3 Account Unlock Mechanism

**Lock Rules:**
- Tài khoản bị khóa sau 5 lần đăng nhập sai liên tiếp
- Thời gian khóa: 15 phút (có thể cấu hình)
- Sau thời gian khóa, tự động unlock

**Unlock Methods:**
1. **Auto Unlock:** Sau thời gian khóa (15 phút)
2. **Manual Unlock:** Admin có thể unlock thủ công qua API `PATCH /api/employees/:id/unlock`
3. **Reset Password:** Reset password sẽ tự động unlock account

**Logging:**
- Log tất cả lock/unlock events vào `activity_logs`
- Track số lần đăng nhập sai trong `employees.failed_login_attempts`

### 13.4 Customer Merge Logic

**Merge Rules:**
- Khi tạo contact request mới, check email trong `customers` table
- Nếu email đã tồn tại:
  - Merge thông tin: Update `full_name`, `phone`, `company` nếu mới hơn hoặc đầy đủ hơn
  - Tăng `contact_count`
  - Update `last_contact_at`
  - Link contact request mới vào customer hiện có
- Nếu email chưa tồn tại:
  - Tạo customer mới từ contact request
  - Set `contact_count = 1`
  - Set `last_contact_at = now()`

**Merge Strategy:**
- Ưu tiên thông tin đầy đủ hơn (không null)
- Nếu cả 2 đều có giá trị, giữ giá trị mới hơn
- Merge `notes` bằng cách append (nếu có)

### 13.5 Sale Price Validation

**Business Rules:**
- `sale_price` phải nhỏ hơn `price` (nếu có)
- `sale_price` phải >= 0
- Nếu `sale_price` = `price`, không hiển thị giá khuyến mãi
- Nếu `sale_price` = null hoặc 0, chỉ hiển thị `price`

**Validation:**
```typescript
if (sale_price && sale_price >= price) {
  throw new BadRequestException('Sale price must be less than regular price');
}
```

### 13.6 Specifications Format

**Format:**
- Type: `Record<string, string>` (JSON object)
- Key: Tên thuộc tính (ví dụ: "Weight", "Dimensions", "Color")
- Value: Giá trị thuộc tính (ví dụ: "500g", "20x30x10cm", "Red")

**Example:**
```json
{
  "Weight": "500g",
  "Dimensions": "20x30x10cm",
  "Color": "Red",
  "Material": "Plastic"
}
```

**Validation:**
- Max 20 specifications per product
- Key max length: 50 characters
- Value max length: 200 characters
- Keys không được trùng lặp

### 13.7 Tags Format & Validation

**Format:**
- Type: `string` (comma-separated)
- Separator: Comma (`,`) hoặc semicolon (`;`)
- Trim whitespace cho mỗi tag

**Example:**
- Input: `"tag1, tag2, tag3"` hoặc `"tag1;tag2;tag3"`
- Stored: `"tag1,tag2,tag3"`

**Validation:**
- Max 10 tags per entity
- Each tag: 2-50 characters
- Tags không được trùng lặp (case-insensitive)
- Loại bỏ tags trống

**Display:**
- Split tags và hiển thị dạng badge/chip
- Click tag để filter/search

### 13.8 Featured Items Limit

**Business Rules:**
- **Products:** Max 8 featured products trên homepage
- **News:** Max 4 featured news trên homepage
- Khi set `featured = true`, check limit:
  - Nếu đã đạt limit, hiển thị warning
  - Cho phép override (bỏ featured của item khác) hoặc từ chối

**Implementation:**
- Check limit trước khi save
- API `GET /api/products?featured=true` trả về tối đa 8 items
- API `GET /api/news?featured=true` trả về tối đa 4 items

### 13.9 Status Workflow & Transitions

**Products:**
- `visible` ↔ `hidden` (2-way)
- Không có workflow phức tạp

**News:**
- `draft` → `published` (via publish action)
- `draft` → `hidden` (direct)
- `published` → `hidden` (unpublish)
- `published` → `draft` (unpublish to draft)
- `hidden` → `draft` (direct)
- `hidden` → `published` (direct, set `published_at = now()`)

**Contact Requests:**
- `new` → `processing` (assign to employee)
- `processing` → `resolved` (mark as resolved)
- `processing` → `new` (unassign)
- `resolved` → `processing` (reopen)

**Validation:**
- Chỉ cho phép transitions hợp lệ
- Log tất cả status changes vào `activity_logs`

### 13.10 Contact Assignment

**Business Rules:**
- Contact request có thể được assign cho employee
- Field `assigned_to_id` trong `contact_requests` table
- Khi assign:
  - Set `status = 'processing'`
  - Set `assigned_to_id = employee_id`
  - Log vào `activity_logs`
- Khi unassign:
  - Set `status = 'new'`
  - Set `assigned_to_id = null`
  - Log vào `activity_logs`

**API:**
- `PATCH /api/contacts/:id/assign` - Assign contact
- `PATCH /api/contacts/:id/unassign` - Unassign contact

### 13.11 Scheduled Publish Implementation

**Business Rules:**
- News có thể được schedule publish trong tương lai
- Field `published_at` trong `news` table
- Khi `published_at > now()` và `status = 'published'`:
  - News không hiển thị trên public website
  - Chỉ hiển thị khi `published_at <= now()`

**Implementation:**
- Background job/cron check mỗi phút:
  - Tìm news có `status = 'published'` và `published_at <= now()`
  - Update `published_at = now()` (nếu cần)
  - Invalidate cache
- Hoặc sử dụng database trigger/function

**UI:**
- Date picker cho `published_at`
- Hiển thị "Scheduled for {date}" trong admin panel
- Preview mode cho scheduled news

### 13.12 Orphan File Cleanup

**Business Rules:**
- Files không được link với entity nào (`entity_type = null` hoặc `entity_id = null`) được coi là orphan files
- Orphan files thường là:
  - Files upload nhưng không được gán vào entity
  - Files của entity đã bị xóa (soft delete)
  - Files upload lỗi hoặc thừa

**Quản Lý Orphan Files:**
- Admin có thể xem danh sách orphan files qua:
  - `GET /api/files?orphan=true`
  - `GET /api/files/orphan`
- Hiển thị trong admin panel với badge "Orphan" màu đỏ (xem Section 4.1.7)
- Có thể xóa từng file hoặc bulk delete nhiều orphan files qua `DELETE /api/files/bulk`

**Automatic Cleanup:**
- Cleanup job chạy định kỳ (hàng ngày hoặc hàng tuần):
  - Tìm files có `entity_id = null` hoặc entity đã bị soft delete > 30 ngày
  - Xóa files trên disk
  - Soft delete records trong database

**Manual Cleanup:**
- Admin có thể trigger cleanup thủ công qua API `POST /api/files/cleanup`
- Hiển thị danh sách orphan files trong admin panel (Section 4.1.7)
- Cho phép xóa từng file hoặc bulk delete qua `DELETE /api/files/bulk`

### 13.13 URL Redirect khi Slug Thay Đổi

**Mục đích:**
- Khi slug của product/news/category thay đổi, URL cũ sẽ trả về 404
- Redirect giúp:
  - **SEO:** Giữ link juice, không mất ranking từ search engines
  - **User Experience:** Người dùng click link cũ vẫn truy cập được
  - **External Links:** Các website khác đã link đến URL cũ vẫn hoạt động

**Implementation (Option 3: Bảng riêng `url_redirects`):**

**Business Rules:**
- Khi update slug của product/news/category:
  1. Check xem slug cũ có tồn tại trong `url_redirects` không
  2. Nếu có, update `new_url` và `entity_id` trong record đó
  3. Nếu không, tạo record mới trong `url_redirects`
- Mỗi entity có thể có nhiều redirects (nhiều lần thay đổi slug)
- Redirect type: 301 (Permanent Redirect)
- Max redirect chain: 5 (tránh redirect loop)

**Database Schema:**
- Table `url_redirects` (xem Section 5.2 Database Schema)
- Fields:
  - `old_url`: URL cũ (ví dụ: `/products/old-slug`)
  - `new_url`: URL mới (ví dụ: `/products/new-slug`)
  - `entity_type`: 'product', 'news', hoặc 'category'
  - `entity_id`: ID của entity
  - `created_at`: Thời gian tạo redirect

**API Implementation:**
- Trong các API `GET /api/public/products/:slug`, `GET /api/public/news/:slug`, `GET /api/public/categories/:slug`:
  1. Tìm entity theo `url_slug`
  2. Nếu không tìm thấy, check trong `url_redirects` với `old_url = /{entity_type}/{slug}`
  3. Nếu tìm thấy redirect, return 301 redirect đến `new_url`
  4. Nếu không tìm thấy, return 404

**Example Flow:**
```
1. Product có slug: "san-pham-cu"
2. Admin update slug thành: "san-pham-moi"
3. System tự động tạo redirect:
   - old_url: "/products/san-pham-cu"
   - new_url: "/products/san-pham-moi"
   - entity_type: "product"
   - entity_id: 123

4. User truy cập: /products/san-pham-cu
5. System check redirect → Return 301 → /products/san-pham-moi
```

**Cleanup:**
- Có thể cleanup redirects cũ (> 1 năm) nếu không còn cần thiết
- Hoặc giữ lại để track lịch sử

### 13.14 Sitemap & Robots.txt

**Sitemap Generation:**

**Implementation:**
- Endpoint: `GET /api/public/sitemap.xml` hoặc static file `/sitemap.xml`
- Generate sitemap.xml tự động từ database
- Format: XML sitemap chuẩn (sitemap.org)

**Included URLs:**
- **Products:** Tất cả products có `visible = true`
  - URL format: `/products/{slug}`
  - Priority: 0.8
  - Change frequency: weekly
- **News:** Tất cả news có `status = 'published'` và `published_at <= now()`
  - URL format: `/news/{slug}`
  - Priority: 0.7
  - Change frequency: daily
- **Categories:** Tất cả categories (nếu có route category pages)
  - URL format: `/categories/{slug}` (nếu có)
  - Priority: 0.6
  - Change frequency: monthly
- **Static Pages:**
  - `/` (homepage) - Priority: 1.0, Change frequency: daily
  - `/about` - Priority: 0.5, Change frequency: monthly
  - `/contact` - Priority: 0.5, Change frequency: monthly
  - `/products` - Priority: 0.8, Change frequency: weekly
  - `/news` - Priority: 0.7, Change frequency: daily

**Update Strategy:**
- **On-Demand:** Generate khi có request (có cache)
- **Scheduled:** Background job generate mỗi ngày (hoặc khi có thay đổi)
- **Cache:** Cache sitemap trong Redis (TTL: 24 giờ)
- **Invalidation:** Invalidate cache khi:
  - Product/news được publish/unpublish
  - Slug thay đổi
  - Category được tạo/xóa

**Sitemap Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/products/san-pham-1</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... more URLs ... -->
</urlset>
```

**Robots.txt:**

**Content:**
```
User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Allow: /
Allow: /products/
Allow: /news/
Allow: /about
Allow: /contact

Sitemap: https://example.com/sitemap.xml
```

**Implementation:**
- Static file: `/robots.txt` trong public folder
- Hoặc dynamic endpoint: `GET /api/public/robots.txt`
- Update khi có thay đổi domain hoặc sitemap location

**SEO Best Practices:**
- Sitemap phải accessible tại `/sitemap.xml`
- Robots.txt phải accessible tại `/robots.txt`
- Submit sitemap lên Google Search Console và Bing Webmaster Tools
- Monitor sitemap errors trong Search Console

### 13.15 Settings Management API

**Mục Đích:**
Hệ thống quản lý Settings cho phép admin quản lý các cấu hình hệ thống động mà không cần thay đổi code hoặc restart server. Thay vì hardcode các giá trị trong code, settings được lưu trong database và có thể thay đổi qua Admin Panel.

**Lợi Ích:**
- **Linh hoạt:** Thay đổi cấu hình mà không cần deploy lại code
- **Dễ bảo trì:** Tập trung quản lý tất cả settings ở một nơi
- **Audit Trail:** Log tất cả thay đổi settings vào activity logs
- **Phân quyền:** Chỉ admin mới được thay đổi settings quan trọng
- **Validation:** Đảm bảo giá trị settings đúng kiểu dữ liệu

**Các Loại Settings:**

**1. General Settings (`general`):**
- `site_name`: Tên website (hiển thị trên header, footer, email)
- `site_description`: Mô tả website (dùng cho meta description)
- `site_logo_url`: URL logo website
- `company_name`: Tên công ty
- `company_address`: Địa chỉ công ty
- `company_phone`: Số điện thoại
- `company_email`: Email liên hệ
- `default_language`: Ngôn ngữ mặc định
- `items_per_page`: Số items hiển thị mỗi trang (mặc định: 20)
- `maintenance_mode`: Bật/tắt chế độ bảo trì (boolean)

**2. Email Settings (`email`):**
- `email_from_name`: Tên người gửi email
- `email_reply_to`: Email reply-to
- `email_signature`: Chữ ký email
- `email_footer_text`: Text footer trong email
- `email_template_header_color`: Màu header email template
- `email_template_footer_color`: Màu footer email template

**3. SEO Settings (`seo`):**
- `meta_title`: Meta title mặc định
- `meta_description`: Meta description mặc định
- `meta_keywords`: Meta keywords
- `og_image_url`: URL ảnh Open Graph
- `google_analytics_id`: Google Analytics Tracking ID
- `google_tag_manager_id`: Google Tag Manager ID
- `facebook_pixel_id`: Facebook Pixel ID
- `robots_txt_content`: Nội dung robots.txt (có thể override)

**4. Social Media Settings (`social`):**
- `facebook_url`: Link Facebook
- `twitter_url`: Link Twitter
- `linkedin_url`: Link LinkedIn
- `youtube_url`: Link YouTube
- `instagram_url`: Link Instagram
- `zalo_url`: Link Zalo
- `social_share_enabled`: Bật/tắt nút share (boolean)

**5. Contact Settings (`contact`):**
- `contact_email`: Email nhận yêu cầu liên hệ
- `contact_phone`: Hotline
- `contact_address`: Địa chỉ văn phòng
- `contact_map_lat`: Latitude cho Google Maps
- `contact_map_lng`: Longitude cho Google Maps
- `contact_working_hours`: Giờ làm việc (JSON: `{"monday": "8:00-17:00", ...}`)
- `contact_form_enabled`: Bật/tắt form liên hệ (boolean)

**6. Feature Flags (Optional - `features`):**
- `enable_registration`: Bật/tắt đăng ký user (boolean)
- `enable_comments`: Bật/tắt comment (boolean)
- `enable_newsletter`: Bật/tắt newsletter (boolean)
- `enable_product_reviews`: Bật/tắt đánh giá sản phẩm (boolean)

**Ví Dụ Sử Dụng:**

**Trong Backend Code:**
```typescript
// Lấy setting từ database
const siteName = await settingsService.get('site_name');
const maintenanceMode = await settingsService.get('maintenance_mode');

// Kiểm tra maintenance mode
if (maintenanceMode === true) {
  throw new ServiceUnavailableException('Website đang bảo trì');
}
```

**Trong Frontend:**
```typescript
// Lấy settings cho public website
const settings = await api.get('/api/public/settings');
// Hiển thị: siteName, companyPhone, socialLinks, etc.
```

**Trong Email Templates:**
```handlebars
{{site_name}} - {{company_name}}
{{company_address}}
{{company_phone}}
```

**Endpoints:**
- `GET /api/settings` - Lấy tất cả settings (admin only)
- `GET /api/settings/:key` - Lấy setting theo key (admin only)
- `PUT /api/settings/:key` - Update setting (admin only)
- `GET /api/settings/group/:group_name` - Lấy settings theo group (admin only)
- `GET /api/public/settings` - Lấy public settings (không cần auth, chỉ trả về settings công khai)

**Permissions:**
- Chỉ admin mới được xem và update settings
- Public endpoint chỉ trả về settings công khai (không bao gồm email config, secrets, etc.)
- Log tất cả settings changes vào `activity_logs`

**Best Practices:**
- Không lưu sensitive data (passwords, API keys) trong settings table, dùng environment variables
- Validate giá trị settings theo `type` (string, number, boolean, json)
- Cache settings trong Redis để tránh query database mỗi lần
- Invalidate cache khi có thay đổi settings

### 13.16 Role-based Permissions Matrix

**Admin Permissions:**
- ✅ Tất cả quyền của Employee
- ✅ Quản lý nhân viên (CRUD)
- ✅ Quản lý settings
- ✅ Unlock accounts
- ✅ Xem activity logs
- ✅ Quản lý file uploads
- ✅ Bulk operations

**Employee Permissions:**
- ✅ Quản lý sản phẩm (CRUD)
- ✅ Quản lý danh mục (CRUD)
- ✅ Quản lý tin tức (CRUD)
- ✅ Quản lý yêu cầu liên hệ (Read, Update status, Reply)
- ✅ Quản lý khách hàng (Read, Update notes)
- ✅ Quản lý authors (CRUD)
- ❌ Quản lý nhân viên
- ❌ Quản lý settings
- ❌ Xem activity logs
- ❌ Unlock accounts

**Implementation:**
- Use Guards và Decorators trong NestJS
- `@Roles('admin')` decorator cho admin-only endpoints
- `@Public()` decorator cho public endpoints

### 13.17 Activity Logging Details

**Logged Actions:**
- **Authentication:** login, logout, failed_login, password_reset
- **CRUD Operations:** create, update, delete cho tất cả entities
- **Status Changes:** status transitions
- **File Operations:** upload, delete
- **Settings Changes:** update settings
- **Account Management:** lock, unlock, create, update, delete employee

**Log Structure:**
- `employee_id`: Người thực hiện
- `action`: Loại hành động
- `entity_type`: Loại entity (product, news, etc.)
- `entity_id`: ID của entity
- `description`: Mô tả chi tiết
- `old_values`: Giá trị cũ (JSONB)
- `new_values`: Giá trị mới (JSONB)
- `ip_address`: IP address
- `created_at`: Thời gian

**Retention:**
- Giữ logs trong 90 ngày
- Archive logs cũ hơn 90 ngày (optional)
- Admin có thể export logs

---

## 14. Quy Trình Phát Triển {#quy-trinh}

### 14.1 Git Workflow

**Branch Strategy:**
- `main`: Production code
- `develop`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches
- `hotfix/*`: Hotfix branches

**Commit Convention:**
- `feat:`: New feature
- `fix:`: Bug fix
- `docs:`: Documentation
- `style:`: Code style
- `refactor:`: Code refactoring
- `test:`: Tests
- `chore:`: Maintenance

### 14.2 Code Review Process

**Review Checklist:**
- Code follows style guide
- Tests written and passing
- Documentation updated
- No security vulnerabilities
- Performance considered

### 14.3 Release Process

**1. Development:**
- Feature development on feature branch
- Code review
- Merge to develop

**2. Testing:**
- QA testing on staging
- Bug fixes

**3. Release:**
- Merge to main
- Tag version
- Deploy to production
- Monitor for issues

---

## 15. Checklist & Roadmap {#checklist}

### 15.1 Development Checklist

**Backend:**
- [x] Setup NestJS project structure
- [x] Configure database connection
- [x] Create entities
- [ ] Implement authentication
- [ ] Create CRUD modules
- [ ] Setup file upload
- [ ] Configure email service
- [ ] Setup Swagger documentation
- [ ] Write tests
- [ ] Setup logging

**Admin Frontend:**
- [ ] Setup Next.js project
- [ ] Create layout components
- [ ] Implement authentication flow
- [ ] Create dashboard
- [ ] Create CRUD pages
- [ ] Implement file upload UI
- [ ] Setup state management
- [ ] Write tests

**Public Frontend:**
- [ ] Setup Next.js project
- [ ] Create layout components
- [ ] Create homepage
- [ ] Create product pages
- [ ] Create news pages
- [ ] Create contact page
- [ ] Implement SEO
- [ ] Write tests

### 15.2 Deployment Checklist

**Pre-deployment:**
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] SSL certificates obtained
- [ ] Domain names configured
- [ ] Backup strategy in place

**Deployment:**
- [ ] Deploy backend
- [ ] Deploy admin frontend
- [ ] Deploy public frontend
- [ ] Configure Nginx
- [ ] Setup monitoring
- [ ] Test all functionality

**Post-deployment:**
- [ ] Monitor logs
- [ ] Check performance
- [ ] Verify backups
- [ ] Update documentation

### 15.3 Feature Roadmap

**Phase 1 (MVP):**
- Authentication
- Employee management
- Product management
- Category management
- News management
- Contact management
- Basic dashboard

**Phase 2:**
- Advanced analytics
- Email notifications
- File upload optimization
- SEO improvements
- Performance optimization

**Phase 3:**
- Multi-language support
- Advanced search
- Export/Import features
- API rate limiting improvements
- Advanced reporting

---

## 📝 Ghi Chú

**Tài liệu này được cập nhật thường xuyên. Vui lòng kiểm tra phiên bản mới nhất.**

**Liên hệ:** support@example.com

**Version:** 1.0.0
**Last Updated:** 2025

---