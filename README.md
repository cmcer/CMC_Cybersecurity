# CMC Cyber Security — Website (Astro, song ngữ VI/EN)

Website giới thiệu dịch vụ & giải pháp an ninh mạng, thiết kế theo phong cách **dark modern** với **tone xanh da trời thương hiệu CMC** (`#0077D1` / `#0A91D2`), kết hợp ảnh minh hoạ thật và logo chính thức. Build bằng **Astro** → xuất ra **HTML/CSS/JS tĩnh**, đang chạy online trên **GitHub Pages**, có thể deploy thêm lên **Hostinger** bất cứ lúc nào.

🌐 **Xem online:** https://megadinhai.github.io/cmc-cybersecurity/

> **Ảnh minh hoạ:** nằm trong `public/images/` (hero, ảnh section, logo khách hàng, chứng nhận) — tải về từ cmccybersecurity.com cho mục đích demo. Thay bằng ảnh có bản quyền của bạn trước khi go-live.
>
> ⚠️ Đây là bản dựng lại nhằm **minh hoạ thiết kế**, không phải trang chính thức của CMC. Nội dung & số liệu được biên tập từ `cmccybersecurity.com` và mang tính demo — hãy thay bằng dữ liệu thật trước khi go-live.

---

## 1. Tính năng

- ⚡ **Astro 5** static export — tải nhanh, SEO tốt, không cần server.
- 🌐 **Song ngữ Việt/Anh** — Tiếng Việt ở `/`, Tiếng Anh ở `/en/`, có nút chuyển ngữ, `hreflang` chuẩn SEO.
- 🎨 **Design system CMC** — tone xanh da trời thương hiệu, typography Inter, logo chính thức.
- ✨ **Animation** — particle network canvas, scroll reveal, animated counters, hiệu ứng hover. Tôn trọng `prefers-reduced-motion`.
- 📱 **Responsive** đầy đủ (375 / 768 / 1024 / 1440), menu mobile, touch target ≥ 44px.
- ♿ **Accessibility** — skip link, focus visible, label form, contrast cao, aria.
- 📄 **7 trang × 2 ngôn ngữ** = 14 trang + 404 + sitemap tự sinh.
- 🚀 **CI/CD** — tự động build & deploy lên GitHub Pages mỗi khi push vào `main` (`.github/workflows/deploy.yml`).

## 2. Cấu trúc thư mục

```
.
├── astro.config.mjs        # Cấu hình Astro: site, base (GitHub Pages), sitemap
├── .github/workflows/deploy.yml  # CI/CD: tự build & deploy lên GitHub Pages
├── public/                 # Asset tĩnh: favicon, robots.txt, ảnh, .htaccess (cho Hostinger)
├── src/
│   ├── data/content.ts     # ★ Nội dung (dịch vụ, giải pháp, tin tức, tuyển dụng, liên hệ)
│   ├── i18n/ui.ts          # ★ Chuỗi giao diện song ngữ (nav, nút, tiêu đề)
│   ├── i18n/utils.ts       # Hàm tiện ích đa ngôn ngữ + xử lý base-path
│   ├── styles/global.css   # ★ Design system: màu, font, hiệu ứng, animation
│   ├── layouts/Layout.astro
│   ├── components/         # Header, Footer, Hero, các card, section…
│   └── pages/              # Route VI (gốc) + route EN (/en/)
└── dist/                   # Kết quả build (không commit — .gitignore)
```
★ = file bạn sẽ chỉnh sửa nhiều nhất.

## 3. Lệnh

```bash
npm install      # cài dependencies (chạy 1 lần)
npm run dev      # chạy dev server: http://localhost:4321
npm run build    # build ra thư mục dist/
npm run preview  # xem thử bản build tĩnh (kèm base-path GitHub Pages)
```

## 4. Tuỳ chỉnh nhanh

| Muốn đổi | Sửa ở đâu |
|----------|-----------|
| Nội dung dịch vụ, giải pháp, tin tức, job, liên hệ | `src/data/content.ts` |
| Menu, nút, tiêu đề section (2 ngôn ngữ) | `src/i18n/ui.ts` |
| Màu sắc, font, hiệu ứng | `src/styles/global.css` (khối `@theme`) |
| Domain / base path / SEO | `astro.config.mjs` (`site`, `base`) |
| Logo | `public/images/logo/` + `src/components/Logo.astro` |

---

## 5. Deploy lên GitHub Pages (đang dùng — tự động)

Repo đã cấu hình sẵn **GitHub Actions** (`.github/workflows/deploy.yml`): mỗi lần push lên nhánh `main`, site tự động build và publish lên GitHub Pages.

**Việc cần làm 1 lần duy nhất (trên GitHub, qua trình duyệt):**
1. Vào repo → **Settings → Pages**.
2. Mục **Build and deployment → Source**, chọn **GitHub Actions** (nếu chưa được chọn sẵn).
3. Chờ tab **Actions** chạy xong workflow "Deploy to GitHub Pages" (khoảng 1-2 phút).
4. Truy cập: **https://megadinhai.github.io/cmc-cybersecurity/**

