'use client'
import { useState } from 'react'
import { Header } from "@/components/Header";

interface Seat {
  id: string
  x: number
  y: number
  status: 'available' | 'occupied'
  user?: string
}

export default function OfficeMap() {
  const [seats, setSeats] = useState<Seat[]>([
    { id: '1', x: 210, y: 120, status: 'available' },
    { id: '2', x: 300, y: 100, status: 'available' },
    { id: '3', x: 300, y: 130, status: 'available' },
    { id: '4', x: 340, y: 100, status: 'available' },
    { id: '5', x: 410, y: 100, status: 'available' },
    { id: '6', x: 460, y: 100, status: 'available' },
    { id: '7', x: 430, y: 130, status: 'available' },
    { id: '8', x: 560, y: 100, status: 'available' },
    { id: '9', x: 260, y: 375, status: 'occupied', user:'' },
  ])

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'available') {
      const userName = prompt('Введите ваше имя для бронирования:')
      if (userName) {
        setSeats(seats.map(s =>
          s.id === seat.id ? { ...s, status: 'occupied', user: userName } : s
        ))
      }
    }
  }

  return (
    <div className="p-6">
      <Header />
      <h1 className="mt-20 ml-3 text-4xl font-bold mb-8"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52E305] to-[#358808]">План офиса</span></h1>
      <div className="relative mx-auto w-full max-w-4xl h-[500px] bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md flex flex-col gap-2">
      <div className="flex items-center">
        <div className="w-5 h-5 bg-green-400 rounded-full mr-2 shadow-sm"></div>
        <span className="text-base">Свободно</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 bg-red-400 rounded-full mr-2 shadow-sm"></div>
        <span className="text-base">Занято</span>
      </div>
    </div>
        <div className="absolute inset-3 overflow-hidden">
          <img src="/plan.jpg" alt="План офиса" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"/>
        </div>
        {seats.map(seat => (
          <div
            key={seat.id}
            onClick={() => handleSeatClick(seat)}
            className={`absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-black text-xs font-bold ${
              seat.status === 'available' ? 'bg-green-400' : 'bg-red-400'
            }`}
            style={{ left: `${seat.x}px`, top: `${seat.y}px` }}
          >
            {seat.id}
          </div>
        ))}
      </div>
    </div>
  )
}