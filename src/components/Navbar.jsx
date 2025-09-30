// import React, { useState, useEffect } from "react";
// import { Menu, X, Beaker, Palette, ShoppingCart, LogOut, User } from "lucide-react";

// const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About" },
//   { href: "#contact", label: "Contact" },
// ];

// const Navbar = ({ isAuthenticated, user, onLogout }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartDropdown, setShowCartDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Function to add item to cart
//   const addToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       // If item already exists, increase quantity
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       // If new item, add to cart
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }

//     setCartCount(cartCount + 1);
//   };

//   // Function to remove item from cart
//   const removeFromCart = (itemId) => {
//     const item = cartItems.find((cartItem) => cartItem.id === itemId);
//     if (item) {
//       if (item.quantity > 1) {
//         // Decrease quantity
//         setCartItems(
//           cartItems.map((cartItem) =>
//             cartItem.id === itemId
//               ? { ...cartItem, quantity: cartItem.quantity - 1 }
//               : cartItem
//           )
//         );
//         setCartCount(cartCount - 1);
//       } else {
//         // Remove item completely
//         setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
//         setCartCount(cartCount - 1);
//       }
//     }
//   };

//   // Function to clear cart
//   const clearCart = () => {
//     setCartItems([]);
//     setCartCount(0);
//   };

//   // Calculate total price
//   const getTotalPrice = () => {
//     return cartItems
//       .reduce((total, item) => {
//         const price = parseFloat(item.price.replace("$", ""));
//         return total + price * item.quantity;
//       }, 0)
//       .toFixed(2);
//   };

//   const handleLinkClick = (href) => {
//     setIsOpen(false);
//     setShowCartDropdown(false);
//     setShowUserDropdown(false);
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleLogout = () => {
//     setShowUserDropdown(false);
//     setIsOpen(false);
//     if (onLogout) {
//       onLogout();
//     }
//   };

//   // Sample function to demonstrate adding items (you can call this from your product components)
//   const handleTestAddToCart = () => {
//     const sampleItem = {
//       id: `item-${Date.now()}`,
//       name: `Sample Chemical ${cartCount + 1}`,
//       price: "$25.00",
//       image:
//         "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=100",
//     };
//     addToCart(sampleItem);
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
//             : "bg-gray-900"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo + Title */}
//             <div className="flex items-center space-x-3">
//               <Beaker className="h-8 w-8 text-white" />
//               <Palette className="h-6 w-6 text-white" />
//               <div className="flex flex-col leading-tight">
//                 <span className="text-xl font-bold text-white">C - Call</span>
//                 <span className="text-xs text-white font-medium">
//                   Chemical & TILES
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Links + CTA + Cart */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.href}
//                   onClick={() => handleLinkClick(link.href)}
//                   className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
//                 >
//                   {link.label}
//                 </button>
//               ))}
//               <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200">
//                 Get Quote
//               </button>

//               {/* Test Add to Cart Button */}
//               <button
//                 onClick={handleTestAddToCart}
//                 className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors duration-200"
//               >
//                 Add Test Item
//               </button>

//               {/* Cart Button with Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     setShowCartDropdown(!showCartDropdown);
//                     setShowUserDropdown(false);
//                   }}
//                   className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
//                   aria-label="Cart"
//                 >
//                   <ShoppingCart className="h-6 w-6" />
//                   {cartCount > 0 && (
//                     <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full animate-pulse">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>

//                 {/* Cart Dropdown */}
//                 {showCartDropdown && (
//                   <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
//                     <div className="p-4">
//                       <div className="flex items-center justify-between mb-4">
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                           Shopping Cart
//                         </h3>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           {cartCount} items
//                         </span>
//                       </div>

//                       {cartItems.length === 0 ? (
//                         <div className="text-center py-8">
//                           <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                           <p className="text-gray-500 dark:text-gray-400">
//                             Your cart is empty
//                           </p>
//                         </div>
//                       ) : (
//                         <>
//                           <div className="space-y-3 max-h-60 overflow-y-auto">
//                             {cartItems.map((item) => (
//                               <div
//                                 key={item.id}
//                                 className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                               >
//                                 <img
//                                   src={item.image}
//                                   alt={item.name}
//                                   className="w-12 h-12 object-cover rounded"
//                                 />
//                                 <div className="flex-1 min-w-0">
//                                   <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
//                                     {item.name}
//                                   </p>
//                                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                                     {item.price} × {item.quantity}
//                                   </p>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                   <button
//                                     onClick={() => removeFromCart(item.id)}
//                                     className="text-red-500 hover:text-red-700 text-sm"
//                                   >
//                                     <X className="h-4 w-4" />
//                                   </button>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>

//                           <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
//                             <div className="flex justify-between items-center mb-4">
//                               <span className="text-base font-semibold text-gray-900 dark:text-white">
//                                 Total: ${getTotalPrice()}
//                               </span>
//                               <button
//                                 onClick={clearCart}
//                                 className="text-sm text-red-500 hover:text-red-700"
//                               >
//                                 Clear Cart
//                               </button>
//                             </div>
//                             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
//                               Checkout
//                             </button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* User Authentication Section */}
//               {isAuthenticated ? (
//                 <div className="relative">
//                   <button
//                     onClick={() => {
//                       setShowUserDropdown(!showUserDropdown);
//                       setShowCartDropdown(false);
//                     }}
//                     className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
//                   >
//                     <User className="h-5 w-5" />
//                     <span className="text-sm font-medium">
//                       {user?.name || "User"}
//                     </span>
//                   </button>

