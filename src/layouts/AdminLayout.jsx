import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get("/api/users/myInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setUser(response.data.result);
        console.log(user);
      } catch (error) {
        console.error("Error fetching user info:", error);
        navigate("/login");
      }
    }

    fetchUser();
  }, []);
  
  

  return (
    <div className="flex bg-[#F5F6FA]">
      {/* Sidebar - Cố định bên trái */}
      <Sidebar />

      <div className="flex w-full flex-col">
        {/* Header - Thanh công cụ phía trên */}
        <Header data={user} />

        {/* Nội dung chính của từng trang */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;