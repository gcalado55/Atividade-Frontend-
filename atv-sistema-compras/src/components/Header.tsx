import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export function Header() {
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  return (
    <header className="bg-[#2a3990] shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 text-white text-2xl font-extrabold tracking-wide">
        <span className="bg-white rounded-full px-2 py-1 text-blue-600 font-bold shadow">VShop</span>
      </Link>
      <nav className="flex gap-8 items-center">
        <Link to="/" className="text-white text-lg font-semibold hover:underline focus:underline transition">Home</Link>
        <Link to="/cart" className="relative text-white text-lg font-semibold hover:underline focus:underline flex items-center transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" />
          </svg>
          Cart
          {cartCount > 0 && (
            <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold absolute -top-2 -right-4 shadow-lg border-2 border-white">{cartCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}
