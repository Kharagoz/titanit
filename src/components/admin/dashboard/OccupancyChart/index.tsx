'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { DailyOccupancy } from '@/types/dashboard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface OccupancyChartProps {
  data: DailyOccupancy[];
}

export default function OccupancyChart({ data }: OccupancyChartProps) {
  const chartData: ChartData<'line'> = {
    labels: data.map(item => new Date(item.date).toLocaleDateString('ru-RU')),
    datasets: [
      {
        label: 'Загруженность офиса (%)',
        data: data.map(item => item.occupancy),
        borderColor: 'green',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y}%`
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`
        }
      },
    },
  };

  return (
    <div className="h-[300px]">
      <Line options={options} data={chartData} />
    </div>
  );
}