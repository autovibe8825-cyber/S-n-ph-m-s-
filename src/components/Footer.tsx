import React from 'react';
import { Play, RefreshCcw, Lock, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight">Mở là chơi</span>
            </div>
            <p className="text-sm leading-relaxed">
              Nền tảng giải trí tức thì với các sản phẩm mã nguồn HTML/JS chất lượng cao. "Mở là chơi - Không cần cài đặt".
            </p>
            <div className="flex items-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_Bo_Cong_Thuong.svg/1200px-Logo_Bo_Cong_Thuong.svg.png" 
                alt="Đã thông báo Bộ Công Thương" 
                className="h-12 object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>123 Đường Láng, Đống Đa, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>0987.654.321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>support@choi.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Chính sách</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <RefreshCcw className="w-3.5 h-3.5" />
                  Chính sách hoàn tiền
                </a>
                <p className="text-[10px] mt-1 ml-5 opacity-60">Sản phẩm kỹ thuật số không được hoàn trả sau khi đã tải.</p>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  Chính sách bảo mật
                </a>
                <p className="text-[10px] mt-1 ml-5 opacity-60">Cam kết không chia sẻ thông tin khách hàng.</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Bản tin</h4>
            <p className="text-sm mb-4">Nhận thông báo về các đoạn code mới nhất và ưu đãi.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-slate-800 border-none rounded-xl px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-500 transition-colors">
                Gửi
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Mở là chơi - Giải trí tức thì. Mã số thuế: 0123456789.</p>
        </div>
      </div>
    </footer>
  );
}
