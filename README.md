# CMC Cyber Security — Website (React + Vite, song ngữ VI/EN)

Website giới thiệu dịch vụ & giải pháp an ninh mạng, thiết kế theo phong cách **dark modern** với **tone xanh da trời thương hiệu CMC** (`#0077D1` / `#0A91D2`), kết hợp ảnh minh hoạ thật và logo chính thức. Build bằng **React 18 + Vite + TypeScript**, chia thành các module rõ ràng để Dev Front dễ tiếp cận, đang chạy online trên **GitHub Pages**.

🌐 **Xem online:** https://cmcer.github.io/CMC_Cybersecurity/ (bản khác: https://megadinhai.github.io/cmc-cybersecurity/)

> Cùng một bản build chạy đúng trên **cả 2 repo trên** (và bất kỳ subpath/domain nào khác) nhờ dùng base path tương đối (`vite.config.ts` → `base: './'`) kết hợp `HashRouter` — không cần đổi cấu hình mỗi lần đổi nơi deploy.

> **Ảnh minh hoạ:** nằm trong `public/images/` (hero, ảnh section, logo khách hàng, chứng nhận) — tải về từ cmccybersecurity.com cho mục đích demo. Thay bằng ảnh có bản quyền của bạn trước khi go-live.
>
> ⚠️ Đây là bản dựng lại nhằm **minh hoạ thiết kế**, không phải trang chính thức của CMC. Nội dung & số liệu được biên tập từ `cmccybersecurity.com` và mang tính demo — hãy thay bằng dữ liệu thật trước khi go-live.

---

## 1. Công nghệ & kiến trúc

- **React 18** + **TypeScript** + **Vite** (SPA, build ra file tĩnh).
- **React Router v6** dùng `HashRouter` (URL dạng `/#/services`) — chọn có chủ đích để route luôn chạy đúng trên GitHub Pages static hosting mà **không cần** cấu hình rewrite phía server nào (tránh lặp lại lỗi 404 khi dùng BrowserRouter trên GitHub Pages).
- **Tailwind CSS v4** (`@tailwindcss/vite`) cho phần utility, kết hợp CSS thuần cho style riêng từng component.
- **Song ngữ VI/EN** qua `LanguageContext` — ngôn ngữ được xác định thẳng từ URL (`/` = VI, `/en/...` = EN), không cần chọn thủ công.
- **Component hoá theo module**: mỗi component có file `.tsx` + `.css` riêng, đặt cạnh nhau — dễ tìm, dễ sửa, không ảnh hưởng style của component khác.

## 2. Cấu trúc thư mục

```
.
├── index.html                  # HTML entry (Vite)
├── vite.config.ts              # Cấu hình Vite: base path, plugin React + Tailwind
├── .github/workflows/deploy.yml # CI/CD: tự build & deploy lên GitHub Pages
├── public/
│   └── images/                 # Toàn bộ ảnh, logo (copy nguyên trạng vào bản build)
└── src/
    ├── main.tsx                 # Entry point (ReactDOM.createRoot)
    ├── App.tsx                  # Khai báo route (HashRouter, route VI + route /en song song)
    ├── styles/global.css        # ★ Design tokens dùng chung (màu, font, spacing, animation, .btn/.chip...)
    ├── i18n/
    │   ├── types.ts             # Kiểu Lang, danh sách ngôn ngữ
    │   ├── translations/vi.ts   # ★ Chuỗi giao diện Tiếng Việt (nav, nút, tiêu đề)
    │   ├── translations/en.ts   # ★ Chuỗi giao diện Tiếng Anh
    │   └── LanguageContext.tsx  # Provider + hook useLanguage() (lang, t, localePath...)
    ├── data/
    │   └── content.ts           # ★ Nội dung chi tiết (dịch vụ, giải pháp, tin tức, tuyển dụng, liên hệ)
    ├── hooks/                   # useReveal, useCounter, useHeaderScroll, useParticleBackground, useDocumentMeta
    ├── utils/
    │   └── basePath.ts          # withBase() — ghép base-path GitHub Pages vào đường dẫn ảnh
    ├── components/
    │   ├── layout/              # Layout, Header, Footer, Logo, CyberBackground (khung trang, dùng mọi nơi)
    │   ├── ui/                  # Icon, SectionHeading, PageHero, ServiceCard, SolutionCard, ContactForm,
    │   │                        # ClientMarquee, CtaBand — các khối nhỏ dùng lại nhiều chỗ
    │   └── sections/            # Hero, FeatureTrio, DevicesSection, ActivitySection, DataBanner,
    │                            # AssetsSection, StatsBand, TrustBand, Testimonials, SupportCards,
    │                            # WhyGrid, ProcessSteps, ServicesSection, SolutionsSection —
    │                            # các khối lớn ghép thành từng trang
    └── pages/                   # HomePage, ServicesPage, SolutionsPage, AboutPage, NewsPage,
                                  # CareersPage, ContactPage, NotFoundPage
```
★ = file bạn sẽ chỉnh sửa nhiều nhất khi cập nhật nội dung.

