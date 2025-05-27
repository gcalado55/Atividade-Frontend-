import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { CartProvider } from "./contexts/CartContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:category/:id" element={<ProductDetail />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;
