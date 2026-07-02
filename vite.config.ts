import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Dùng base path TƯƠNG ĐỐI ('./') thay vì cố định theo tên 1 repo.
// Vì router dùng HashRouter (điều hướng nội bộ không phụ thuộc base), toàn bộ
// asset (JS/CSS/ảnh) sẽ resolve tương đối theo đúng vị trí index.html được host —
// nhờ vậy CÙNG một bản build chạy đúng ở bất kỳ đâu: GitHub Pages (mọi tên repo),
// domain gốc, hay thư mục con — không cần đổi cấu hình mỗi lần đổi nơi deploy.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
});
