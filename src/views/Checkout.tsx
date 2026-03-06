import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Loader2, QrCode, ShieldCheck, Mail, ArrowLeft, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) return <div className="p-20 text-center">Sản phẩm không tồn tại.</div>;

  const handlePayment = () => {
    if (!email) return alert('Vui lòng nhập email để nhận link tải file!');
    setStep('payment');
  };

  const simulatePaymentSuccess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 3000);
  };

  // VietQR API URL (Mock)
  const qrUrl = `https://img.vietqr.io/image/vcb-0123456789-compact2.png?amount=${product.price}&addInfo=Thanh toan ${product.id}&accountName=NGUYEN VAN A`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <div className={`w-3 h-3 rounded-full ${step === 'info' ? 'bg-indigo-600' : 'bg-slate-200'}`} />
          <div className={`w-3 h-3 rounded-full ${step === 'payment' ? 'bg-indigo-600' : 'bg-slate-200'}`} />
          <div className={`w-3 h-3 rounded-full ${step === 'success' ? 'bg-indigo-600' : 'bg-slate-200'}`} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 'info' && (
          <motion.div 
            key="info"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Thông tin đơn hàng</h2>
            <div className="flex gap-6 mb-10 p-6 bg-slate-50 rounded-2xl">
              <img src={product.image} alt="" className="w-24 h-24 rounded-xl object-cover" />
              <div>
                <h3 className="font-bold text-xl text-slate-900">{product.name}</h3>
                <p className="text-slate-500">{product.category}</p>
                <p className="text-indigo-600 font-bold text-lg mt-2">{product.price.toLocaleString('vi-VN')}đ</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email nhận file (Bắt buộc)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-12 py-4 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">Chúng tôi sẽ gửi link tải file .zip và hóa đơn vào email này.</p>
              </div>

              <button 
                onClick={handlePayment}
                className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
              >
                Tiếp tục thanh toán
              </button>
            </div>
          </motion.div>
        )}

        {step === 'payment' && (
          <motion.div 
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quét mã VietQR</h2>
            <p className="text-slate-500 mb-8">Hệ thống sẽ tự động xác nhận sau khi nhận được tiền.</p>

            <div className="max-w-xs mx-auto bg-slate-50 p-6 rounded-3xl border-2 border-indigo-100 mb-8">
              <img src={qrUrl} alt="VietQR" className="w-full aspect-square object-contain" />
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Số tiền cần chuyển</p>
                <p className="text-2xl font-bold text-indigo-600">{product.price.toLocaleString('vi-VN')}đ</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              {isProcessing ? (
                <div className="flex items-center gap-3 text-indigo-600 font-bold">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Đang kiểm tra giao dịch...
                </div>
              ) : (
                <button 
                  onClick={simulatePaymentSuccess}
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                >
                  Tôi đã chuyển khoản xong
                </button>
              )}
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Thanh toán an toàn qua cổng VietQR
              </p>
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center"
          >
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thanh toán thành công!</h2>
            <p className="text-slate-500 mb-10 max-w-md mx-auto">
              Cảm ơn bạn đã tin tưởng Mở là chơi. Link tải file đã được gửi đến <strong>{email}</strong>. Bạn cũng có thể tải trực tiếp bên dưới.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                <Download className="w-5 h-5" />
                Tải file .zip ngay (2.4MB)
              </button>
              <button 
                onClick={() => navigate('/')}
                className="bg-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
              >
                Về trang chủ
              </button>
            </div>
            
            <p className="text-xs text-slate-400 mt-8">Link tải có hiệu lực trong 24h. Vui lòng không chia sẻ link này.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
