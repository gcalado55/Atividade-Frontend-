import { useCart } from '../contexts/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} width={50} />
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart