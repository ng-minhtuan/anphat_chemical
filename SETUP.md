# 🚀 Hướng Dẫn Setup Monorepo

Dự án này sử dụng cấu trúc **monorepo** - tất cả các phần (backend, admin frontend, public frontend) nằm trong cùng một repository.

## 📁 Cấu Trúc Hiện Tại

```
anphat_chemical/
├── apc-backend/          ✅ Đã có - NestJS Backend API
├── apc-admin/           ⏳ Chưa có - Admin Frontend (Next.js)
├── apc-public/          ⏳ Chưa có - Public Frontend (Next.js)
├── .gitignore           ✅ Đã tạo - Git ignore cho monorepo
├── README.md            ✅ Đã tạo - Tài liệu tổng quan
└── tech_stack_overview.md ✅ Đã có - Tài liệu chi tiết
```

## 🔧 Cài Đặt Từng Phần

### 1. Backend (apc-backend)

```bash
cd apc-backend
npm install
cp .env.example .env
# Chỉnh sửa .env với thông tin database, JWT secret, etc.
npm run start:dev
```

**URLs:**
- API: http://localhost:3000
- Swagger: http://localhost:3000/api/docs

### 2. Admin Frontend (apc-admin) - Sẽ tạo sau

```bash
# Tạo Next.js project
npx create-next-app@latest apc-admin --typescript --tailwind --app

cd apc-admin
npm install
cp .env.example .env.local
# Chỉnh sửa .env.local với API URL
npm run dev
```

**URL:** http://localhost:3001

### 3. Public Frontend (apc-public) - Sẽ tạo sau

```bash
# Tạo Next.js project
npx create-next-app@latest apc-public --typescript --tailwind --app

cd apc-public
npm install
cp .env.example .env.local
# Chỉnh sửa .env.local với API URL
npm run dev
```

**URL:** http://localhost:3002

## 📝 Git Workflow

### Branch Strategy

- `main` - Production code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hotfix branches

### Commit Convention

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

### Ví dụ:

```bash
feat(backend): add authentication module
fix(admin): fix login form validation
docs: update README with setup instructions
```

## 🔐 Environment Variables

Mỗi phần có file `.env.example` riêng:

- `apc-backend/.env.example` - Backend configuration
- `apc-admin/.env.example` - Admin frontend configuration (sẽ tạo)
- `apc-public/.env.example` - Public frontend configuration (sẽ tạo)

**Lưu ý:** Không commit file `.env` vào git!

## 📦 Dependencies Management

Mỗi phần có `package.json` riêng và quản lý dependencies độc lập:

- `apc-backend/package.json` - Backend dependencies
- `apc-admin/package.json` - Admin frontend dependencies (sẽ tạo)
- `apc-public/package.json` - Public frontend dependencies (sẽ tạo)

## 🏗️ Development Workflow

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd anphat_chemical
   ```

2. **Setup Backend:**
   ```bash
   cd apc-backend
   npm install
   cp .env.example .env
   # Chỉnh sửa .env
   npm run start:dev
   ```

3. **Setup Frontends (khi có):**
   ```bash
   # Admin
   cd apc-admin
   npm install
   cp .env.example .env.local
   npm run dev

   # Public
   cd apc-public
   npm install
   cp .env.example .env.local
   npm run dev
   ```

## 🚀 Production Deployment

Mỗi phần được deploy độc lập:

1. **Backend:** Deploy NestJS application
2. **Admin Frontend:** Deploy Next.js application (port 3001)
3. **Public Frontend:** Deploy Next.js application (port 3002)

Xem chi tiết trong `tech_stack_overview.md` - Section 10: Cài Đặt & Triển Khai

## 📚 Tài Liệu

- **README.md** - Tài liệu tổng quan
- **tech_stack_overview.md** - Tài liệu chi tiết đầy đủ
- **SETUP.md** (file này) - Hướng dẫn setup monorepo

## ✅ Checklist

- [x] Tạo .gitignore ở root level
- [x] Tạo README.md ở root level
- [x] Setup Backend (apc-backend)
- [ ] Tạo Admin Frontend (apc-admin)
- [ ] Tạo Public Frontend (apc-public)
- [ ] Setup CI/CD (optional)
- [ ] Setup Docker Compose (optional)

---

**Lưu ý:** Hiện tại chỉ có Backend. Admin và Public Frontend sẽ được tạo trong các bước tiếp theo.

