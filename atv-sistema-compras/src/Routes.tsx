import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
// ... import other pages

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/product/:category/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      {/* ...other routes */}
    </Routes>
  );
};

export default AppRoutes;
``` 

With these changes, navigating to “/cart” will show the products that have been added to the cart.// filepath: d:\GitHub\Visagio\atividade-frontend-rocketlab\atv-sistema-compras\src\Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
// ... import other pages

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/product/:category/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      {/* ...other routes */}
    </Routes>
  );
};

export default AppRoutes;
``` 

With these changes, navigating to “/cart” will show the products that have been added to the cart.