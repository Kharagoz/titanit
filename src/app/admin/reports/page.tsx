'use client'
import { useState } from 'react'
import { Header } from "@/components/Header";

export default function ReportsPage() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [revenue, setRevenue] = useState<number | null>(null)

  const mockData = [
    { date: '2024-01-01', amount: 15000 },
    { date: '2024-01-02', amount: 22000 },
    { date: '2024-01-03', amount: 18000 },
    { date: '2024-01-04', amount: 25000 },
    { date: '2024-01-05', amount: 21000 }
  ]

  const calculateRevenue = () => {
    const filtered = mockData.filter(item => 
      (!startDate || item.date >= startDate) && 
      (!endDate || item.date <= endDate)
    )
    
    const total = filtered.reduce((sum, item) => sum + item.amount, 0)
    setRevenue(total)
  }

  const exportToPDF = () => {
    alert(`PDF экспортирован\nПериод: ${startDate} - ${endDate}\nВыручка: ${revenue} ₽`)
  }

  const exportToExcel = () => {
    alert(`Excel экспортирован\nПериод: ${startDate} - ${endDate}\nВыручка: ${revenue} ₽`)
  }

  return (
    <div className="container mx-auto p-4 rounded-md">
        <Header />
        <h1 className="mt-24 ml-3 text-4xl font-bold mb-8"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52E305] to-[#358808]">Отчёты</span></h1>
      
      <div className="bg-[#0D0D0D] p-10 rounded-lg shadow-md mx-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-white">Начальная дата</label>
            <input
              placeholder='h'
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded  focus:border-[#52E305] focus:outline-none focus:ring-2 focus:ring-[#52E305] transition-colors"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-white">Конечная дата</label>
            <input
              placeholder='hj'
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded  focus:border-[#52E305] focus:outline-none focus:ring-2 focus:ring-[#52E305] transition-colors"
            />
          </div>
          
          <div className="flex items-end">
            <button 
              onClick={calculateRevenue}
              className="bg-gradient-to-r from-[#6bebff] to-[#1b7789] text-black text-base mt-5 px-8 py-2 rounded-[12px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50"
            >
              Рассчитать
            </button>
          </div>
        </div>

        {revenue !== null && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Результат:</h3>
            <p className="text-2xl text-white">
              Выручка: <span className="font-bold text-white">{revenue.toLocaleString('ru-RU')} ₽</span>
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <button 
            onClick={exportToPDF}
            className="bg-gradient-to-r from-[#ffa37b] to-[#a83315] text-black text-base mt-5 px-8 py-2 rounded-[12px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50"
            disabled={!revenue}
          >
            Экспорт в PDF
          </button>
          
          <button 
            onClick={exportToExcel}
            className="bg-gradient-to-r from-[#99f667] to-[#7db35f] text-black text-base mt-5 px-8 py-2 rounded-[12px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50"
            disabled={!revenue}
          >
            Экспорт в Excel
          </button>
        </div>
      </div>
    </div>
  )
}