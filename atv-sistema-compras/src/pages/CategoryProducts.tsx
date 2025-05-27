import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { generateProductsForCategory } from "../mock/products";

const CategoryProducts = () => {
  const { category } = useParams<{ category: string }>();
  const { darkMode } = useContext(DarkModeContext);

  if (!category) {
    return <div>Nenhuma categoria especificada</div>;
  }

  // Add category name normalization
  const getNormalizedCategory = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      smartwatches: "smartwatch",
    };

    return categoryMap[category.toLowerCase()] || category.toLowerCase();
  };

  const normalizedCategory = getNormalizedCategory(category);
  const products = generateProductsForCategory(normalizedCategory);

  return (
    <div className="bg-background min-h-screen text-primary p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 capitalize">{category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <Link key={product.id} to={`/product/${category}/${product.id}`}>
              <div
                className={`rounded-2xl shadow-lg/20 flex flex-col items-center p-6 transition-transform duration-200 ease-in-out hover:scale-105 
                  ${
                    darkMode
                      ? "text-white border border-gray-600"
                      : "text-primary border border-gray-400"
                  }`}
              >
                <img
                  src={product.categoryImage || product.image}
                  alt={product.name}
                  className="w-full h-60 object-contain mb-4"
                />
                <h2
                  className={`text-2xl font-bold mb-2 text-center ${
                    darkMode ? "text-white" : "text-primary"
                  }`}
                >
                  {product.name}
                </h2>
                <p
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-primary"
                  }`}
                >
                  $ {product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;