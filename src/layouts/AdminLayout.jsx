import { Outlet } from "react-router";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const AdminLayout = () => {
  return (
    <div className="flex bg-[#F5F6FA]">
      {/* Sidebar - Cố định bên trái */}
      <Sidebar />

      <div className="flex w-full flex-col">
        {/* Header - Thanh công cụ phía trên */}
        <Header />

        {/* Nội dung chính của từng trang */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;