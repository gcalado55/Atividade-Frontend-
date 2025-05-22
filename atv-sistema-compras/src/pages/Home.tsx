import { Link } from 'react-router-dom';

export function Home() {
    const products = [
      {id: 1, name: 'Product 1'},
      {id: 2, name: 'Product 2'},
    ];

    return (
      <div>
        {products.map(products =>(
          <div key={products.id}>
            <h2>{products.name}</h2>
            <Link to={`/product/${products.id}/${products.name}`}>View Details</Link>
          </div>
        ))}
      </div>
    )
}
