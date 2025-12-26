# 🏢 An Phát Chemical - Website Management System

Hệ thống quản lý website công ty An Phát Chemical bao gồm:
- **Backend API** (NestJS)
- **Admin Frontend** (Next.js) - Trang quản trị
- **Public Frontend** (Next.js) - Trang người dùng

## 📁 Cấu Trúc Dự Án

```
anphat_chemical/
├── apc-backend/          # NestJS Backend API
├── apc-admin/           # Admin Frontend (Next.js) - Trang quản trị
├── apc-public/           # Public Frontend (Next.js) - Trang người dùng
└── tech_stack_overview.md  # Tài liệu chi tiết
```

## 🚀 Yêu Cầu Hệ Thống

- **Node.js** >= 18.x
- **PostgreSQL** >= 14.x
- **Redis** >= 6.x (optional, cho cache)
- **npm** hoặc **yarn**

## 📦 Cài Đặt

### 1. Clone Repository

```bash
git clone <repository-url>
cd anphat_chemical
```

### 2. Backend Setup

```bash
cd apc-backend
npm install
cp .env.example .env
# Chỉnh sửa file .env với thông tin database, JWT secret, etc.
npm run start:dev
```

Backend sẽ chạy tại: `http://localhost:3000`
Swagger Documentation: `http://localhost:3000/api/docs`

### 3. Admin Frontend Setup

```bash
cd apc-admin
npm install
cp .env.example .env.local
# Chỉnh sửa file .env.local với API URL
npm run dev
```

Admin Frontend sẽ chạy tại: `http://localhost:3001`

### 4. Public Frontend Setup

```bash
cd apc-public
npm install
cp .env.example .env.local
# Chỉnh sửa file .env.local với API URL
npm run dev
```

Public Frontend sẽ chạy tại: `http://localhost:3002`

## 🗄️ Database Setup

```bash
# Tạo database
createdb anphat_chemical

# Chạy migrations (khi có)
cd apc-backend
npm run migration:run
```

## 📚 Tài Liệu

Xem file `tech_stack_overview.md` để biết chi tiết về:
- Kiến trúc hệ thống
- Cấu hình chi tiết
- API Documentation
- Quy trình phát triển

## 🔧 Scripts

### Backend

```bash
cd apc-backend
npm run start:dev    # Development mode
npm run build        # Build production
npm run start:prod   # Production mode
npm run test         # Run tests
```

### Frontend (Admin & Public)

```bash
cd apc-admin  # hoặc apc-public
npm run dev      # Development mode
npm run build    # Build production
npm run start    # Production mode
npm run lint     # Lint code
```

## 🌐 URLs Development

- **Backend API**: http://localhost:3000
- **Swagger Docs**: http://localhost:3000/api/docs
- **Admin Frontend**: http://localhost:3001
- **Public Frontend**: http://localhost:3002

## 📝 Environment Variables

Mỗi phần có file `.env.example` riêng:
- `apc-backend/.env.example` - Backend configuration
- `apc-admin/.env.example` - Admin frontend configuration
- `apc-public/.env.example` - Public frontend configuration

Xem chi tiết trong file `.env.example` của từng phần.

## 🏗️ Kiến Trúc

```
┌─────────────────────────────────────────────────┐
│         Client Layer (Browser/Mobile)           │
│    Next.js 14 + TypeScript + Tailwind CSS       │
│  ┌──────────────┐       ┌──────────────┐        │
│  │ apc-admin    │       │ apc-public   │        │
│  │ Port: 3001   │       │ Port: 3002   │        │
│  └──────┬───────┘       └──────┬───────┘        │
└─────────┼──────────────────────┼────────────────┘
          │                      │
          │    HTTPS/REST API    │
          └──────────┬───────────┘
                     │
┌────────────────────▼────────────────────────────┐
│      Backend Layer (NestJS + TypeScript)        │
│  Controllers → Services → Repositories          │
│  Port: 3000                                     │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│     Data Layer (PostgreSQL + Redis Cache)       │
│          + Local File Storage System            │
└─────────────────────────────────────────────────┘
```

## 📋 Checklist Development

- [x] Setup NestJS project structure
- [ ] Configure database connection
- [ ] Create entities
- [ ] Implement authentication
- [ ] Create CRUD modules
- [ ] Setup file upload
- [ ] Configure email service
- [ ] Setup Swagger documentation
- [ ] Write tests
- [ ] Setup logging

## 🤝 Contributing

1. Tạo feature branch từ `develop`
2. Commit với convention: `feat:`, `fix:`, `docs:`, etc.
3. Push và tạo Pull Request

## 📄 License

Private - An Phát Chemical

## 📞 Liên Hệ

- **Email**: support@example.com
- **Documentation**: Xem `tech_stack_overview.md`

---

**Version**: 1.0.0  
**Last Updated**: 2025

