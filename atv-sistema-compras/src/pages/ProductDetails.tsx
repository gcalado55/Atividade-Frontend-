import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../mock/products'
import { useCart } from '../contexts/CartContext'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const product = products.find(p => p.id === Number(id))

  if (!product) return <div>Product not found</div>

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div>
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Products</Link>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
      {added && <div className="text-green-600 mt-2">Added to cart!</div>}
    </div>
  )
}

export default ProductDetail
