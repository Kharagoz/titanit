import { BookingStatus } from '@/types/bookings';

interface BookingFiltersProps {
  date: string;
  user: string;
  status: BookingStatus | '';
  onDateChange: (date: string) => void;
  onUserChange: (user: string) => void;
  onStatusChange: (status: BookingStatus | '') => void;
  onReset: () => void;
}

export default function BookingFilters({ 
    date, 
    user, 
    status, 
    onDateChange, 
    onUserChange,
    onStatusChange, 
    onReset,
}: 
    BookingFiltersProps) {
  return (
    <div className="bg-[#0D0D0D] py-6 px-10 rounded-xl mx-10 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-3 text-gray-400">Дата</label>
          <input placeholder='Поиск по дате' type="date" value={date} onChange={(e) => onDateChange(e.target.value)} className="w-full p-2 border border-gray-600 rounded-[12px] focus:border-[#52E305] focus:outline-none focus:ring-2 focus:ring-[#52E305] transition-colors"/>
        </div>
        
        <div>
          <label className="block mb-3 text-gray-400">Сотрудник</label>
          <input type="text" placeholder="Поиск по имени" value={user} onChange={(e) => onUserChange(e.target.value)} className="w-full p-2 border border-gray-600 rounded-[12px] focus:border-[#52E305] focus:outline-none focus:ring-2 focus:ring-[#52E305] transition-colors"/>
        </div>
        
        <div>
          <label className="block mb-3 text-gray-400">Статус</label>
          <select title='Сортировка по статусу' value={status} onChange={(e) => onStatusChange(e.target.value as BookingStatus | '')} className="w-full p-2 border border-gray-600 rounded-[12px] focus:border-[#52E305] focus:outline-none focus:ring-2 focus:ring-[#52E305] transition-colors">
            <option value="">Все</option>
            <option value="active">Активные</option>
            <option value="completed">Завершенные</option>
            <option value="cancelled">Отмененные</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={onReset}
        className="bg-gradient-to-r from-[#99f667] to-[#7db35f] text-black text-base mt-5 px-8 py-2 rounded-[12px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50"
      >
        Сбросить фильтры
      </button>
    </div>
  );
}