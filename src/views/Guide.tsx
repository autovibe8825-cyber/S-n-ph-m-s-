import React from 'react';
import { BookOpen, Monitor, Download, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Guide() {
  const steps = [
    {
      title: 'Tải xuống file',
      description: 'Sau khi thanh toán thành công, bạn sẽ nhận được link tải file .zip qua email hoặc trực tiếp trên web.',
      icon: Download
    },
    {
      title: 'Giải nén file',
      description: 'Sử dụng WinRAR hoặc 7-Zip để giải nén thư mục sản phẩm bạn vừa tải về.',
      icon: BookOpen
    },
    {
      title: 'Mở trên trình duyệt',
      description: 'Tìm file có tên "index.html", chuột phải và chọn "Open with" (Mở bằng) Chrome, Edge hoặc Safari.',
      icon: Monitor
    },
    {
      title: 'Nhúng vào website',
      description: 'Nếu bạn muốn đưa lên web của mình, chỉ cần copy toàn bộ code trong file index.html hoặc nhúng qua thẻ <iframe>.',
      icon: ExternalLink
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Hướng dẫn sử dụng</h1>
        <p className="text-slate-500">Chỉ với vài bước đơn giản để bắt đầu sử dụng sản phẩm của chúng tôi.</p>
      </motion.div>

      <div className="grid gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
              <step.icon className="w-7 h-7 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{index + 1}. {step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-indigo-600 rounded-3xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Cần hỗ trợ thêm?</h3>
        <p className="mb-6 opacity-90">Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7.</p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
          Liên hệ kỹ thuật ngay
        </button>
      </div>
    </div>
  );
}
