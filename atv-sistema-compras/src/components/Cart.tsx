import { useCart } from '../contexts/CartContext';
import type { Product } from '../types/Product';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc: number, item: Product) => acc + item.price, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: Product) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>R$ {item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remover
              </button>
            </div>
          ))}

          <div className="mt-6 text-right text-xl font-semibold">
            Total: R$ {total.toFixed(2)}
          </div>

          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