**Quy ước module:** mỗi component trong `components/` có file CSS riêng cùng tên đặt ngay cạnh (vd `Hero.tsx` + `Hero.css`) — sửa giao diện của component nào chỉ cần mở đúng 1 file CSS đó, không lo ảnh hưởng phần khác của trang.

## 3. Lệnh

```bash
npm install      # cài dependencies (chạy 1 lần)
npm run dev      # chạy dev server: http://localhost:5173
npm run build    # build ra thư mục dist/
npm run preview  # xem thử bản build tĩnh (kèm base-path GitHub Pages)
npx tsc --noEmit # kiểm tra type TypeScript (không bắt buộc nhưng nên chạy trước khi commit)
```

## 4. Tuỳ chỉnh nhanh

| Muốn đổi | Sửa ở đâu |
|----------|-----------|
| Nội dung dịch vụ, giải pháp, tin tức, job, liên hệ | `src/data/content.ts` |
| Chuỗi giao diện — menu, nút, tiêu đề section (2 ngôn ngữ) | `src/i18n/translations/vi.ts` và `en.ts` |
| Màu sắc, font, spacing, animation dùng chung | `src/styles/global.css` (khối `@theme`) |
| Style riêng của 1 component | file `.css` cạnh component đó trong `src/components/` |
| Thêm route / trang mới | Tạo file trong `src/pages/`, khai báo thêm trong mảng `PAGES` ở `src/App.tsx` |
| Domain / base path | `vite.config.ts` (`base`) |
| Logo | `public/images/logo/` + `src/components/layout/Logo.tsx` |

## 5. Thêm một trang mới (ví dụ)

1. Tạo `src/pages/BlogPage.tsx` (tham khảo cấu trúc `NewsPage.tsx`).
2. Thêm chuỗi dịch cần dùng vào `src/i18n/translations/vi.ts` và `en.ts`.
3. Mở `src/App.tsx`, thêm một dòng vào mảng `PAGES`:
   ```ts
   { path: 'blog', Component: BlogPage },
   ```
   Route Tiếng Việt (`/#/blog`) và Tiếng Anh (`/#/en/blog`) sẽ tự động được tạo — không cần khai báo thêm.
4. Thêm liên kết vào menu nếu cần, trong `src/components/layout/Header.tsx` (mảng `NAV_ITEMS`).

---

## 6. Deploy lên GitHub Pages (đang dùng — tự động)

Repo đã cấu hình sẵn **GitHub Actions** (`.github/workflows/deploy.yml`): mỗi lần push lên nhánh `main`, site tự động build và publish lên GitHub Pages. Nhờ base path tương đối (mục 1), workflow này chạy đúng **trên bất kỳ repo GitHub nào** clone/fork từ đây mà không cần sửa `vite.config.ts`.

**Việc cần làm 1 lần duy nhất cho mỗi repo mới (trên GitHub, qua trình duyệt):**
1. Vào repo → **Settings → Pages**.
2. Mục **Build and deployment → Source**, chọn **GitHub Actions** (nếu chưa được chọn sẵn).
3. Chờ tab **Actions** chạy xong workflow "Deploy to GitHub Pages" (khoảng 1-2 phút).
4. Truy cập: **https://<tên-tổ-chức-hoặc-user>.github.io/<tên-repo>/**

