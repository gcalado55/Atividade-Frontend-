import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
