'use client';

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-[#0d0d0dd1] shadow-md z-50 h-[90px]">
      <div className="container mx-auto px-1 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 px-3">
          <img src="/titanit_logo.svg" width={50} height={50} alt="Логотип" className="object-contain"/>
          <span className="text-transparent text-white text-4xl">Titan<b>IT</b></span>
        </div>

        <div className="flex justify-center items-center flex-1 pr-36">
          <div className="flex items-center gap-24">
            <Link href="/admin/dashboard" className="text-2xl font-light text-white hover:text-[#2c9c3b] transition-colors">
              Дашборд
            </Link>
            <Link href="/landing" className="text-2xl font-light text-white hover:text-[#2c9c3b] transition-colors">
              План Офиса
            </Link>
            <Link href="/admin/bookings" className="text-2xl font-light text-white hover:text-[#2c9c3b] transition-colors">
              Бронирования
            </Link>
            <Link href="/" className="text-2xl font-light text-white hover:text-[#2c9c3b] transition-colors">
              Отчёты
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
{/*          <Link href="/login" passHref>
            <button className="bg-gradient-to-r from-[#74C582] to-[#284122] text-white text-xl px-12 py-3 rounded-[20px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50">
              Войти
            </button>
  </Link> */}
          
{/*          <Link href="/profile" className="flex items-center">
            <img 
              src="/star.svg" 
              width={60}
              height={60} 
              alt="Личный кабинет"
              className="object-contain"
            />
  </Link> */}
        </div>
      </div>
    </header>
  );
}