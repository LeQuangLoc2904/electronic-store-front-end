import {cn} from '../../lib/utils';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, iconColor }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#202224] opacity-70 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className={cn("p-3 rounded-2xl", iconColor)}>
          <Icon className="text-white" size={24} />
        </div>
      </div>
      <div className="text-sm">
        <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
          {trendValue}
        </span>
        <span className="text-gray-400 ml-2">Up from yesterday</span>
      </div>
    </div>
  );
};

export default StatCard;