import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../mock/products';

export function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}
