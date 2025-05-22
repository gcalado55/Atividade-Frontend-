import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <main className='p-8'></main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id/:name" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
