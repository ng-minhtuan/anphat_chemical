# 📋 Hướng Dẫn Từng Bước Đẩy Code Lên Git Repository

## 🔍 Bước 0: Kiểm Tra Trạng Thái Hiện Tại

```bash
# Kiểm tra xem có phải git repository không
git status

# Nếu báo lỗi "not a git repository", bạn cần khởi tạo git
```

## 🗑️ Bước 1: Xóa Git Repository Cũ (Nếu Cần)

Nếu bạn muốn bắt đầu hoàn toàn mới, xóa lịch sử git cũ:

### Windows (PowerShell):
```powershell
# Xóa thư mục .git
Remove-Item -Recurse -Force .git
```

### Linux/Mac:
```bash
# Xóa thư mục .git
rm -rf .git
```

**Lưu ý:** Chỉ làm bước này nếu bạn muốn bắt đầu hoàn toàn mới!

## 🆕 Bước 2: Khởi Tạo Git Repository Mới

```bash
# Khởi tạo git repository
git init

# Đổi tên branch sang main (hoặc giữ master)
git branch -M main
```

## 🌐 Bước 3: Tạo Repository Trên GitHub/GitLab

### GitHub:
1. Vào https://github.com/new
2. Đặt tên repository: `anphat_chemical`
3. Chọn **Private** hoặc **Public**
4. **KHÔNG** tích các tùy chọn:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. Click **Create repository**

### GitLab:
1. Vào https://gitlab.com/projects/new
2. Chọn **Blank project**
3. Đặt tên: `anphat_chemical`
4. Click **Create project**

## 🔗 Bước 4: Thêm Remote Repository

Sau khi tạo repository, copy URL và chạy lệnh:

```bash
# Thay <repository-url> bằng URL bạn vừa copy
# Ví dụ: https://github.com/username/anphat_chemical.git

git remote add origin <repository-url>
```

**Ví dụ cụ thể:**
```bash
# HTTPS
git remote add origin https://github.com/yourusername/anphat_chemical.git

# SSH (nếu đã setup SSH key)
git remote add origin git@github.com:yourusername/anphat_chemical.git
```

**Kiểm tra remote:**
```bash
git remote -v
```

## 📝 Bước 5: Thêm Files Vào Git

```bash
# Xem files sẽ được commit
git status

# Thêm tất cả files (trừ những file trong .gitignore)
git add .

# Kiểm tra lại
git status
```

**Lưu ý:** Đảm bảo file `.gitignore` đã được tạo và không commit:
- `.env` files
- `node_modules/`
- `dist/`, `build/`
- Logs, temp files

## 💾 Bước 6: Tạo Commit Đầu Tiên

```bash
git commit -m "feat: initial commit - setup monorepo structure

- Setup NestJS backend (apc-backend)
- Add configuration files
- Add documentation (README, SETUP, tech_stack_overview)
- Setup monorepo structure for backend, admin, and public frontends"
```

## 🚀 Bước 7: Push Lên Remote Repository

```bash
# Push lên branch main
git push -u origin main

# Nếu bạn dùng branch master:
git push -u origin master
```

**Lưu ý:** Lần đầu push có thể yêu cầu authentication:
- **HTTPS:** Nhập username và password (hoặc Personal Access Token)
- **SSH:** Cần setup SSH key trước

## ✅ Bước 8: Xác Nhận

1. Vào repository trên GitHub/GitLab
2. Kiểm tra xem code đã được push thành công chưa
3. Xem các files đã có trong repository

## 🔄 Nếu Gặp Lỗi

### Lỗi: "remote origin already exists"

```bash
# Xóa remote cũ
git remote remove origin

# Thêm lại
git remote add origin <repository-url>
```

### Lỗi: "authentication failed"

**Cách 1: Sử dụng Personal Access Token (HTTPS)**
1. Vào GitHub Settings > Developer settings > Personal access tokens
2. Tạo token mới với quyền `repo`
3. Sử dụng token thay cho password khi push

**Cách 2: Sử dụng SSH**
```bash
# Setup SSH key (nếu chưa có)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Thêm vào GitHub: Settings > SSH and GPG keys

# Đổi remote sang SSH
git remote set-url origin git@github.com:username/anphat_chemical.git
```

### Lỗi: "failed to push some refs"

```bash
# Pull trước (nếu có thay đổi trên remote)
git pull origin main --allow-unrelated-histories

# Sau đó push lại
git push -u origin main
```

## 📋 Tóm Tắt Các Lệnh

```bash
# 1. Khởi tạo git
git init
git branch -M main

# 2. Thêm remote
git remote add origin <repository-url>

# 3. Thêm files
git add .

# 4. Commit
git commit -m "feat: initial commit"

# 5. Push
git push -u origin main
```

## 🎯 Sử Dụng Script Tự Động

### Windows (PowerShell):
```powershell
.\setup-git-repo.ps1 https://github.com/username/anphat_chemical.git
```

### Linux/Mac:
```bash
bash setup-git-repo.sh https://github.com/username/anphat_chemical.git
```

## 📚 Workflow Tiếp Theo

Sau khi setup xong, sử dụng workflow sau:

```bash
# Tạo feature branch
git checkout -b feature/ten-tinh-nang

# Làm việc và commit
git add .
git commit -m "feat: mô tả thay đổi"

# Push branch
git push -u origin feature/ten-tinh-nang

# Tạo Pull Request trên GitHub/GitLab
```

---

**💡 Mẹo:** Luôn kiểm tra `git status` trước khi commit để đảm bảo chỉ commit những files cần thiết!

