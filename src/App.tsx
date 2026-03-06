import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import Checkout from './views/Checkout';
import Guide from './views/Guide';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={0} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}