Từ lần sau, chỉ cần `git push` lên `main` là site tự cập nhật, không cần làm gì thêm.

> Cấu hình base-path cho GitHub Pages nằm ở `astro.config.mjs` (`site` + `base: '/cmc-cybersecurity'`). Toàn bộ ảnh và liên kết nội bộ trong code đều đi qua hàm `withBase()` / `localePath()` (`src/i18n/utils.ts`) nên tự động khớp với base-path này.

### Đẩy code lên GitHub (nếu cần làm lại từ đầu)

```bash
git init
git add .
git commit -m "CMC Cyber Security website (Astro, VI/EN)"
git branch -M main
git remote add origin https://github.com/megadinhai/cmc-cybersecurity.git
git push -u origin main
```

---

## 6. Deploy lên Hostinger (tuỳ chọn, domain riêng)

Đây là **website tĩnh** nên **không cần** gói Node.js — chỉ cần hosting thường (shared hosting) là đủ.

### Bước 1 — Cấu hình domain trước khi build
Mở `astro.config.mjs`:
```js
site: 'https://tenmiencuaban.com',
// XÓA dòng `base: '/cmc-cybersecurity'` nếu deploy vào thư mục gốc của domain riêng
```
- Nếu deploy vào **thư mục con** (vd `tenmien.com/demo`): đổi `base` thành `/demo`.
- Đổi luôn dòng `Sitemap:` trong `public/robots.txt`.

### Bước 2 — Build
```bash
npm run build
```
Kết quả nằm trong thư mục **`dist/`** (đã kèm sẵn `.htaccess`, `robots.txt`, `favicon.svg`).

### Bước 3 — Upload lên Hostinger (cách đơn giản nhất: hPanel File Manager)
1. Đăng nhập **hPanel** → **Files → File Manager**.
2. Mở thư mục **`public_html`** (domain chính) — hoặc thư mục con tương ứng nếu dùng `base`.
3. Xoá file mặc định cũ (nếu có), rồi **upload toàn bộ nội dung bên trong `dist/`** (lưu ý: upload *nội dung bên trong* dist, không upload chính thư mục `dist`).
   - Mẹo: nén `dist/` thành `.zip`, upload rồi **Extract** ngay trên File Manager cho nhanh.
4. Đảm bảo file **`.htaccess`** đã nằm trong `public_html` (bật "Show hidden files" nếu không thấy).
5. Truy cập domain — xong! ✅

### (Tuỳ chọn) Upload bằng FTP
Dùng FileZilla với thông tin FTP trong hPanel (**Files → FTP Accounts**):
- Host / Username / Password / Port (21)
- Kéo toàn bộ nội dung `dist/` vào `public_html/`.

### (Tuỳ chọn) Bật SSL/HTTPS
Hostinger thường tự cấp SSL miễn phí. Sau khi domain có HTTPS, mở `public/.htaccess`, **bỏ comment** 2 dòng `RewriteCond %{HTTPS} off …` để ép chuyển hướng HTTPS, rồi build & upload lại.

---

## 7. Kết nối form Liên hệ với backend thật

Form hiện chỉ chạy **demo** (hiện thông báo thành công, chưa gửi đi đâu). Hosting tĩnh không tự xử lý form, chọn 1 trong 2 cách:

**Cách A — Formspree (không cần code server):**
1. Tạo form tại [formspree.io](https://formspree.io), lấy endpoint dạng `https://formspree.io/f/abcxyz`.
2. Trong `src/components/ContactForm.astro`, thêm vào thẻ `<form>`:
   ```html
   action="https://formspree.io/f/abcxyz" method="POST"
   ```
3. Trong `<script>`, thay đoạn "demo only" bằng `form.submit()` hoặc `fetch(form.action, { method:'POST', body:new FormData(form) })`.

**Cách B — PHP trên Hostinger:** tạo `public/contact.php` nhận `POST` rồi gửi mail bằng hàm `mail()`, đặt `action="/contact.php"`.

---

## 8. Checklist trước khi go-live (site chính thức)

- [ ] Đổi `site`/`base` trong `astro.config.mjs` cho đúng domain chính thức.
- [ ] Đổi domain trong `public/robots.txt`.
- [ ] Thay nội dung & số liệu thật trong `src/data/content.ts`.
- [ ] Thay thông tin liên hệ thật (hotline, email, địa chỉ).
- [ ] Kết nối form Liên hệ với Formspree/PHP.
- [ ] Dùng logo chính thức đúng bản quyền.
- [ ] Bật HTTPS redirect trong `.htaccess` (nếu deploy Hostinger).
- [ ] `npm run build` thành công, kiểm tra `npm run preview`.

---

Made with Astro · CMC brand design system · VI/EN