//                    {showUserDropdown && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
//                       <div className="p-2">
//                         <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
//                           <p className="text-sm font-medium text-gray-900 dark:text-white">
//                             {user?.name}
//                           </p>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">
//                             {user?.email}
//                           </p>
//                         </div>
//                         <button
//                           onClick={handleLogout}
//                           className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors duration-200"
//                         >
//                           <LogOut className="h-4 w-4" />
//                           <span>Logout</span>
//                         </button>
//                       </div>
//                     </div>
//                   )}  
//                 </div>
//               ) : (
//                 <div className="flex items-center space-x-4">
//                   <a
//                     href="/login"
//                     className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
//                   >
//                     Login
//                   </a>
//                   <a
//                     href="/register"
//                     className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
//                   >
//                     Register
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu + Cart */}
//             <div className="md:hidden flex items-center space-x-4">
//               {/* Mobile Cart */}
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     setShowCartDropdown(!showCartDropdown);
//                     setShowUserDropdown(false);
//                   }}
//                   className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
//                   aria-label="Cart"
//                 >
//                   <ShoppingCart className="h-6 w-6" />
//                   {cartCount > 0 && (
//                     <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full animate-pulse">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>
//               </div>

//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-gray-300 hover:text-white transition-colors duration-200"
//                 aria-label="Toggle menu"
//               >
//                 {isOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`md:hidden transition-all duration-300 ease-in-out ${
//               isOpen
//                 ? "max-h-96 opacity-100"
//                 : "max-h-0 opacity-0 overflow-hidden"
//             }`}
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.href}
//                   onClick={() => handleLinkClick(link.href)}
//                   className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
//                 >
//                   {link.label}
//                 </button>
//               ))}
//               <button className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200">
//                 Get Quote
//               </button>
//               <button
//                 onClick={handleTestAddToCart}
//                 className="w-full mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
//               >
//                 Add Test Item
//               </button>

//               {/* Mobile Authentication */}
//               {isAuthenticated ? (
//                 <div className="border-t border-gray-700 pt-2 mt-2">
//                   <div className="px-3 py-2">
//                     <p className="text-sm font-medium text-white">
//                       {user?.name}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       {user?.email}
//                     </p>
//                   </div>
//                   <button
//                     onClick={handleLogout}
//                     className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md transition-colors duration-200"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               ) : (
//                 <div className="border-t border-gray-700 pt-2 mt-2 space-y-2">
//                   <a
//                     href="/login"
//                     className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
//                   >
//                     Login
//                   </a>
//                   <a
//                     href="/register"
//                     className="block w-full text-center px-3 py-2 text-base font-medium bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-200"
//                   >
//                     Register
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Cart Dropdown */}
//       {showCartDropdown && (
//         <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg">
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                 Shopping Cart
//               </h3>
//               <span className="text-sm text-gray-500 dark:text-gray-400">
//                 {cartCount} items
//               </span>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="text-center py-8">
//                 <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Your cart is empty
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="space-y-3 max-h-60 overflow-y-auto">
//                   {cartItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
//                           {item.name}
//                         </p>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {item.price} × {item.quantity}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-red-500 hover:text-red-700 text-sm"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-base font-semibold text-gray-900 dark:text-white">
//                       Total: ${getTotalPrice()}
//                     </span>
//                     <button
//                       onClick={clearCart}
//                       className="text-sm text-red-500 hover:text-red-700"
//                     >
//                       Clear Cart
//                     </button>
//                   </div>
//                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
//                     Checkout
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Menu, X, Beaker, Palette, LogOut, User } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setShowUserDropdown(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    setShowUserDropdown(false);
    setIsOpen(false);
    
    // Clear user data from localStorage/sessionStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userData');
    
    // Clear any app-specific state
    if (typeof onLogout === 'function') {
      onLogout();
    }
    
    // Redirect to login page or home page
    window.location.href = '/login'; // or '/'
    
    // Optional: Show logout confirmation
    console.log('User logged out successfully');
  };

  const handleLogoutConfirm = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      handleLogout();
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <Beaker className="h-8 w-8 text-white" />
              <Palette className="h-6 w-6 text-white" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white">C - Call</span>
                <span className="text-xs text-white font-medium">
                  Chemical & TILES
                </span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}

              {/* User Authentication Section */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowUserDropdown(!showUserDropdown);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {user?.name || "User"}
                    </span>
                  </button>

                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                      <div className="p-2">
                        <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {user?.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {user?.email}
                          </p>
                        </div>
                        <button
                          onClick={handleLogoutConfirm}
                          className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors duration-200"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Logout button when not authenticated
                <button
                  onClick={handleLogoutConfirm}
                  className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-200 border border-red-600 hover:border-red-700 rounded-lg"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Authentication */}
              {isAuthenticated ? (
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {user?.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogoutConfirm}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                // Mobile Logout button when not authenticated
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <button
                    onClick={handleLogoutConfirm}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md transition-colors duration-200 border border-red-400 hover:border-red-300 rounded-lg"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;