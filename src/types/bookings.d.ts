export type BookingStatus = 'active' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  userName: string;
  placeName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: BookingStatus;
}