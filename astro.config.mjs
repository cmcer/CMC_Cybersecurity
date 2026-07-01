import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ DEPLOY:
// - Đang cấu hình cho GitHub Pages: https://megadinhai.github.io/cmc-cybersecurity/
// - Nếu sau này deploy lên domain riêng (Hostinger, vd cmccybersecurity.com ở thư mục gốc),
//   đổi `site` thành domain đó và XÓA dòng `base` bên dưới.
export default defineConfig({
  site: 'https://megadinhai.github.io',
  base: '/cmc-cybersecurity',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
