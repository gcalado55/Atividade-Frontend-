import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import ProductDetail from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
