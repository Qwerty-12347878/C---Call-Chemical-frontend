// import React, { useState, useEffect } from "react";
// import { Menu, X, Beaker, Palette, LogOut, User, ShoppingCart } from "lucide-react";
// import { useCart } from "../contexts/CartContext";

// const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About" },
//   { href: "#contact", label: "Contact" },
// ];

// const Navbar = ({ darkMode, toggleDarkMode, isAuthenticated, user, onLogout }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const [userInitials, setUserInitials] = useState("");
  
//   // Use cart context
//   const { getTotalItems, isCartOpen, setIsCartOpen } = useCart();

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Generate user initials when user data changes
//   useEffect(() => {
//     if (isAuthenticated && user?.name) {
//       const initials = generateInitials(user.name);
//       setUserInitials(initials);
//     } else {
//       setUserInitials("");
//     }
//   }, [isAuthenticated, user]);

//   const generateInitials = (name) => {
//     if (!name) return "U";
//     const nameParts = name.trim().split(" ");
//     if (nameParts.length === 1) {
//       return nameParts[0].substring(0, 2).toUpperCase();
//     } else {
//       const firstInitial = nameParts[0].charAt(0).toUpperCase();
//       const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
//       return firstInitial + lastInitial;
//     }
//   };

//   const handleLinkClick = (href) => {
//     setIsOpen(false);
//     setShowUserDropdown(false);
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleLogout = () => {
//     setShowUserDropdown(false);
//     setIsOpen(false);
//     if (typeof onLogout === "function") {
//       onLogout();
//     }
//   };

//   const handleLogoutConfirm = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       handleLogout();
//     }
//   };

//   const handleCartClick = () => {
//     setIsCartOpen(true);
//     setShowUserDropdown(false);
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
//           : "bg-gray-900"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo & Title */}
//           <div className="flex items-center space-x-3">
//             <Beaker className="h-8 w-8 text-white" />
//             <Palette className="h-6 w-6 text-white" />
//             <div className="flex flex-col leading-tight">
//               <span className="text-xl font-bold text-white">C - Call</span>
//               <span className="text-xs text-white font-medium">Chemical & TILES</span>
//             </div>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <button
//                 key={link.href}
//                 onClick={() => handleLinkClick(link.href)}
//                 className="text-gray-300 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-800/50"
//               >
//                 {link.label}
//               </button>
//             ))}

//             {/* Cart Button */}
//             <button
//               onClick={handleCartClick}
//               className="relative p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
//             >
//               <ShoppingCart className="w-6 h-6" />
//               {getTotalItems() > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {getTotalItems()}
//                 </span>
//               )}
//             </button>

//             {/* User Authentication Section */}
//             {isAuthenticated ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setShowUserDropdown(!showUserDropdown)}
//                   className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
//                 >
//                   {/* User Avatar with Initials */}
//                   <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium text-sm">
//                     {userInitials}
//                   </div>
//                   <span className="text-sm font-medium">{user?.name || "User"}</span>
//                 </button>

//                 {showUserDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
//                     <div className="p-2">
//                       <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
//                         <p className="text-sm font-medium text-gray-900 dark:text-white">
//                           {user?.name}
//                         </p>
//                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                           {user?.email}
//                         </p>
//                       </div>
//                       <button
//                         onClick={handleLogoutConfirm}
//                         className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors duration-200"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         <span>Logout</span>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               /* Login/Signup buttons when not authenticated */
//               <div className="flex items-center space-x-3">
//                 <button
//                   onClick={() => (window.location.href = "/login")}
//                   className="px-4 py-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 border border-blue-400 hover:border-blue-300 rounded-lg"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => (window.location.href = "/register")}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 rounded-lg"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden flex items-center space-x-4">
//             {/* Cart Button for Mobile */}
//             <button
//               onClick={handleCartClick}
//               className="relative p-2 text-gray-300 hover:text-white transition-colors"
//             >
//               <ShoppingCart className="w-6 h-6" />
//               {getTotalItems() > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {getTotalItems()}
//                 </span>
//               )}
//             </button>

//             {isAuthenticated && (
//               <div className="flex items-center space-x-2">
//                 <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium text-sm">
//                   {userInitials}
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white transition-colors duration-200"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
//           {navLinks.map((link) => (
//             <button
//               key={link.href}
//               onClick={() => handleLinkClick(link.href)}
//               className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
//             >
//               {link.label}
//             </button>
//           ))}

//           {/* Mobile Cart Button */}
//           <button
//             onClick={handleCartClick}
//             className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
//           >
//             <ShoppingCart className="h-5 w-5" />
//             <span>Cart ({getTotalItems()})</span>
//           </button>

//           {/* Mobile Authentication */}
//           {isAuthenticated ? (
//             <div className="border-t border-gray-700 pt-2 mt-2">
//               <div className="flex items-center space-x-3 px-3 py-2">
//                 <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-medium">
//                   {userInitials}
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-white">{user?.name}</p>
//                   <p className="text-xs text-gray-400">{user?.email}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogoutConfirm}
//                 className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md transition-colors duration-200"
//               >
//                 <LogOut className="h-4 w-4" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           ) : (
//             /* Mobile Login/Signup buttons when not authenticated */
//             <div className="border-t border-gray-700 pt-2 mt-2 space-y-2">
//               <button
//                 onClick={() => (window.location.href = "/login")}
//                 className="flex items-center justify-center w-full px-3 py-2 text-base font-medium text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-200 border border-blue-400 hover:border-blue-300"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => (window.location.href = "/register")}
//                 className="flex items-center justify-center w-full px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Menu, X, Beaker, Palette, LogOut, User, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ darkMode, toggleDarkMode, isAuthenticated, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [userInitials, setUserInitials] = useState("");
  
  // Use cart context
  const { getTotalItems, isCartOpen, setIsCartOpen } = useCart();

  // Check if user is admin
  const isAdmin = user?.role === 'admin' || user?.isAdmin;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Generate user initials when user data changes
  useEffect(() => {
    if (isAuthenticated && user?.name) {
      const initials = generateInitials(user.name);
      setUserInitials(initials);
    } else {
      setUserInitials("");
    }
  }, [isAuthenticated, user]);

  const generateInitials = (name) => {
    if (!name) return "U";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    } else {
      const firstInitial = nameParts[0].charAt(0).toUpperCase();
      const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
      return firstInitial + lastInitial;
    }
  };

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setShowUserDropdown(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    setShowUserDropdown(false);
    setIsOpen(false);
    if (typeof onLogout === "function") {
      onLogout();
    }
  };

  const handleLogoutConfirm = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      handleLogout();
    }
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
    setShowUserDropdown(false);
    setIsOpen(false);
  };

  const handleAdminClick = () => {
    window.location.href = "/admin/dashboard";
    setShowUserDropdown(false);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <Beaker className="h-8 w-8 text-white" />
            <Palette className="h-6 w-6 text-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white">C - Call</span>
              <span className="text-xs text-white font-medium">Chemical & TILES</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                {link.label}
              </button>
            ))}

            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="relative p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* User Authentication Section */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  {/* User Avatar with Initials */}
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium text-sm">
                    {userInitials}
                  </div>
                  <span className="text-sm font-medium">{user?.name || "User"}</span>
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
                        {isAdmin && (
                          <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">
                            Administrator
                          </p>
                        )}
                      </div>
                      {/* Admin Panel Link in Dropdown */}
                      {isAdmin && (
                        <button
                          onClick={handleAdminClick}
                          className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-md transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Admin Panel</span>
                        </button>
                      )}
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
              /* Login/Signup buttons when not authenticated */
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => (window.location.href = "/login")}
                  className="px-4 py-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 border border-blue-400 hover:border-blue-300 rounded-lg"
                >
                  Login
                </button>
                <button
                  onClick={() => (window.location.href = "/register")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 rounded-lg"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Button for Mobile */}
            <button
              onClick={handleCartClick}
              className="relative p-2 text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {isAuthenticated && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium text-sm">
                  {userInitials}
                </div>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
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

          {/* Mobile Cart Button */}
          <button
            onClick={handleCartClick}
            className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart ({getTotalItems()})</span>
          </button>

          {/* Admin Panel Button - Mobile */}
          {isAuthenticated && isAdmin && (
            <button
              onClick={handleAdminClick}
              className="flex items-center space-x-2 w-full px-3 py-2 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Admin Panel</span>
            </button>
          )}

          {/* Mobile Authentication */}
          {isAuthenticated ? (
            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="flex items-center space-x-3 px-3 py-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-medium">
                  {userInitials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                  {isAdmin && (
                    <p className="text-xs text-purple-400 font-medium">Administrator</p>
                  )}
                </div>
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
            /* Mobile Login/Signup buttons when not authenticated */
            <div className="border-t border-gray-700 pt-2 mt-2 space-y-2">
              <button
                onClick={() => (window.location.href = "/login")}
                className="flex items-center justify-center w-full px-3 py-2 text-base font-medium text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-200 border border-blue-400 hover:border-blue-300"
              >
                Login
              </button>
              <button
                onClick={() => (window.location.href = "/register")}
                className="flex items-center justify-center w-full px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;