'use client';
import { useState, useEffect } from 'react';
import StatsCards from '@/components/admin/dashboard/StatsCards';
import OccupancyChart from '@/components/admin/dashboard/OccupancyChart';
import { DashboardStats, DailyOccupancy } from '@/types/dashboard';
import { Header } from "@/components/Header";

const mockStats: DashboardStats = {
  occupancyRate: 65,
  dailyRevenue: 125000
};

const mockOccupancyData: DailyOccupancy[] = [
  { date: '2023-05-01', occupancy: 60 },
  { date: '2023-05-02', occupancy: 45 },
  { date: '2023-05-03', occupancy: 70 },
  { date: '2023-05-04', occupancy: 80 },
  { date: '2023-05-05', occupancy: 65 },
  { date: '2023-05-06', occupancy: 30 },
  { date: '2023-05-07', occupancy: 20 }
];

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [occupancyData, setOccupancyData] = useState<DailyOccupancy[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStats(mockStats);
    setOccupancyData(mockOccupancyData);
  }, []);

  return (
    <div className="container mx-auto p-4">
        <Header />
        <h1 className="mt-20 ml-3 text-4xl font-bold mb-8"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52E305] to-[#358808]">Дашборд</span></h1>
      
      {stats && (
        <>
          <StatsCards
            occupancyRate={stats.occupancyRate} 
            dailyRevenue={stats.dailyRevenue} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">График загруженности</h2>
              <OccupancyChart data={occupancyData} />
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Последние бронирования</h2>
              <div className="text-gray-500 text-center py-8">
                [Здесь будет таблица бронирований]
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}