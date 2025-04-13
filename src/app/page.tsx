'use client';

import { useState, useEffect } from 'react';
import { fetchDashboardStats, fetchWeeklyOccupancy } from '@/lib/api';
import { DashboardStats, DailyOccupancy } from '@/types/dashboard';
import StatsCards from '@/components/admin/dashboard/StatsCards';
import OccupancyChart from '@/components/admin/dashboard/OccupancyChart';

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [occupancyData, setOccupancyData] = useState<DailyOccupancy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsData, occupancyData] = await Promise.all([
          fetchDashboardStats(),
          fetchWeeklyOccupancy(),
        ]);
        setStats(statsData);
        setOccupancyData(occupancyData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading || !stats) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-6">Дашборд</h1>
      
      <StatsCards
        occupancyRate={stats.occupancyRate}
        dailyRevenue={stats.dailyRevenue}
      />
      
      <OccupancyChart data={occupancyData} />
    </div>
  );
}