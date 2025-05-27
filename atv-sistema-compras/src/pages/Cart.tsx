import React, { useState, useContext } from "react";
import { useCart } from "../contexts/CartContext";
import { FiPlus, FiMinus } from "react-icons/fi";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeOneFromCart, clearCart, addToCart, removeAllFromCart } = useCart();
  const { darkMode } = useContext(DarkModeContext);
  const [purchased, setPurchased] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = () => {
    clearCart();
    setPurchased(true);
  };

  const handleIncrement = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Group items by category
  const groupedItems = cart.reduce((acc, item) => {
    const category = item.category || 'outros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const handleFinalizePurchase = () => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      // Handle case where user is not logged in
      navigate('/login');
      return;
    }

    try {
      // Create order key specific to this user
      const orderKey = `orders_${userEmail}`;
      
      // Get existing orders for this specific user
      const userOrders = JSON.parse(localStorage.getItem(orderKey) || '[]');
      
      // Create new order
      const newOrder = {
        id: Date.now(), // Add unique ID for each order
        date: new Date().toISOString(),
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        total: total
      };
      
      // Add new order to user's orders
      const updatedOrders = [...userOrders, newOrder];
      
      // Save orders with user-specific key
      localStorage.setItem(orderKey, JSON.stringify(updatedOrders));
      
      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  if (purchased) {
    return (
      <div className="min-h-screen p-8 bg-background text-primary">
        <div className="max-w-6xl mx-auto">
          <div className="p-4 text-green-600 text-xl">
            Compra finalizada! Obrigado pelo seu pedido.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-background text-primary">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 capitalize">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-lg shadow-lg/20 p-4 flex 
                        ${darkMode ? "text-white border border-gray-800" : "text-primary border border-gray-400"}`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-contain rounded mr-4"
                      />
                      <div className="flex flex-col justify-between flex-grow">
                        <div>
                          <h2 className="text-xl font-semibold">{item.name}</h2>
                          <p className="text-white">
                            Preço: $ {item.price}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => removeOneFromCart(item.id)}
                              className={`px-2 py-1 rounded hover:bg-gray-300 transition-colors ${
                                darkMode ? 'text-white' : 'text-gray-700'
                              }`}
                            >
                              <FiMinus />
                            </button>
                            <span className={`${darkMode ? 'text-white' : 'text-gray-600'}`}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className={`px-2 py-1 rounded hover:bg-gray-300 transition-colors ${
                                darkMode ? 'text-white' : 'text-gray-700'
                              }`}
                            >
                              <FiPlus />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <button
                            onClick={() => removeAllFromCart(item.id)} // Changed from removeOneFromCart to removeAllFromCart
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                          >
                            Remover
                          </button>
                          <p className="text-lg font-bold">
                            $ {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8">
              <p className="text-xl font-bold">Total:</p>
              <p className="text-xl font-bold">R$ {total.toFixed(2)}</p>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={handleFinalizePurchase}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
