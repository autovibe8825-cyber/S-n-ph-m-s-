import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight, ShieldCheck, Globe, Clock, Star, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const categories = ['Tất cả', 'Cho bé', 'Cho người lớn', 'Công cụ tiện ích'];

  const filteredProducts = activeCategory === 'Tất cả' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100">
              <Star className="w-3 h-3 fill-current" />
              Code sạch 100%, tự viết
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Mở là chơi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Giải trí tức thì - Không cần cài đặt
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
              Từ trò chơi giáo dục cho bé đến công cụ quản lý chuyên nghiệp cho người lớn. Tất cả đều chạy ngay trên trình duyệt, không cần cài đặt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#marketplace" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Xem kho sản phẩm
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/guide" className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                Hướng dẫn sử dụng
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-6 h-6" /> BẢO MẬT</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Zap className="w-6 h-6" /> TỐC ĐỘ</div>
            <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle2 className="w-6 h-6" /> UY TÍN</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Globe className="w-6 h-6" /> TOÀN CẦU</div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sản phẩm nổi bật</h2>
              <p className="text-slate-500">Những đoạn code chất lượng nhất được tuyển chọn.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.slice(0, 9).map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Khách hàng nói gì về chúng tôi?</h2>
            <p className="text-slate-500">Hơn 1000+ khách hàng đã tin tưởng và sử dụng sản phẩm của Mở là chơi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Anh Tuấn', role: 'Lập trình viên', text: 'Code rất sạch, dễ dàng tùy biến theo ý muốn. Hỗ trợ kỹ thuật cực nhanh.' },
              { name: 'Chị Lan', role: 'Giáo viên', text: 'Các game cho bé rất sinh động, con mình học toán tiến bộ hẳn.' },
              { name: 'Minh Đức', role: 'Kinh doanh tự do', text: 'Landing page tối ưu chuyển đổi tốt, mình đã chốt được nhiều đơn hơn.' }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
