import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id/:name" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div className="text-3xl font-bold text-red-600 text-center mt-10">
        Tailwind funcionando! 🚀
    </div>
    </BrowserRouter>
  );
}
