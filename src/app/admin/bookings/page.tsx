'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import { Booking, BookingStatus } from '@/types/bookings';
import BookingTable from '@/components/admin/BookingsTable';
import BookingFilters from '@/components/admin/BookingFilters';
import { Header } from "@/components/Header";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    date: '',
    user: '',
    status: '' as BookingStatus | '',
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get('/bookings');
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (error) {
        console.error('Ошибка загрузки бронирований:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    let result = [...bookings];
    
    if (filters.date) {
      result = result.filter(b => b.date === filters.date);
    }
    
    if (filters.user) {
      result = result.filter(b => 
        b.userName.toLowerCase().includes(filters.user.toLowerCase())
      );
    }
    
    if (filters.status) {
      result = result.filter(b => b.status === filters.status);
    }
    
    setFilteredBookings(result);
  }, [filters, bookings]);

  const handleEdit = (booking: Booking) => {
    console.log('Редактирование брони:', booking);
  };

  const handleCancel = async (id: string) => {
    try {
      await api.delete(`/bookings/${id}`);
      setBookings(bookings.filter(b => b.id !== id));
    } catch (error) {
      console.error('Ошибка отмены брони:', error);
    }
  };

  const handleResetFilters = () => {
    setFilters({
      date: '',
      user: '',
      status: '',
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 shadow-xl">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#52E305]"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
        <Header />
      <h1 className="mt-32 ml-3 text-4xl font-bold mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52E305] to-[#358808]">Управление бронированиями</span></h1>
      <BookingFilters
        date={filters.date}
        user={filters.user}
        status={filters.status}
        onDateChange={(date) => setFilters({...filters, date})}
        onUserChange={(user) => setFilters({...filters, user})}
        onStatusChange={(status) => setFilters({...filters, status})}
        onReset={handleResetFilters}
      />
      
      <BookingTable
        bookings={filteredBookings}
        onEdit={handleEdit}
        onCancel={handleCancel}
      />
    </div>
  );
}