Từ lần sau, chỉ cần `git push` lên `main` là site tự cập nhật, không cần làm gì thêm.

> Route dùng `HashRouter` (URL dạng `/#/services`) nên không bị lỗi 404 khi refresh trang con hay truy cập link trực tiếp — kể cả khi đổi sang repo/tên khác.

### Đẩy code lên GitHub (nếu cần làm lại từ đầu, hoặc thêm một repo đích khác)

```bash
git init
git add .
git commit -m "CMC Cyber Security website (React + Vite, VI/EN)"
git branch -M main
git remote add origin https://github.com/<owner>/<ten-repo>.git
git push -u origin main
```

---

## 7. Deploy lên Hostinger (tuỳ chọn, domain riêng)

Đây là **website tĩnh** (SPA) nên **không cần** gói Node.js — chỉ cần hosting thường (shared hosting) là đủ.

### Bước 1 — Cấu hình domain trước khi build
Mở `vite.config.ts`:
```ts
export default defineConfig({
  base: '/', // đổi thành '/' nếu deploy vào thư mục gốc của domain riêng
  ...
});
```
Nếu deploy vào **thư mục con** (vd `tenmien.com/demo`), đặt `base: '/demo/'`.

### Bước 2 — Build
```bash
npm run build
```
Kết quả nằm trong thư mục **`dist/`**.

### Bước 3 — Upload lên Hostinger (hPanel File Manager)
1. Đăng nhập **hPanel** → **Files → File Manager**.
2. Mở thư mục **`public_html`** (hoặc thư mục con tương ứng nếu dùng `base`).
3. Upload toàn bộ **nội dung bên trong `dist/`** (không upload chính thư mục `dist`).
   - Mẹo: nén `dist/` thành `.zip`, upload rồi **Extract** ngay trên File Manager.
4. Vì dùng `HashRouter`, không cần cấu hình rewrite `.htaccess` đặc biệt cho SPA — mọi route con đều nằm sau dấu `#`, trình duyệt không gửi phần đó lên server.
5. Truy cập domain — xong! ✅

---

## 8. Kết nối form Liên hệ với backend thật

Form hiện chỉ chạy **demo** (`src/components/ui/ContactForm.tsx` — hiện thông báo thành công sau 600ms, chưa gửi đi đâu). Hosting tĩnh không tự xử lý form, chọn 1 trong 2 cách:

**Cách A — Formspree (không cần code server):**
1. Tạo form tại [formspree.io](https://formspree.io), lấy endpoint dạng `https://formspree.io/f/abcxyz`.
2. Trong `handleSubmit` của `ContactForm.tsx`, thay đoạn `setTimeout(...)` demo bằng:
   ```ts
   const res = await fetch('https://formspree.io/f/abcxyz', {
     method: 'POST',
     headers: { Accept: 'application/json' },
     body: new FormData(e.target as HTMLFormElement),
   });
   if (res.ok) setSuccess(true);
   ```

**Cách B — Backend riêng:** dựng một API endpoint (Node/PHP/...) nhận `POST` rồi gửi mail, gọi bằng `fetch()` tương tự trên.

---

## 9. Checklist trước khi go-live (site chính thức)

- [ ] Đổi `base` trong `vite.config.ts` cho đúng domain/thư mục chính thức.
- [ ] Thay nội dung & số liệu thật trong `src/data/content.ts`.
- [ ] Thay thông tin liên hệ thật (hotline, email, địa chỉ) trong `contactInfo` (`src/data/content.ts`).
- [ ] Kết nối form Liên hệ với Formspree/backend thật.
- [ ] Dùng logo chính thức đúng bản quyền.
- [ ] `npm run build` + `npx tsc --noEmit` thành công, kiểm tra `npm run preview`.

---

Made with React + Vite · CMC brand design system · VI/EN
