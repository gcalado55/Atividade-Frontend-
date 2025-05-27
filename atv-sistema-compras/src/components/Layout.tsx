import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { generateProductsForCategory } from "../mock/products";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, toggleDarkMode, menuOpen, setMenuOpen } = useContext(DarkModeContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showOrders, setShowOrders] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail') || '';
  const userName = userEmail.split('@')[0];
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add click outside handler for search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowSearch(false);
        setSearchTerm("");
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add this useEffect near your other useEffect hooks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-menu-container')) {
        setShowOrders(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setShowUserMenu(false);
    navigate('/');
  };

  const getAllProducts = () => {
    const categories = [
      "headphones",
      "monitors", 
      "smartwatches",
      "gaming-chairs",
      "keyboards",
      "televisions",
      "notebooks",
      "smartphones"
    ];

    const allProducts = categories.flatMap(category => {
      const normalizedCategory = category === "smartwatches" ? "smartwatch" : category;
      return generateProductsForCategory(normalizedCategory).map(product => ({
        ...product,
        category: category
      }));
    });

    return allProducts;
  };

  // Update the search input and handling logic
  const handleSearch = (term: string) => {
    setSearchTerm(term); // Update search term state immediately
    
    if (term.length > 0) {
      const allProducts = getAllProducts();
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  // Adicione esta função no início do componente Layout
  const getUserOrders = () => {
    try {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) return [];
      
      // Get orders using user-specific key
      const orderKey = `orders_${userEmail}`;
      const userOrders = JSON.parse(localStorage.getItem(orderKey) || '[]');
      return userOrders;
    } catch (error) {
      console.error('Error getting orders:', error);
      return [];
    }
  };

  const handleFinalizePurchase = () => {
    const currentOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    const newOrder = {
      date: new Date().toISOString(),
      items: [], // cartItems should be defined based on your cart state
      total: 0 // total should be calculated based on your cart items
    };
    
    localStorage.setItem('userOrders', JSON.stringify([...currentOrders, newOrder]));
    // Clear cart and show success message
    // clearCart(); // Uncomment if clearCart function is available
    navigate('/');
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "bg-gray-900 text-white" : "bg-white text-primary"}`}>
      <header
        className="relative flex items-center justify-center h-16 p-4 shadow-md"
        style={{ backgroundColor: "#2a3990" }}
      >
        <div className="absolute left-4 flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white font-bold focus:outline-none text-2xl transition-transform duration-200 ease-in-out hover:scale-105"
            aria-label="Open menu"
          >
            <IoMenu />
          </button>
          
          <div className="search-container relative flex items-center">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white font-bold focus:outline-none text-xl transition-transform duration-200 ease-in-out hover:scale-105 ml-2"
            >
              <FiSearch />
            </button>
            
            {showSearch && (
              <div className="absolute left-full ml-2 z-50 animate-slide-right">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={`w-64 px-3 py-1 rounded-md focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Search products..."
                />
                
                {searchResults.length > 0 && (
                  <div className={`absolute w-64 mt-1 rounded-md shadow-lg py-1 max-h-96 overflow-auto ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    {searchResults.map((product) => (
                      <Link
                        key={`${product.category}-${product.id}`}
                        to={`/product/${product.category}/${product.id}`}
                        onClick={() => {
                          setShowSearch(false);
                          setSearchTerm("");
                          setSearchResults([]);
                        }}
                        className={`block px-4 py-2 flex items-center gap-2 ${
                          darkMode 
                            ? 'text-white hover:bg-gray-700' 
                            : 'text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-8 h-8 object-contain"
                        />
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                            $ {product.price.toFixed(2)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Link to="/" className="flex items-center">
          <div className="text-5xl font-bold leading-none" style={{ fontFamily: "Impact, sans-serif" }}>
            <span className="text-black mr-[5px]">K</span>
            <span className="text-white mr-[5px]">L</span>
            <span className="text-white">D</span>
          </div>
        </Link>
        <div className="absolute right-4 flex items-center gap-4">
          {isLoggedIn && (
            <div className="relative user-menu-container mt-[2px]">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="text-white text-2xl focus:outline-none transition-transform duration-200 ease-in-out hover:scale-105"
              >
                {darkMode ? <IoPersonOutline /> : <IoPerson />}
              </button>
              
              {showUserMenu && (
                <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50
                  ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className={`px-4 py-2 text-sm ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                    {userName}
                  </div>
                  <hr className={darkMode ? 'border-gray-700' : 'border-gray-200'} />
                  <button
                    onClick={() => {
                      setShowOrders(true);
                      setShowUserMenu(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm 
                      ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    My Orders
                  </button>
                  <button
                    onClick={handleSignOut}
                    className={`block w-full text-left px-4 py-2 text-sm 
                      ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Sign Out
                  </button>
                </div>
              )}

              {/* Orders Modal moved here */}
              {showOrders && (
                <div className={`absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 z-50
                  ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="flex justify-between items-center px-4 py-2">
                    <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Meus Pedidos
                    </h2>
                    <button 
                      onClick={() => setShowOrders(false)}
                      className={`text-2xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      ×
                    </button>
                  </div>
                  
                  <hr className={darkMode ? 'border-gray-700' : 'border-gray-200'} />
                  
                  <div className="max-h-[400px] overflow-y-auto px-4 py-2">
                    {getUserOrders().map((order: any, index: number) => (
                      <div 
                        key={index}
                        className={`mb-3 p-3 rounded-lg ${
                          darkMode ? 'bg-gray-700' : 'bg-gray-50'
                        }`}
                      >
                        <div className={`text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-200' : 'text-gray-900'
                        }`}>
                          Pedido #{index + 1} - {new Date(order.date).toLocaleDateString()}
                        </div>
                        {order.items.map((item: any, itemIndex: number) => (
                          <div 
                            key={itemIndex}
                            className="flex justify-between items-center mb-2 text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-8 h-8 object-contain"
                              />
                              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                {item.name} x{item.quantity}
                              </span>
                            </div>
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              $ {(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                        <div className={`text-right text-sm font-medium mt-2 pt-2 border-t ${
                          darkMode ? 'border-gray-600 text-white' : 'border-gray-200 text-gray-900'
                        }`}>
                          Total: $ {order.total.toFixed(2)}
                        </div>
                      </div>
                    ))}
                    {getUserOrders().length === 0 && (
                      <div className={`text-center py-3 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        You don't have any orders yet
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
          
          <button
            onClick={toggleDarkMode}
            className="text-white font-bold focus:outline-none text-2xl transition-transform duration-200 ease-in-out hover:scale-105"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
          </button>
        </div>
      </header>
      <main className="p-8 pt-24">{children}</main>
      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* Slide Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm flex transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className={`relative flex w-full flex-col ${darkMode ? "bg-gray-800" : "bg-white"} rounded-tr-2xl rounded-br-2xl shadow-lg h-full`}>
          <div className="flex items-start justify-between p-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            <h2 className={`text-lg font-medium ${darkMode ? "text-white" : "text-[#2a3990]"}`}>Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className={`p-2 focus:outline-none ${darkMode ? "text-white" : "text-current"}`}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-4 px-4 py-2">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={`text-xl transition-transform duration-200 hover:scale-[1.03] ${darkMode ? "text-white" : "text-[#2a3990]"}`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className={`text-xl transition-transform duration-200 hover:scale-[1.03] ${darkMode ? "text-white" : "text-[#2a3990]"}`}
            >
              Signup
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className={`text-xl transition-transform duration-200 hover:scale-[1.03] ${darkMode ? "text-white" : "text-[#2a3990]"}`}
            >
              Shopping Cart
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Layout;
