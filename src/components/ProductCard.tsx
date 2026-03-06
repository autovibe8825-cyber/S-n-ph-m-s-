import React from 'react';
import { Star, ShoppingCart, Play, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden product-card-shadow border border-slate-100 hover:border-indigo-200 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-indigo-600 border border-indigo-50">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Link 
            to={`/product/${product.id}`}
            className="bg-white text-slate-900 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a 
            href={product.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <Play className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <p className="text-slate-500 text-sm line-clamp-2 mb-6 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 line-through">{(product.price * 1.5).toLocaleString('vi-VN')}đ</span>
            <span className="font-bold text-indigo-600 text-lg">{product.price.toLocaleString('vi-VN')}đ</span>
          </div>
          
          <Link 
            to={`/product/${product.id}`}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
