import { Search, Bell, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* 1. Thanh tìm kiếm bên trái */}
      <div className="flex items-center gap-4 flex-1">
        {/* Nút Menu này dùng để mở sidebar trên mobile nếu bạn cần sau này */}
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={20} />
        </button>

        <div className="relative w-full max-w-md hidden md:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#F5F6FA] border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#4880FF] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* 2. Các Action Icons & User Profile bên phải */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={22} />
          {/* Badge thông báo màu đỏ */}
          <span className="absolute top-1 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
            6
          </span>
        </button>

        {/* Ngăn cách nhẹ */}
        <div className="h-10 w-px bg-gray-200 mx-2 hidden sm:block"></div>

        {/* User Info */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
            <img 
              src="https://ui-avatars.com/api/?name=Moni+Roy&background=4880FF&color=fff" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="hidden sm:block text-left">
            <p className="text-sm font-bold text-[#202224]">Moni Roy</p>
            <p className="text-xs font-semibold text-[#5C5C5C]">Admin</p>
          </div>

          <ChevronDown size={16} className="text-gray-400 group-hover:text-[#4880FF] transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;