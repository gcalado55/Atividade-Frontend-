import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-2xl overflow-hidden  shadow-md hover:shadowlg transition-all">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-blue-600 font-bold mt-2">${price.toFixed(2)}</p>
        <Link to={`/product/${id}`} className="inline-block mt-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">View Details</Link>
      </div>
    </div>
  );
}