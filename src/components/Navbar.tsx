import React from 'react';
import { ShoppingCart, Search, User, Menu, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

export default function Navbar({ cartCount }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Mở là chơi</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Trang chủ</Link>
            <Link to="/guide" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Hướng dẫn</Link>
            <a href="/#marketplace" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Sản phẩm</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Liên hệ</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
              <User className="w-4 h-4" />
              Đăng nhập
            </button>
            <button className="md:hidden p-2 text-slate-500">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
