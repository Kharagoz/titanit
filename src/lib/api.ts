import axios from 'axios';
import { DashboardStats } from '@/types/dashboard';
import { DailyOccupancy } from '@/types/dashboard';

const api = axios.create({
  baseURL: '/api',
});

export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  return {
    occupancyRate: 65,
    dailyRevenue: 125000
  };
};

export const fetchWeeklyOccupancy = async (): Promise<DailyOccupancy[]> => {
  return [
    { date: '2023-05-01', occupancy: 60 },
    { date: '2023-05-02', occupancy: 45 },
  ];
};

//export const fetchDashboardStats = async (): Promise<DashboardStats> => {
//    const response = await api.get('/dashboard/stats');
//    return response.data;
//  };
//
//  export const fetchWeeklyOccupancy = async (): Promise<DailyOccupancy[]> => {
//    const response = await api.get('/dashboard/occupancy');
//    return response.data;
//  };

export default api;