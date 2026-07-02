import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Phải import TRƯỚC App: global.css chứa token & utility class dùng chung
// (.btn, .chip, .surface-card...). Nếu import sau, nó sẽ nạp SAU css của từng
// component trong cây App và ghi đè ngược các style riêng — luôn để dòng này
// đầu tiên khi thêm import mới vào file này.
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
