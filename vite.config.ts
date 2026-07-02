import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ DEPLOY: Đang cấu hình cho GitHub Pages project site:
// https://megadinhai.github.io/cmc-cybersecurity/
// Nếu deploy lên domain riêng ở thư mục gốc (Hostinger...), đổi `base` thành '/'.
export default defineConfig({
  base: '/cmc-cybersecurity/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
});
