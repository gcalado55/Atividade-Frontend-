import { useParams } from 'react-router-dom'
import { products } from '../mock/products'
import { useCart } from '../contexts/CartContext'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()

  const product = products.find(p => p.id === Number(id))

  if (!product) return <div>Product not found</div>

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetail
