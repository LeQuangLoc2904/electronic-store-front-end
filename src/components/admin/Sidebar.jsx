import { LayoutDashboard, ShoppingBag, Users, ListOrdered, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: ShoppingBag, label: "Products", path: "/admin/products" },
  { icon: ListOrdered, label: "Orders", path: "/admin/orders" },
  { icon: Users, label: "Customers", path: "/admin/customers" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
      <div className="p-8">
        <h6 className="text-lg font-semibold text-[#0f1116]">DashStack</h6>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-4 px-4 py-3 text-[#0f1116] rounded-lg font-medium transition-all",
              pathname === item.path 
                ? "bg-[#6b8bd4] text-white" 
                : "text-[#202224] hover:bg-gray-100"
            )}
          >
            <item.icon size={20} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 w-full rounded-lg transition-all">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;