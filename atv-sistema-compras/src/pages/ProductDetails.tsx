import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { generateProductsForCategory } from "../mock/products";
import { useCart } from "../contexts/CartContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { FiTruck, FiPackage, FiShield, FiAward } from "react-icons/fi";

const ProductDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const { darkMode } = useContext(DarkModeContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Add category normalization
  const getNormalizedCategory = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      smartwatches: "smartwatch",
    };

    return categoryMap[category?.toLowerCase()] || category?.toLowerCase();
  };

  // Use normalized category for product lookup
  const normalizedCategory = getNormalizedCategory(category);
  const products = generateProductsForCategory(normalizedCategory);
  const product = products?.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleAddToCart = () => {
    const uniqueId = `${category}-${id}`;

    addToCart({
      id: uniqueId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      category: category,
    });

    // Show notification and hide it after 2 seconds
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNow = () => {
    const uniqueId = `${category}-${id}`;
    
    // Add to cart first
    addToCart({
      id: uniqueId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      category: category,
    });

    // Then navigate to cart
    navigate('/cart');
  };

  const features = [
    { icon: <FiAward />, title: "Warranty", description: "12-month warranty" },
    { icon: <FiTruck />, title: "Delivery", description: "Free shipping" },
    { icon: <FiPackage />, title: "Return", description: "30-day return" },
    { icon: <FiShield />, title: "Security", description: "100% secure purchase" }
  ];

  return (
    <div className="bg-background min-h-screen text-primary p-8">
      <div className="max-w-6xl mx-auto">
        <div className={`rounded-2xl shadow-lg/20 p-6 
          ${darkMode ? "text-white border border-gray-800" : "text-primary border border-gray-200"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Images */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} view ${selectedImage + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right column - Info and buttons */}
            <div className="space-y-6">
              {/* Product info */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {product.name}
                  </h1>
                  <div className={`text-[25px] text-nowrap font-bold mt-[5px] ${darkMode ? "text-white" : "text-gray-900"}`}>
                    $ {product.price.toFixed(2)}
                  </div>
                </div>

                <div className={`text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {product.description}
                </div>

                <div className="border-t border-b py-4">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Main Features
                  </h3>
                  <ul className="space-y-2">
                    <li className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      • Advanced Technology
                    </li>
                    <li className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      • Modern Design
                    </li>
                    <li className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      • High Durability
                    </li>
                  </ul>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-50"
                    }`}>
                      <div className={`text-xl ${darkMode ? "text-white" : "text-gray-700"}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {feature.title}
                        </h4>
                        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
                      border border-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className={`py-3 px-6 rounded-lg font-semibold border 
                      ${darkMode 
                        ? "border-gray-600 text-white hover:bg-gray-800" 
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      } transition-colors`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showNotification && (
        <div className="fixed bottom-8 right-4 md:right-12 lg:right-16 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out flex items-center gap-2">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
          <span>Item added to cart!</span>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;