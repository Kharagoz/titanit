'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ login, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-[#000000] flex flex-col justify-end items-center">
        <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-[url('/background.jpg')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center xl:translate-x-[-90%]">
        <div className="mb-6">
          <p className='text-6xl font-bold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#284122]">TitanIT</span>
          </p>
        </div>

        <div className="bg-[#09171296] p-8 rounded-[24px] shadow-md w-[360px] h-[430px] md:w-[464px] flex flex-col">
          <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow">
            <h1 className="text-white text-2xl font-medium text-center mt-1">Вход</h1>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  id="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-full px-4 py-4 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder:text-[#ffffff32] mt-7"
                  placeholder="Почта"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder:text-[#ffffff32]"
                  placeholder="Пароль"
                  required
                />
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <a href="/auth/signup" className="text-[#95fccf] text-base hover:text-[#c7cffb] transition-colors">
                Забыли пароль?
              </a>
            </div>

            <div className="mt-auto mb-1 space-y-4">
              <Link
                href="/admin"
                className="bg-gradient-to-r from-[#74C582] to-[#2d522f] text-white rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Войти
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}