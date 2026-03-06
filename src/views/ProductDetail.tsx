import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Play, CheckCircle2, ArrowLeft, ShieldCheck, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, Product } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="p-20 text-center">Sản phẩm không tồn tại.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Quay lại
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Images & Demo */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative group"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <a 
                href={product.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Play className="w-5 h-5 fill-current" />
                Xem Demo Trực Tiếp
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-video rounded-2xl bg-slate-100 overflow-hidden border border-slate-100">
                <img src={`https://picsum.photos/seed/${product.id}-${i}/400/300`} alt="Preview" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info & Buy */}
        <div className="space-y-8">
          <div>
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-slate-400">({product.sales} đã bán)</span>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1 text-emerald-600 font-medium">
                <ShieldCheck className="w-4 h-4" />
                Code sạch 100%
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold text-indigo-600">
            {product.price.toLocaleString('vi-VN')}đ
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-900">Tính năng nổi bật:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button 
              onClick={() => navigate(`/checkout/${product.id}`)}
              className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
            >
              Mua Ngay
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-colors">
              <MessageSquare className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">Mô tả chi tiết</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            {product.longDescription}
          </div>

          <div className="pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Đánh giá từ khách hàng</h2>
            <div className="space-y-6">
              {product.reviews.map(review => (
                <div key={review.id} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-bold text-slate-900">{review.user}</div>
                      <div className="text-xs text-slate-400">{review.date}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Tại sao chọn Mở là chơi?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm opacity-90">Hỗ trợ cài đặt miễn phí</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm opacity-90">Cập nhật code trọn đời</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm opacity-90">Hoàn tiền 100% nếu file lỗi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
