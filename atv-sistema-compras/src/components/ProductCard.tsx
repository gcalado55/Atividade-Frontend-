import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Link to={`/product/${id}`} className="block">
      <div
        className={`bg-surface rounded-2xl shadow-[8px_8px_16px_#b0a6a9,-8px_-8px_16px_#EFF1F3] transition-transform duration-300 ease-in-out cursor-pointer w-64 h-64 flex flex-col justify-between hover:[transform:scale(1.008)] ${
          darkMode ? "border-2 border-red-600" : ""
        }`}
      >
        <div className="p-2 flex flex-col items-center">
          <h2 className="font-semibold text-lg text-center mb-2 text-primary">
            {name}
          </h2>
          <img
            src={image}
            alt={name}
            className="w-50 h-50 object-contain mx-auto bg-background rounded-xl"
          />
        </div>
        <div className="text-lg font-bold text-primary">
          $ {price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
}