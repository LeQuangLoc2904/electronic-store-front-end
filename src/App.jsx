// src/App.jsx
import { Routes, Route, Navigate } from 'react-router';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import LoginPage from './pages/auth/Login';

// Placeholder cho Product page để demo
const Products = () => <div>Quản lý sản phẩm</div>;

function App() {
  return (
    <Routes>
      {/* Route cho Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Mặc định vào admin sẽ nhảy sang dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />
        
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        
        {/* Các route khác thêm ở đây */}
      </Route>

      {/* Route cho Client (Tính sau) */}
      <Route path="/" element={<div>Trang chủ khách hàng</div>} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* 404 Not Found */}
      <Route path="*" element={<div>404 Không tìm thấy trang</div>} />
    </Routes>
  );
}

export default App;