import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

export function Cart() {
  const { cartItems, removeOneFromCart, clearCart } = useCart();
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    clearCart();
    setPurchased(true);
  };

  const groupedItems = cartItems.reduce((acc: Record<number, { id: number; name: string; price: number; quantity: number }>, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveOne = (itemId: number) => {
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      if (groupedItems[itemId].quantity === 1) {
        removeOneFromCart(itemId);
      } else {
        removeOneFromCart(itemId);
        for (let i = 1; i < groupedItems[itemId].quantity - 1; i++) {
        }
      }
    }
  };

  if (purchased) {
    return <div className="p-4 text-green-600">Purchase completed! Thank you for your order.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {Object.values(groupedItems).map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name} x{item.quantity} - ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveOne(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
          <button
            onClick={handlePurchase}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
          >
            Finalize Purchase
          </button>
        </div>
      )}
    </div>
  );
}
