interface StatsCardsProps {
  occupancyRate: number;
  dailyRevenue: number;
}

export default function StatsCards({ occupancyRate, dailyRevenue }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm uppercase font-medium mb-2">Загруженность офиса сегодня</h3>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-3">
            <div 
              className="bg-[#4ED805] h-2.5 rounded-full" 
              style={{ width: `${occupancyRate}%` }}
            ></div>
          </div>
          <span className="font-bold text-xl min-w-[50px]">{occupancyRate}%</span>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm uppercase font-medium mb-2">Выручка за день</h3>
        <p className="font-bold text-xl">{dailyRevenue.toLocaleString('ru-RU')} ₽</p>
      </div>
    </div>
  );
}