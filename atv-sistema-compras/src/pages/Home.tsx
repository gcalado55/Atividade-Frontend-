import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../mock/products';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { DarkModeContext } from "../contexts/DarkModeContext";

const promotions = [
  {
    title: "Mega Sales Week",
    subtitle: "Smart Watch",
    highlight: "Only",
    price: "$ 199.00",
    image: "/SmartWatch.png",
    bg: "from-[#2a3990] to-[#6c3cc6]",
  },
  {
    title: "Gamer Week",
    subtitle: "Monitors",
    highlight: "Only",
    price: "$ 299.00",
    image: "/Monitor.png",
    bg: "from-[#1e293b] to-[#64748b]",
  },
  {
    title: "Tech Sale",
    subtitle: "Televisions",
    highlight: "Only",
    price: "$ 399.00",
    image: "/Television.png",
    bg: "to-[#0f766e] from-[#14b8a6]",
  },
];

export function Home() {
  const { darkMode } = useContext(DarkModeContext);
  const [current, setCurrent] = useState(0);

  const handleDotClick = (idx: number) => setCurrent(idx);
  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? promotions.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === promotions.length - 1 ? 0 : prev + 1));

  const promo = promotions[current];

  const highlightColors = ["#875adb", "#6a7fa3", "#0f766e"];

  return (
    <div className="min-h-screen bg-background">
      <div className="mb-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <div
            className={`w-full max-w-5xl bg-gradient-to-r ${promo.bg} rounded-2xl shadow-lg p-0 flex items-center justify-center relative overflow-hidden min-h-[315px] transform scale-105 ${
              !darkMode ? "border border-gray-400" : ""
            }`}
          >
            {/* Left content section */}
            <div className="flex flex-col items-center justify-center text-center w-1/2 min-w-[336px]">
              <h2 className="text-4xl font-bold text-white mb-2">{promo.title}</h2>
              <div className="mt-2 mb-2">
                <span className="block text-white text-2xl font-bold">{promo.subtitle}</span>
                <span className="block text-lg" style={{ color: highlightColors[current] }}>
                  {promo.highlight}
                </span>
                <span className="block text-white text-5xl font-extrabold">{promo.price}</span>
              </div>
            </div>
            
            {/* Image section */}
            <div className="flex items-center justify-center w-1/2 min-w-[336px]">
              <img
                src={promo.image}
                alt={promo.subtitle}
                className="w-[19rem] drop-shadow-2xl"
              />
            </div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 justify-center">
              {promotions.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition ${i === current ? 'bg-white' : 'bg-white/40'} inline-block`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to promotion ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10"
              onClick={handlePrev}
              aria-label="Previous promotion"
            >
              <IoIosArrowBack />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10"
              onClick={handleNext}
              aria-label="Next promotion"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      
      {/* Category heading */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
          Shop by product category
        </h2>
      </div>

      {/* Categories grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/category/${product.category}`}>
              <div
                className={`
                  rounded-2xl 
                  shadow-lg/20
                  flex 
                  flex-col 
                  items-center 
                  p-6 
                  transition-transform 
                  duration-200 
                  ease-in-out 
                  hover:scale-105
                  ${darkMode ? "text-white border border-gray-600" : "text-primary border border-gray-400"}
                `}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-contain mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-center">
                  {product.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}