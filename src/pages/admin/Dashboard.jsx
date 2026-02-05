import { Users, Package, DollarSign, Clock } from "lucide-react";
import StatCard from "../../components/admin/StatCard";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#202224]">Dashboard</h2>

      {/* Grid thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total User" 
          value="40,689" 
          icon={Users} 
          iconColor="bg-purple-500"
          trend="up" 
          trendValue="8.5%" 
        />
        <StatCard 
          title="Total Order" 
          value="10,293" 
          icon={Package} 
          iconColor="bg-yellow-500"
          trend="up" 
          trendValue="1.3%" 
        />
        <StatCard 
          title="Total Sales" 
          value="$89,000" 
          icon={DollarSign} 
          iconColor="bg-green-500"
          trend="down" 
          trendValue="4.3%" 
        />
        <StatCard 
          title="Pending" 
          value="2,040" 
          icon={Clock} 
          iconColor="bg-orange-500"
          trend="up" 
          trendValue="1.8%" 
        />
      </div>

      {/* Placeholder cho Chart hoặc Bảng đơn hàng gần đây */}
      <div className="bg-white p-6 rounded-2xl shadow-sm h-96 flex items-center justify-center text-gray-400 border border-dashed border-gray-300">
        Sales Chart Placeholder (Bám theo thiết kế Figma)
      </div>
    </div>
  );
};

export default Dashboard;