import { useParams } from "react-router-dom";
import { products } from "../data/products";

export function ProductDetails() {
  const { id } = useParams<{ id: string}>();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p className="p-4text-red-500">Product not found</p>;
  }
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-x1 text-green-700 mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-6 text-gray-700">{product.description}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Add to Cart</button>
    </div>
  );
  }