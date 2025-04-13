'use client'
import { useState } from 'react'

interface Seat {
  id: string
  x: number
  y: number
  status: 'available' | 'occupied'
  user?: string
}

export default function OfficeMap() {
  const [seats, setSeats] = useState<Seat[]>([
    { id: '1', x: 50, y: 50, status: 'available' },
    { id: '2', x: 150, y: 50, status: 'occupied', user: 'Анна' },
    // ... другие места
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
      <h2 className="text-xl font-bold mb-4">План офиса</h2>
      <div className="relative w-full h-96 bg-gray-100 rounded-lg">
        {seats.map(seat => (
          <div
            key={seat.id}
            onClick={() => handleSeatClick(seat)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
              seat.status === 'available' ? 'bg-green-400' : 'bg-red-400'
            }`}
            style={{ left: `${seat.x}px`, top: `${seat.y}px` }}
          >
            {seat.status === 'occupied' && (
              <span className="text-xs text-center">{seat.user}</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
          <span>Свободно</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
          <span>Занято</span>
        </div>
      </div>
    </div>
  )
}