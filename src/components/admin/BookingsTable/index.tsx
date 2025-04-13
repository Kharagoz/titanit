import { Booking } from '@/types/bookings';

interface BookingTableProps {
  bookings: Booking[];
  onEdit: (booking: Booking) => void;
  onCancel: (id: string) => void;
}

export default function BookingTable({ bookings, onEdit, onCancel }: BookingTableProps) {
    return (
      <div className="mx-8 my-6 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto p-4">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 text-left">Сотрудник</th>
                <th className="py-3 px-6 text-left">Место</th>
                <th className="py-3 px-6 text-left">Дата</th>
                <th className="py-3 px-6 text-left">Время</th>
                <th className="py-3 px-6 text-left">Статус</th>
                <th className="py-3 px-6 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 border-b">
                  <td className="py-4 px-6">{booking.userName}</td>
                  <td className="py-4 px-6">{booking.placeName}</td>
                  <td className="py-4 px-6">{booking.date}</td>
                  <td className="py-4 px-6">{booking.startTime} - {booking.endTime}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === 'active' ? 'bg-green-100 text-green-800' :
                      booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status === 'active' ? 'Активна' : 
                       booking.status === 'completed' ? 'Завершена' : 'Отменена'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => onEdit(booking)}
                      className="text-blue-500 hover:text-blue-700 mr-3 px-3 py-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => onCancel(booking.id)}
                      className="text-red-500 hover:text-red-700 px-3 py-1 rounded hover:bg-red-50 transition-colors"
                    >
                      Отмена
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }