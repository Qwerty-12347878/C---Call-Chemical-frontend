// // import React, { useState, useEffect, useContext, createContext } from "react";
// // import Navbar from "../components/Navbar"; // <-- Import your custom Navbar

// // // Theme Context
// // const ThemeContext = createContext();

// // const ThemeProvider = ({ children }) => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setIsDarkMode(!isDarkMode);
// //     document.documentElement.classList.toggle("dark", !isDarkMode);
// //   };

// //   useEffect(() => {
// //     // Check for saved theme preference or default to system preference
// //     const savedTheme = localStorage.getItem("theme");
// //     const prefersDark = window.matchMedia(
// //       "(prefers-color-scheme: dark)"
// //     ).matches;
// //     const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

// //     setIsDarkMode(shouldBeDark);
// //     document.documentElement.classList.toggle("dark", shouldBeDark);
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
// //   }, [isDarkMode]);

// //   return (
// //     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };

// // const Products = () => {
// //   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

// //   // Enhanced product data with working images
// //   const productData = {
// //     categories: [
// //       {
// //         id: "industrial",
// //         name: "Industrial Chemicals",
// //         description:
// //           "High-purity acids, solvents, and cleaning agents for manufacturing processes",
// //         icon: "⚗️",
// //         color: "bg-blue-500 dark:bg-blue-600",
// //         image:
// //           "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400",
// //         applications: [
// //           "Metal processing",
// //           "Textile manufacturing",
// //           "Electronics",
// //           "Automotive",
// //         ],
// //       },
// //       {
// //         id: "specialty",
// //         name: "Specialty Chemicals",
// //         description:
// //           "Custom formulations and performance additives for specific applications",
// //         icon: "🧪",
// //         color: "bg-red-500 dark:bg-red-600",
// //         image:
// //           "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
// //         applications: ["Adhesives", "Coatings", "Polymers", "Water treatment"],
// //       },
// //       {
// //         id: "laboratory",
// //         name: "Laboratory Chemicals",
// //         description: "Analytical grade reagents and research chemicals for R&D",
// //         icon: "🔬",
// //         color: "bg-green-500 dark:bg-green-600",
// //         image:
// //           "https://images.unsplash.com/photo-1564444567045-db7c4b84d76e?w=400",
// //         applications: [
// //           "Research institutions",
// //           "Quality control",
// //           "Universities",
// //           "Pharma labs",
// //         ],
// //       },
// //       {
// //         id: "safety",
// //         name: "Safety Equipment",
// //         description: "Personal protective equipment and safety solutions",
// //         icon: "🛡️",
// //         color: "bg-orange-500 dark:bg-orange-600",
// //         image:
// //           "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400",
// //         applications: [
// //           "Laboratory safety",
// //           "Industrial protection",
// //           "Emergency response",
// //         ],
// //       },
// //     ],

// //     products: [
// //       {
// //         id: "h2so4-98",
// //         name: "Sulfuric Acid 98%",
// //         category: "industrial",
// //         formula: "H₂SO₄",
// //         casNumber: "7664-93-9",
// //         image:
// //           "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=300",
// //         description:
// //           "High purity sulfuric acid for industrial applications including metal processing, battery manufacturing, and chemical synthesis.",
// //         applications: [
// //           "Battery acid",
// //           "Metal etching",
// //           "Chemical synthesis",
// //           "Water treatment",
// //         ],
// //         safetyClass: "Corrosive",
// //         packaging: ["1L bottles", "5L containers", "25L drums", "1000L IBC"],
// //         price: "$45.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.8,
// //         reviews: 127,
// //         certifications: ["ISO 9001", "UN1830"],
// //         specifications: {
// //           purity: "98.0% min",
// //           density: "1.84 g/cm³",
// //           boilingPoint: "337°C",
// //           meltingPoint: "10°C",
// //           viscosity: "26.7 cP",
// //         },
// //       },
// //       {
// //         id: "ipa-999",
// //         name: "Isopropyl Alcohol 99.9%",
// //         category: "industrial",
// //         formula: "C₃H₈O",
// //         casNumber: "67-63-0",
// //         image:
// //           "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300",
// //         description:
// //           "Ultra-pure isopropyl alcohol for electronics cleaning, pharmaceuticals, and laboratory applications.",
// //         applications: [
// //           "Electronics cleaning",
// //           "Disinfectant",
// //           "Solvent",
// //           "Pharmaceutical intermediate",
// //         ],
// //         safetyClass: "Flammable",
// //         packaging: [
// //           "250ml bottles",
// //           "1L bottles",
// //           "4L containers",
// //           "200L drums",
// //         ],
// //         price: "$28.50",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.9,
// //         reviews: 203,
// //         certifications: ["USP Grade", "GMP"],
// //         specifications: {
// //           purity: "99.9% min",
// //           density: "0.786 g/cm³",
// //           boilingPoint: "82.6°C",
// //           flashPoint: "11.7°C",
// //           waterContent: "0.1% max",
// //         },
// //       },
// //       {
// //         id: "naoh-pellets",
// //         name: "Sodium Hydroxide Pellets",
// //         category: "industrial",
// //         formula: "NaOH",
// //         casNumber: "1310-73-2",
// //         image:
// //           "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
// //         description:
// //           "High-grade caustic soda pellets for soap manufacturing, water treatment, and chemical processing.",
// //         applications: [
// //           "Soap production",
// //           "pH adjustment",
// //           "Pulp & paper",
// //           "Aluminum processing",
// //         ],
// //         safetyClass: "Corrosive",
// //         packaging: ["1kg bags", "25kg bags", "500kg big bags", "Bulk delivery"],
// //         price: "$32.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.7,
// //         reviews: 89,
// //         certifications: ["Food Grade", "Technical Grade"],
// //         specifications: {
// //           purity: "99.0% min",
// //           moisture: "0.5% max",
// //           carbonates: "0.8% max",
// //           chlorides: "0.005% max",
// //           ironContent: "0.001% max",
// //         },
// //       },
// //       {
// //         id: "acetone-tech",
// //         name: "Acetone Technical Grade",
// //         category: "industrial",
// //         formula: "C₃H₆O",
// //         casNumber: "67-64-1",
// //         image:
// //           "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300",
// //         description:
// //           "Technical grade acetone for use as solvent in paint, coatings, and adhesive formulations.",
// //         applications: [
// //           "Paint thinner",
// //           "Adhesive solvent",
// //           "Cleaning agent",
// //           "Plastic production",
// //         ],
// //         safetyClass: "Flammable",
// //         packaging: ["1L bottles", "5L containers", "25L drums", "200L drums"],
// //         price: "$22.75",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.6,
// //         reviews: 156,
// //         certifications: ["Technical Grade", "ASTM D329"],
// //         specifications: {
// //           purity: "99.5% min",
// //           density: "0.791 g/cm³",
// //           boilingPoint: "56.05°C",
// //           flashPoint: "-20°C",
// //           residue: "0.01% max",
// //         },
// //       },
// //       {
// //         id: "polyurethane-catalyst",
// //         name: "Polyurethane Catalyst DABCO T-12",
// //         category: "specialty",
// //         formula: "C₈H₁₂Sn",
// //         casNumber: "77-58-7",
// //         image:
// //           "https://images.unsplash.com/photo-1574781330855-d0db13d25483?w=300",
// //         description:
// //           "High-performance tin catalyst for polyurethane foam and coating applications.",
// //         applications: ["Flexible foam", "Rigid foam", "Coatings", "Adhesives"],
// //         safetyClass: "Toxic",
// //         packaging: ["1kg bottles", "5kg containers", "25kg drums"],
// //         price: "$185.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.9,
// //         reviews: 67,
// //         certifications: ["REACH Compliant", "ISO 14001"],
// //         specifications: {
// //           tinContent: "28.5% min",
// //           viscosity: "2.5-3.5 cSt",
// //           density: "1.25 g/cm³",
// //           flashPoint: "93°C",
// //           pourPoint: "-10°C max",
// //         },
// //       },
// //       {
// //         id: "antioxidant-bht",
// //         name: "Antioxidant BHT (Butylated Hydroxytoluene)",
// //         category: "specialty",
// //         formula: "C₁₅H₂₄O",
// //         casNumber: "128-37-0",
// //         image:
// //           "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300",
// //         description:
// //           "Primary antioxidant for polymers, rubber, and petroleum products to prevent oxidative degradation.",
// //         applications: [
// //           "Plastic additives",
// //           "Rubber stabilization",
// //           "Food packaging",
// //           "Fuel additives",
// //         ],
// //         safetyClass: "Irritant",
// //         packaging: ["25kg bags", "500kg big bags", "1000kg containers"],
// //         price: "$95.50",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.8,
// //         reviews: 134,
// //         certifications: ["Food Grade", "FDA Approved"],
// //         specifications: {
// //           purity: "99.0% min",
// //           meltingPoint: "69-71°C",
// //           ashContent: "0.1% max",
// //           heavyMetals: "10ppm max",
// //           phenolicContent: "99.0% min",
// //         },
// //       },
// //       {
// //         id: "analytical-hcl",
// //         name: "Hydrochloric Acid Analytical Grade",
// //         category: "laboratory",
// //         formula: "HCl",
// //         casNumber: "7647-01-0",
// //         image:
// //           "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=300",
// //         description:
// //           "Ultra-pure hydrochloric acid for analytical chemistry, pH adjustment, and laboratory applications.",
// //         applications: [
// //           "Analytical chemistry",
// //           "pH adjustment",
// //           "Digestion",
// //           "Titrations",
// //         ],
// //         safetyClass: "Corrosive",
// //         packaging: ["500ml bottles", "2.5L bottles", "10L containers"],
// //         price: "$42.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.9,
// //         reviews: 298,
// //         certifications: ["ACS Grade", "Reagent Grade"],
// //         specifications: {
// //           purity: "37.0% min",
// //           residue: "5ppm max",
// //           sulfate: "2ppm max",
// //           heavyMetals: "1ppm max",
// //           ironContent: "0.2ppm max",
// //         },
// //       },
// //       {
// //         id: "methanol-hplc",
// //         name: "Methanol HPLC Grade",
// //         category: "laboratory",
// //         formula: "CH₃OH",
// //         casNumber: "67-56-1",
// //         image:
// //           "https://images.unsplash.com/photo-1516737488405-d1d6b1c7d3b4?w=300",
// //         description:
// //           "High-purity methanol suitable for HPLC, spectroscopy, and analytical applications.",
// //         applications: [
// //           "HPLC mobile phase",
// //           "Spectroscopy",
// //           "Extraction",
// //           "Sample preparation",
// //         ],
// //         safetyClass: "Toxic/Flammable",
// //         packaging: ["1L bottles", "4L bottles", "200L drums"],
// //         price: "$38.25",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.7,
// //         reviews: 187,
// //         certifications: ["HPLC Grade", "Spectroscopic Grade"],
// //         specifications: {
// //           purity: "99.9% min",
// //           water: "0.1% max",
// //           residue: "5ppm max",
// //           uvTransmission: "100% at 400nm",
// //           acidity: "0.0008 meq/g max",
// //         },
// //       },
// //       {
// //         id: "safety-goggles",
// //         name: "Chemical Safety Goggles",
// //         category: "safety",
// //         formula: "N/A",
// //         casNumber: "N/A",
// //         image:
// //           "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300",
// //         description:
// //           "Anti-fog chemical splash goggles with indirect ventilation for laboratory and industrial use.",
// //         applications: [
// //           "Chemical handling",
// //           "Laboratory work",
// //           "Industrial processing",
// //           "Cleaning operations",
// //         ],
// //         safetyClass: "PPE",
// //         packaging: ["Individual units", "12-pack boxes", "100-unit cases"],
// //         price: "$24.50",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.6,
// //         reviews: 412,
// //         certifications: ["ANSI Z87.1", "CE Marked"],
// //         specifications: {
// //           standard: "ANSI Z87.1",
// //           lensType: "Polycarbonate",
// //           coating: "Anti-fog",
// //           ventilation: "Indirect",
// //           uvProtection: "99.9%",
// //         },
// //       },
// //       {
// //         id: "nitrile-gloves",
// //         name: "Chemical Resistant Nitrile Gloves",
// //         category: "safety",
// //         formula: "N/A",
// //         casNumber: "N/A",
// //         image:
// //           "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300",
// //         description:
// //           "Powder-free nitrile examination gloves with excellent chemical resistance and tactile sensitivity.",
// //         applications: [
// //           "Chemical handling",
// //           "Laboratory analysis",
// //           "Sample preparation",
// //           "Quality control",
// //         ],
// //         safetyClass: "PPE",
// //         packaging: ["100-glove boxes", "1000-glove cases", "Bulk packaging"],
// //         price: "$18.75",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.8,
// //         reviews: 567,
// //         certifications: ["FDA Approved", "ASTM D6319"],
// //         specifications: {
// //           thickness: "5-6 mil",
// //           length: "240mm min",
// //           standard: "ASTM D6319",
// //           powder: "Powder-free",
// //           aql: "1.5",
// //         },
// //       },
// //     ],
// //   };

// //   // Enhanced state management
// //   const [currentFilter, setCurrentFilter] = useState("all");
// //   const [filteredProducts, setFilteredProducts] = useState(
// //     productData.products
// //   );
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isCartOpen, setIsCartOpen] = useState(false);
// //   const [sortBy, setSortBy] = useState("name");
// //   const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
// //   const [priceRange, setPriceRange] = useState([0, 200]);
// //   const [cart, setCart] = useState([]);
// //   const [wishlist, setWishlist] = useState([]);
// //   const [viewMode, setViewMode] = useState("grid"); // grid or list

// //   // Cart functionality
// //   const addToCart = (product, quantity = 1) => {
// //     const existingItem = cart.find((item) => item.id === product.id);
// //     if (existingItem) {
// //       setCart(
// //         cart.map((item) =>
// //           item.id === product.id
// //             ? { ...item, quantity: item.quantity + quantity }
// //             : item
// //         )
// //       );
// //     } else {
// //       setCart([...cart, { ...product, quantity }]);
// //     }
// //   };

// //   const removeFromCart = (productId) => {
// //     setCart(cart.filter((item) => item.id !== productId));
// //   };

// //   const updateCartQuantity = (productId, newQuantity) => {
// //     if (newQuantity < 1) {
// //       removeFromCart(productId);
// //       return;
// //     }
// //     setCart(
// //       cart.map((item) =>
// //         item.id === productId ? { ...item, quantity: newQuantity } : item
// //       )
// //     );
// //   };

// //   const clearCart = () => {
// //     setCart([]);
// //   };

// //   const getCartTotal = () => {
// //     return cart
// //       .reduce((total, item) => {
// //         const price = parseFloat(item.price.replace("$", ""));
// //         return total + price * item.quantity;
// //       }, 0)
// //       .toFixed(2);
// //   };

// //   const getTotalItems = () => {
// //     return cart.reduce((total, item) => total + item.quantity, 0);
// //   };

// //   // Wishlist functionality
// //   const toggleWishlist = (product) => {
// //     const isWishlisted = wishlist.some((item) => item.id === product.id);
// //     if (isWishlisted) {
// //       setWishlist(wishlist.filter((item) => item.id !== product.id));
// //     } else {
// //       setWishlist([...wishlist, product]);
// //     }
// //   };

// //   // Enhanced filtering and sorting
// //   const applyFiltersAndSort = () => {
// //     let products = [...productData.products];

// //     // Filter by category
// //     if (currentFilter !== "all") {
// //       products = products.filter(
// //         (product) => product.category === currentFilter
// //       );
// //     }

// //     // Filter by search query
// //     if (searchQuery) {
// //       products = products.filter(
// //         (product) =>
// //           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           product.description
// //             .toLowerCase()
// //             .includes(searchQuery.toLowerCase()) ||
// //           product.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           product.casNumber.includes(searchQuery) ||
// //           product.applications.some((app) =>
// //             app.toLowerCase().includes(searchQuery.toLowerCase())
// //           )
// //       );
// //     }

// //     // Filter by featured
// //     if (showFeaturedOnly) {
// //       products = products.filter((product) => product.featured);
// //     }

// //     // Filter by price range
// //     products = products.filter((product) => {
// //       const price = parseFloat(product.price.replace("$", ""));
// //       return price >= priceRange[0] && price <= priceRange[1];
// //     });

// //     // Sort products
// //     products.sort((a, b) => {
// //       switch (sortBy) {
// //         case "name":
// //           return a.name.localeCompare(b.name);
// //         case "price-low":
// //           return (
// //             parseFloat(a.price.replace("$", "")) -
// //             parseFloat(b.price.replace("$", ""))
// //           );
// //         case "price-high":
// //           return (
// //             parseFloat(b.price.replace("$", "")) -
// //             parseFloat(a.price.replace("$", ""))
// //           );
// //         case "rating":
// //           return b.rating - a.rating;
// //         case "featured":
// //           return b.featured - a.featured;
// //         default:
// //           return 0;
// //       }
// //     });

// //     setFilteredProducts(products);
// //   };

// //   // Filter products by category
// //   const filterProducts = (category) => {
// //     setCurrentFilter(category);
// //   };

// //   // Search products
// //   const handleSearch = (query) => {
// //     setSearchQuery(query);
// //   };

// //   // Show product details modal
// //   const showProductDetails = (product) => {
// //     setSelectedProduct(product);
// //     setIsModalOpen(true);
// //     setIsCartOpen(false);
// //     document.body.style.overflow = "hidden";
// //   };

// //   // Close modal
// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedProduct(null);
// //     document.body.style.overflow = "auto";
// //   };

// //   // Get safety class color
// //   const getSafetyClassColor = (safetyClass) => {
// //     const colors = {
// //       Corrosive: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
// //       Flammable:
// //         "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20",
// //       Toxic:
// //         "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20",
// //       "Toxic/Flammable":
// //         "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
// //       Irritant:
// //         "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20",
// //       PPE: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20",
// //       "Non-hazardous":
// //         "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20",
// //     };
// //     return (
// //       colors[safetyClass] ||
// //       "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800"
// //     );
// //   };

// //   // Download SDS
// //   const downloadSDS = () => {
// //     alert(
// //       "Safety Data Sheet download initiated. The document will be available shortly."
// //     );
// //   };

// //   // Request quote
// //   const requestQuote = (productName) => {
// //     alert(
// //       `Quote request initiated for ${productName}. Our sales team will contact you shortly.`
// //     );
// //   };

// //   // Bulk order
// //   const initiateBulkOrder = () => {
// //     if (cart.length === 0) {
// //       alert("Please add items to your cart before requesting a bulk order.");
// //       return;
// //     }
// //     alert(
// //       `Bulk order request initiated for ${
// //         cart.length
// //       } items. Total: $${getCartTotal()}. Our sales team will contact you shortly.`
// //     );
// //   };

// //   // Apply filters on state changes
// //   useEffect(() => {
// //     applyFiltersAndSort();
// //   }, [currentFilter, searchQuery, showFeaturedOnly, sortBy, priceRange]);

// //   // Example user and authentication state for Navbar
// //   const [isAuthenticated, setIsAuthenticated] = useState(true); // Set according to your app logic
// //   const [user, setUser] = useState({
// //     name: "John Doe",
// //     email: "john@example.com",
// //   }); // Replace with actual user data

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
// //       {/* --- Replace old header with your Navbar --- */}
// //       <Navbar
// //         isAuthenticated={isAuthenticated}
// //         user={user}
// //         onLogout={() => {
// //           setIsAuthenticated(false);
// //           setUser(null);
// //         }}
// //       />

// //       {/* --- The rest of your Products page remains unchanged --- */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Hero Section with Background Image */}
// //         <div className="relative rounded-2xl overflow-hidden mb-12">
// //           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90 dark:from-blue-800/90 dark:to-purple-900/90"></div>
// //           <div className="relative px-8 py-16 text-center text-white">
// //             <h2 className="text-5xl font-bold mb-4">
// //               Chemical Products Catalog
// //             </h2>
// //             <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
// //               Comprehensive range of high-quality chemicals for industrial,
// //               laboratory, and specialty applications
// //             </p>
// //             <div className="flex justify-center space-x-4">
// //               <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
// //                 Download Catalog
// //               </button>
// //               <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
// //                 Contact Sales
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Enhanced Stats Section */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               {filteredProducts.length}
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">
// //               Products Found
// //             </div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               4
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">Categories</div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               25+
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">
// //               Countries Served
// //             </div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               ISO 9001
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">Certified</div>
// //           </div>
// //         </div>

// //         {/* Enhanced Categories Section */}
// //         <section className="mb-12">
// //           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
// //             Product Categories
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {productData.categories.map((category) => (
// //               <div
// //                 key={category.id}
// //                 onClick={() => filterProducts(category.id)}
// //                 className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
// //               >
// //                 <div className="aspect-w-16 aspect-h-9">
// //                   <img
// //                     src={category.image}
// //                     alt={category.name}
// //                     className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
// //                   />
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="text-center">
// //                     <div className="text-4xl mb-4">{category.icon}</div>
// //                     <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                       {category.name}
// //                     </h4>
// //                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
// //                       {category.description}
// //                     </p>
// //                     <div className="flex flex-wrap gap-2 justify-center">
// //                       {category.applications.slice(0, 2).map((app, idx) => (
// //                         <span
// //                           key={idx}
// //                           className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
// //                         >
// //                           {app}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Enhanced Filter and Sort Controls */}
// //         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
// //           <div className="flex flex-wrap gap-4 items-center justify-between">
// //             <div className="flex flex-wrap gap-4 items-center">
// //               <div className="flex items-center space-x-2">
// //                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                   Sort by:
// //                 </label>
// //                 <select
// //                   value={sortBy}
// //                   onChange={(e) => setSortBy(e.target.value)}
// //                   className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
// //                 >
// //                   <option value="name">Name</option>
// //                   <option value="price-low">Price: Low to High</option>
// //                   <option value="price-high">Price: High to Low</option>
// //                   <option value="rating">Rating</option>
// //                   <option value="featured">Featured</option>
// //                 </select>
// //               </div>

// //               <label className="flex items-center space-x-2 cursor-pointer">
// //                 <input
// //                   type="checkbox"
// //                   checked={showFeaturedOnly}
// //                   onChange={(e) => setShowFeaturedOnly(e.target.checked)}
// //                   className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
// //                 />
// //                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                   Featured Only
// //                 </span>
// //               </label>
// //             </div>

// //             <div className="flex items-center space-x-4">
// //               <div className="flex items-center space-x-2">
// //                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                   View:
// //                 </span>
// //                 <button
// //                   onClick={() => setViewMode("grid")}
// //                   className={`p-2 rounded-lg ${
// //                     viewMode === "grid"
// //                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
// //                       : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
// //                   }`}
// //                 >
// //                   <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
// //                     />
// //                   </svg>
// //                 </button>
// //                 <button
// //                   onClick={() => setViewMode("list")}
// //                   className={`p-2 rounded-lg ${
// //                     viewMode === "list"
// //                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
// //                       : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
// //                   }`}
// //                 >
// //                   <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 10h16M4 14h16M4 18h16"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>

// //               <button
// //                 onClick={initiateBulkOrder}
// //                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
// //               >
// //                 Bulk Order ({getTotalItems()})
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Products Section */}
// //         <section>
// //           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
// //             {currentFilter === "all"
// //               ? "All Products"
// //               : `${
// //                   productData.categories.find((c) => c.id === currentFilter)
// //                     ?.name || "Products"
// //                 }`}
// //           </h3>

// //           {viewMode === "grid" ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {filteredProducts.map((product) => (
// //                 <div
// //                   key={product.id}
// //                   className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
// //                 >
// //                   {/* Product Image */}
// //                   <div className="relative aspect-w-16 aspect-h-9">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
// //                     />
// //                     <div className="absolute top-4 left-4 flex space-x-2">
// //                       {product.featured && (
// //                         <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
// //                           ⭐ Featured
// //                         </span>
// //                       )}
// //                       {product.inStock ? (
// //                         <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
// //                           ✅ In Stock
// //                         </span>
// //                       ) : (
// //                         <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
// //                           ❌ Out of Stock
// //                         </span>
// //                       )}
// //                     </div>
// //                     <div className="absolute top-4 right-4">
// //                       <button
// //                         onClick={() => toggleWishlist(product)}
// //                         className={`p-2 rounded-full ${
// //                           wishlist.some((item) => item.id === product.id)
// //                             ? "bg-red-500 text-white"
// //                             : "bg-white text-gray-400 hover:text-red-500"
// //                         } transition-colors`}
// //                       >
// //                         <svg
// //                           className="w-5 h-5"
// //                           fill={
// //                             wishlist.some((item) => item.id === product.id)
// //                               ? "currentColor"
// //                               : "none"
// //                           }
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
// //                           />
// //                         </svg>
// //                       </button>
// //                     </div>
// //                   </div>

// //                   <div className="p-6">
// //                     <div className="flex justify-between items-start mb-4">
// //                       <div className="flex-1">
// //                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                           {product.name}
// //                         </h4>
// //                         <div className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
// //                           {product.formula}
// //                         </div>
// //                       </div>
// //                       <div className="text-right">
// //                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">
// //                           {product.price}
// //                         </div>
// //                         <div className="flex items-center text-yellow-500 text-sm">
// //                           <svg
// //                             className="w-4 h-4 mr-1"
// //                             fill="currentColor"
// //                             viewBox="0 0 20 20"
// //                           >
// //                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                           </svg>
// //                           {product.rating} ({product.reviews})
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
// //                       {product.description}
// //                     </p>

// //                     <div className="space-y-3 mb-4">
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500 dark:text-gray-400">
// //                           CAS Number:
// //                         </span>
// //                         <span className="font-medium text-gray-900 dark:text-white">
// //                           {product.casNumber}
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500 dark:text-gray-400">
// //                           Safety Class:
// //                         </span>
// //                         <span
// //                           className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
// //                             product.safetyClass
// //                           )}`}
// //                         >
// //                           {product.safetyClass}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="mb-6">
// //                       <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">
// //                         Applications:
// //                       </div>
// //                       <div className="flex flex-wrap gap-2">
// //                         {product.applications.slice(0, 3).map((app, idx) => (
// //                           <span
// //                             key={idx}
// //                             className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
// //                           >
// //                             {app}
// //                           </span>
// //                         ))}
// //                         {product.applications.length > 3 && (
// //                           <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
// //                             +{product.applications.length - 3} more
// //                           </span>
// //                         )}
// //                       </div>
// //                     </div>

// //                     <div className="flex space-x-3">
// //                       <button
// //                         onClick={() => showProductDetails(product)}
// //                         className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
// //                       >
// //                         View Details
// //                       </button>
// //                       <button
// //                         onClick={() => addToCart(product)}
// //                         className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
// //                       >
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             // List View
// //             <div className="space-y-4">
// //               {filteredProducts.map((product) => (
// //                 <div
// //                   key={product.id}
// //                   className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300"
// //                 >
// //                   <div className="flex items-center space-x-6">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-24 h-24 object-cover rounded-lg"
// //                     />
// //                     <div className="flex-1">
// //                       <div className="flex justify-between items-start mb-2">
// //                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
// //                           {product.name}
// //                         </h4>
// //                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">
// //                           {product.price}
// //                         </div>
// //                       </div>
// //                       <div className="flex items-center space-x-4 mb-2">
// //                         <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
// //                           {product.formula}
// //                         </span>
// //                         <span
// //                           className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
// //                             product.safetyClass
// //                           )}`}
// //                         >
// //                           {product.safetyClass}
// //                         </span>
// //                         <div className="flex items-center text-yellow-500 text-sm">
// //                           <svg
// //                             className="w-4 h-4 mr-1"
// //                             fill="currentColor"
// //                             viewBox="0 0 20 20"
// //                           >
// //                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                           </svg>
// //                           {product.rating} ({product.reviews})
// //                         </div>
// //                       </div>
// //                       <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
// //                         {product.description}
// //                       </p>
// //                       <div className="flex items-center justify-between">
// //                         <div className="flex flex-wrap gap-2">
// //                           {product.applications.slice(0, 3).map((app, idx) => (
// //                             <span
// //                               key={idx}
// //                               className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
// //                             >
// //                               {app}
// //                             </span>
// //                           ))}
// //                         </div>
// //                         <div className="flex space-x-3">
// //                           <button
// //                             onClick={() => showProductDetails(product)}
// //                             className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
// //                           >
// //                             Details
// //                           </button>
// //                           <button
// //                             onClick={() => addToCart(product)}
// //                             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
// //                           >
// //                             Add to Cart
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}

// //           {filteredProducts.length === 0 && (
// //             <div className="text-center py-20">
// //               <div className="text-gray-400 dark:text-gray-500 text-8xl mb-6">
// //                 🔍
// //               </div>
// //               <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
// //                 No products found
// //               </h3>
// //               <p className="text-gray-600 dark:text-gray-400 text-lg">
// //                 Try adjusting your search or filter criteria
// //               </p>
// //             </div>
// //           )}
// //         </section>
// //       </main>

// //       {/* Enhanced Product Detail Modal */}
// //       {isModalOpen && selectedProduct && (
// //         <div className="fixed inset-0 bg-black/70 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
// //             <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
// //               <div>
// //                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
// //                   {selectedProduct.name}
// //                 </h3>
// //                 <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
// //                   {selectedProduct.formula}
// //                 </p>
// //               </div>
// //               <button
// //                 onClick={closeModal}
// //                 className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
// //               >
// //                 <svg
// //                   className="w-8 h-8"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>

// //             <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
// //               <div className="p-8">
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
// //                   <div>
// //                     <img
// //                       src={selectedProduct.image}
// //                       alt={selectedProduct.name}
// //                       className="w-full h-80 object-cover rounded-xl"
// //                     />
// //                   </div>
// //                   <div className="space-y-6">
// //                     <div className="flex items-center justify-between">
// //                       <div className="text-4xl font-bold text-green-600 dark:text-green-400">
// //                         {selectedProduct.price}
// //                       </div>
// //                       <div className="flex items-center text-yellow-500">
// //                         <svg
// //                           className="w-6 h-6 mr-2"
// //                           fill="currentColor"
// //                           viewBox="0 0 20 20"
// //                         >
// //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                         </svg>
// //                         <span className="text-lg font-semibold">
// //                           {selectedProduct.rating}
// //                         </span>
// //                         <span className="text-gray-600 dark:text-gray-400 ml-2">
// //                           ({selectedProduct.reviews} reviews)
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="grid grid-cols-2 gap-4">
// //                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
// //                         <div className="font-semibold text-gray-900 dark:text-white mb-1">
// //                           CAS Number
// //                         </div>
// //                         <div className="text-gray-600 dark:text-gray-400">
// //                           {selectedProduct.casNumber}
// //                         </div>
// //                       </div>
// //                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
// //                         <div className="font-semibold text-gray-900 dark:text-white mb-1">
// //                           Safety Class
// //                         </div>
// //                         <span
// //                           className={`px-3 py-1 rounded-full text-sm font-medium ${getSafetyClassColor(
// //                             selectedProduct.safetyClass
// //                           )}`}
// //                         >
// //                           {selectedProduct.safetyClass}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
// //                         Certifications
// //                       </h4>
// //                       <div className="flex flex-wrap gap-2">
// //                         {selectedProduct.certifications.map((cert, idx) => (
// //                           <span
// //                             key={idx}
// //                             className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
// //                           >
// //                             {cert}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Description */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
// //                     Description
// //                   </h4>
// //                   <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
// //                     {selectedProduct.description}
// //                   </p>
// //                 </div>

// //                 {/* Technical Specifications */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
// //                     Technical Specifications
// //                   </h4>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                     {Object.entries(selectedProduct.specifications).map(
// //                       ([key, value]) => (
// //                         <div
// //                           key={key}
// //                           className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
// //                         >
// //                           <div className="font-semibold text-gray-900 dark:text-white mb-1">
// //                             {key
// //                               .replace(/([A-Z])/g, " $1")
// //                               .replace(/^./, (str) => str.toUpperCase())}
// //                           </div>
// //                           <div className="font-mono text-gray-600 dark:text-gray-400">
// //                             {value}
// //                           </div>
// //                         </div>
// //                       )
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Available Packaging */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
// //                     Available Packaging
// //                   </h4>
// //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                     {selectedProduct.packaging.map((pkg, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-400 p-4 rounded-xl text-center font-semibold"
// //                       >
// //                         {pkg}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Applications */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
// //                     Applications
// //                   </h4>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     {selectedProduct.applications.map((app, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border-l-4 border-blue-500 dark:border-blue-400"
// //                       >
// //                         <div className="flex items-center">
// //                           <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
// //                           <span className="text-gray-800 dark:text-gray-200 font-medium">
// //                             {app}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
// //               <button
// //                 onClick={closeModal}
// //                 className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
// //               >
// //                 Close
// //               </button>
// //               <div className="flex space-x-4">
// //                 <button
// //                   onClick={downloadSDS}
// //                   className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium"
// //                 >
// //                   📄 Download SDS
// //                 </button>
// //                 <button
// //                   onClick={() => addToCart(selectedProduct)}
// //                   className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
// //                 >
// //                   🛒 Add to Cart
// //                 </button>
// //                 <button
// //                   onClick={() => requestQuote(selectedProduct.name)}
// //                   className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
// //                 >
// //                   💬 Request Quote
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Cart Modal */}
// //       {isCartOpen && (
// //         <div className="fixed inset-0 bg-black/70 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
// //             <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
// //               <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
// //                 Shopping Cart ({getTotalItems()} items)
// //               </h3>
// //               <button
// //                 onClick={() => setIsCartOpen(false)}
// //                 className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
// //               >
// //                 <svg
// //                   className="w-8 h-8"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>

// //             <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
// //               {cart.length === 0 ? (
// //                 <div className="text-center py-20">
// //                   <div className="text-gray-400 dark:text-gray-500 text-8xl mb-6">
// //                     🛒
// //                   </div>
// //                   <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
// //                     Your cart is empty
// //                   </h3>
// //                   <p className="text-gray-600 dark:text-gray-400 text-lg">
// //                     Add some products to get started
// //                   </p>
// //                 </div>
// //               ) : (
// //                 <div className="p-8">
// //                   <div className="space-y-6">
// //                     {cart.map((item) => (
// //                       <div
// //                         key={item.id}
// //                         className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-700 rounded-2xl p-6"
// //                       >
// //                         <img
// //                           src={item.image}
// //                           alt={item.name}
// //                           className="w-20 h-20 object-cover rounded-lg"
// //                         />
// //                         <div className="flex-1">
// //                           <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                             {item.name}
// //                           </h4>
// //                           <div className="flex items-center space-x-4">
// //                             <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
// //                               {item.formula}
// //                             </span>
// //                             <span
// //                               className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
// //                                 item.safetyClass
// //                               )}`}
// //                             >
// //                               {item.safetyClass}
// //                             </span>
// //                           </div>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
// //                             {item.price}
// //                           </div>
// //                           <div className="flex items-center space-x-3">
// //                             <button
// //                               onClick={() =>
// //                                 updateCartQuantity(item.id, item.quantity - 1)
// //                               }
// //                               className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
// //                             >
// //                               -
// //                             </button>
// //                             <span className="text-lg font-semibold text-gray-900 dark:text-white min-w-8 text-center">
// //                               {item.quantity}
// //                             </span>
// //                             <button
// //                               onClick={() =>
// //                                 updateCartQuantity(item.id, item.quantity + 1)
// //                               }
// //                               className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
// //                             >
// //                               +
// //                             </button>
// //                           </div>
// //                           <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
// //                             Subtotal: $
// //                             {(
// //                               parseFloat(item.price.replace("$", "")) *
// //                               item.quantity
// //                             ).toFixed(2)}
// //                           </div>
// //                         </div>
// //                         <button
// //                           onClick={() => removeFromCart(item.id)}
// //                           className="text-red-500 hover:text-red-700 transition-colors p-2"
// //                         >
// //                           <svg
// //                             className="w-6 h-6"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
// //                             />
// //                           </svg>
// //                         </button>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   {/* Cart Summary */}
// //                   <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                       <div className="space-y-3">
// //                         <h4 className="font-semibold text-gray-900 dark:text-white">
// //                           Order Summary
// //                         </h4>
// //                         <div className="space-y-2">
// //                           <div className="flex justify-between text-sm">
// //                             <span className="text-gray-600 dark:text-gray-400">
// //                               Items:
// //                             </span>
// //                             <span className="font-medium text-gray-900 dark:text-white">
// //                               {getTotalItems()}
// //                             </span>
// //                           </div>
// //                           <div className="flex justify-between text-sm">
// //                             <span className="text-gray-600 dark:text-gray-400">
// //                               Products:
// //                             </span>
// //                             <span className="font-medium text-gray-900 dark:text-white">
// //                               {cart.length}
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                       <div className="space-y-3">
// //                         <h4 className="font-semibold text-gray-900 dark:text-white">
// //                           Pricing
// //                         </h4>
// //                         <div className="space-y-2">
// //                           <div className="flex justify-between text-sm">
// //                             <span className="text-gray-600 dark:text-gray-400">
// //                               Subtotal:
// //                             </span>
// //                             <span className="font-medium text-gray-900 dark:text-white">
// //                               ${getCartTotal()}
// //                             </span>
// //                           </div>
// //                           <div className="flex justify-between text-sm">
// //                             <span className="text-gray-600 dark:text-gray-400">
// //                               Shipping:
// //                             </span>
// //                             <span className="font-medium text-gray-900 dark:text-white">
// //                               Calculated at checkout
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                       <div className="space-y-3">
// //                         <h4 className="font-semibold text-gray-900 dark:text-white">
// //                           Total
// //                         </h4>
// //                         <div className="text-3xl font-bold text-green-600 dark:text-green-400">
// //                           ${getCartTotal()}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
// //               <button
// //                 onClick={() => setIsCartOpen(false)}
// //                 className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
// //               >
// //                 Continue Shopping
// //               </button>
// //               {cart.length > 0 && (
// //                 <div className="flex space-x-4">
// //                   <button
// //                     onClick={clearCart}
// //                     className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-medium"
// //                   >
// //                     Clear Cart
// //                   </button>
// //                   <button
// //                     onClick={initiateBulkOrder}
// //                     className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
// //                   >
// //                     Proceed to Bulk Order
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Mobile Category Filter */}
// //       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-30">
// //         <div className="flex space-x-2 overflow-x-auto pb-2">
// //           <button
// //             onClick={() => filterProducts("all")}
// //             className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
// //               currentFilter === "all"
// //                 ? "bg-blue-600 text-white"
// //                 : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
// //             }`}
// //           >
// //             All
// //           </button>
// //           {productData.categories.map((category) => (
// //             <button
// //               key={category.id}
// //               onClick={() => filterProducts(category.id)}
// //               className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
// //                 currentFilter === category.id
// //                   ? "bg-blue-600 text-white"
// //                   : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
// //               }`}
// //             >
// //               {category.icon} {category.name}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Floating Cart Summary */}
// //       {!isCartOpen && cart.length > 0 && (
// //         <div className="fixed bottom-20 lg:bottom-6 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 z-40 max-w-sm">
// //           <div className="flex items-center justify-between mb-3">
// //             <h4 className="font-semibold text-gray-900 dark:text-white">
// //               Cart Summary
// //             </h4>
// //             <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-medium">
// //               {getTotalItems()} items
// //             </span>
// //           </div>
// //           <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
// //             Total: ${getCartTotal()}
// //           </div>
// //           <div className="space-y-2">
// //             {cart.slice(0, 3).map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="flex justify-between items-center text-sm"
// //               >
// //                 <span className="text-gray-600 dark:text-gray-400 truncate">
// //                   {item.name}
// //                 </span>
// //                 <span className="text-gray-900 dark:text-white font-medium">
// //                   ×{item.quantity}
// //                 </span>
// //               </div>
// //             ))}
// //             {cart.length > 3 && (
// //               <div className="text-center text-xs text-gray-500 dark:text-gray-400">
// //                 +{cart.length - 3} more items
// //               </div>
// //             )}
// //           </div>
// //           <button
// //             onClick={() => setIsCartOpen(true)}
// //             className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium mt-4 transition-colors"
// //           >
// //             View Full Cart
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Main App Component
// // const App = () => {
// //   return (
// //     <ThemeProvider>
// //       <Products />
// //     </ThemeProvider>
// //   );
// // };

// // export default App;

// // import React, { useState, useEffect, useContext, createContext } from "react";
// // import Navbar from "../components/Navbar";

// // // Theme Context
// // const ThemeContext = createContext();

// // const ThemeProvider = ({ children }) => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setIsDarkMode(!isDarkMode);
// //     document.documentElement.classList.toggle("dark", !isDarkMode);
// //   };

// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem("theme");
// //     const prefersDark = window.matchMedia(
// //       "(prefers-color-scheme: dark)"
// //     ).matches;
// //     const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

// //     setIsDarkMode(shouldBeDark);
// //     document.documentElement.classList.toggle("dark", shouldBeDark);
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
// //   }, [isDarkMode]);

// //   return (
// //     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };

// // // Cart Context - Export this so Navbar can use it
// // export const CartContext = createContext();

// // // Cart Provider Component
// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);
// //   const [isCartOpen, setIsCartOpen] = useState(false);

// //   // Load cart from localStorage on component mount
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("chemicalCart");
// //     if (savedCart) {
// //       setCart(JSON.parse(savedCart));
// //     }
// //   }, []);

// //   // Save cart to localStorage whenever cart changes
// //   useEffect(() => {
// //     localStorage.setItem("chemicalCart", JSON.stringify(cart));
// //   }, [cart]);

// //   const addToCart = (product, quantity = 1) => {
// //     const existingItem = cart.find((item) => item.id === product.id);
// //     if (existingItem) {
// //       setCart(
// //         cart.map((item) =>
// //           item.id === product.id
// //             ? { ...item, quantity: item.quantity + quantity }
// //             : item
// //         )
// //       );
// //     } else {
// //       setCart([...cart, { ...product, quantity }]);
// //     }
// //   };

// //   const removeFromCart = (productId) => {
// //     setCart(cart.filter((item) => item.id !== productId));
// //   };

// //   const updateCartQuantity = (productId, newQuantity) => {
// //     if (newQuantity < 1) {
// //       removeFromCart(productId);
// //       return;
// //     }
// //     setCart(
// //       cart.map((item) =>
// //         item.id === productId ? { ...item, quantity: newQuantity } : item
// //       )
// //     );
// //   };

// //   const clearCart = () => {
// //     setCart([]);
// //   };

// //   const getCartTotal = () => {
// //     return cart
// //       .reduce((total, item) => {
// //         const price = parseFloat(item.price.replace("$", ""));
// //         return total + price * item.quantity;
// //       }, 0)
// //       .toFixed(2);
// //   };

// //   const getTotalItems = () => {
// //     return cart.reduce((total, item) => total + item.quantity, 0);
// //   };

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         cart,
// //         isCartOpen,
// //         setIsCartOpen,
// //         addToCart,
// //         removeFromCart,
// //         updateCartQuantity,
// //         clearCart,
// //         getCartTotal,
// //         getTotalItems,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // // Custom hook to use cart - Export this
// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error("useCart must be used within a CartProvider");
// //   }
// //   return context;
// // };

// // const Products = () => {
// //   const { isDarkMode, toggleTheme } = useContext(ThemeContext);
// //   const {
// //     cart,
// //     isCartOpen,
// //     setIsCartOpen,
// //     addToCart,
// //     removeFromCart,
// //     updateCartQuantity,
// //     clearCart,
// //     getCartTotal,
// //     getTotalItems,
// //   } = useCart();

// //   // Enhanced product data with working images
// //   const productData = {
// //     categories: [
// //       {
// //         id: "industrial",
// //         name: "Industrial Chemicals",
// //         description:
// //           "High-purity acids, solvents, and cleaning agents for manufacturing processes",
// //         icon: "⚗️",
// //         color: "bg-blue-500 dark:bg-blue-600",
// //         image:
// //           "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400",
// //         applications: [
// //           "Metal processing",
// //           "Textile manufacturing",
// //           "Electronics",
// //           "Automotive",
// //         ],
// //       },
// //       {
// //         id: "specialty",
// //         name: "Specialty Chemicals",
// //         description:
// //           "Custom formulations and performance additives for specific applications",
// //         icon: "🧪",
// //         color: "bg-red-500 dark:bg-red-600",
// //         image:
// //           "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
// //         applications: ["Adhesives", "Coatings", "Polymers", "Water treatment"],
// //       },
// //       {
// //         id: "laboratory",
// //         name: "Laboratory Chemicals",
// //         description: "Analytical grade reagents and research chemicals for R&D",
// //         icon: "🔬",
// //         color: "bg-green-500 dark:bg-green-600",
// //         image:
// //           "https://images.unsplash.com/photo-1564444567045-db7c4b84d76e?w=400",
// //         applications: [
// //           "Research institutions",
// //           "Quality control",
// //           "Universities",
// //           "Pharma labs",
// //         ],
// //       },
// //       {
// //         id: "safety",
// //         name: "Safety Equipment",
// //         description: "Personal protective equipment and safety solutions",
// //         icon: "🛡️",
// //         color: "bg-orange-500 dark:bg-orange-600",
// //         image:
// //           "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400",
// //         applications: [
// //           "Laboratory safety",
// //           "Industrial protection",
// //           "Emergency response",
// //         ],
// //       },
// //     ],

// //     products: [
// //       {
// //         id: "h2so4-98",
// //         name: "Sulfuric Acid 98%",
// //         category: "industrial",
// //         formula: "H₂SO₄",
// //         casNumber: "7664-93-9",
// //         image:
// //           "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=300",
// //         description:
// //           "High purity sulfuric acid for industrial applications including metal processing, battery manufacturing, and chemical synthesis.",
// //         applications: [
// //           "Battery acid",
// //           "Metal etching",
// //           "Chemical synthesis",
// //           "Water treatment",
// //         ],
// //         safetyClass: "Corrosive",
// //         packaging: ["1L bottles", "5L containers", "25L drums", "1000L IBC"],
// //         price: "$45.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.8,
// //         reviews: 127,
// //         certifications: ["ISO 9001", "UN1830"],
// //         specifications: {
// //           purity: "98.0% min",
// //           density: "1.84 g/cm³",
// //           boilingPoint: "337°C",
// //           meltingPoint: "10°C",
// //           viscosity: "26.7 cP",
// //         },
// //       },
// //       {
// //         id: "ipa-999",
// //         name: "Isopropyl Alcohol 99.9%",
// //         category: "industrial",
// //         formula: "C₃H₈O",
// //         casNumber: "67-63-0",
// //         image:
// //           "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300",
// //         description:
// //           "Ultra-pure isopropyl alcohol for electronics cleaning, pharmaceuticals, and laboratory applications.",
// //         applications: [
// //           "Electronics cleaning",
// //           "Disinfectant",
// //           "Solvent",
// //           "Pharmaceutical intermediate",
// //         ],
// //         safetyClass: "Flammable",
// //         packaging: [
// //           "250ml bottles",
// //           "1L bottles",
// //           "4L containers",
// //           "200L drums",
// //         ],
// //         price: "$28.50",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.9,
// //         reviews: 203,
// //         certifications: ["USP Grade", "GMP"],
// //         specifications: {
// //           purity: "99.9% min",
// //           density: "0.786 g/cm³",
// //           boilingPoint: "82.6°C",
// //           flashPoint: "11.7°C",
// //           waterContent: "0.1% max",
// //         },
// //       },
// //       {
// //         id: "naoh-pellets",
// //         name: "Sodium Hydroxide Pellets",
// //         category: "industrial",
// //         formula: "NaOH",
// //         casNumber: "1310-73-2",
// //         image:
// //           "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
// //         description:
// //           "High-grade caustic soda pellets for soap manufacturing, water treatment, and chemical processing.",
// //         applications: [
// //           "Soap production",
// //           "pH adjustment",
// //           "Pulp & paper",
// //           "Aluminum processing",
// //         ],
// //         safetyClass: "Corrosive",
// //         packaging: ["1kg bags", "25kg bags", "500kg big bags", "Bulk delivery"],
// //         price: "$32.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.7,
// //         reviews: 89,
// //         certifications: ["Food Grade", "Technical Grade"],
// //         specifications: {
// //           purity: "99.0% min",
// //           moisture: "0.5% max",
// //           carbonates: "0.8% max",
// //           chlorides: "0.005% max",
// //           ironContent: "0.001% max",
// //         },
// //       },
// //       {
// //         id: "acetone-tech",
// //         name: "Acetone Technical Grade",
// //         category: "industrial",
// //         formula: "C₃H₆O",
// //         casNumber: "67-64-1",
// //         image:
// //           "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300",
// //         description:
// //           "Technical grade acetone for use as solvent in paint, coatings, and adhesive formulations.",
// //         applications: [
// //           "Paint thinner",
// //           "Adhesive solvent",
// //           "Cleaning agent",
// //           "Plastic production",
// //         ],
// //         safetyClass: "Flammable",
// //         packaging: ["1L bottles", "5L containers", "25L drums", "200L drums"],
// //         price: "$22.75",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.6,
// //         reviews: 156,
// //         certifications: ["Technical Grade", "ASTM D329"],
// //         specifications: {
// //           purity: "99.5% min",
// //           density: "0.791 g/cm³",
// //           boilingPoint: "56.05°C",
// //           flashPoint: "-20°C",
// //           residue: "0.01% max",
// //         },
// //       },
// //       {
// //         id: "polyurethane-catalyst",
// //         name: "Polyurethane Catalyst DABCO T-12",
// //         category: "specialty",
// //         formula: "C₈H₁₂Sn",
// //         casNumber: "77-58-7",
// //         image:
// //           "https://images.unsplash.com/photo-1574781330855-d0db13d25483?w=300",
// //         description:
// //           "High-performance tin catalyst for polyurethane foam and coating applications.",
// //         applications: ["Flexible foam", "Rigid foam", "Coatings", "Adhesives"],
// //         safetyClass: "Toxic",
// //         packaging: ["1kg bottles", "5kg containers", "25kg drums"],
// //         price: "$185.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.9,
// //         reviews: 67,
// //         certifications: ["REACH Compliant", "ISO 14001"],
// //         specifications: {
// //           tinContent: "28.5% min",
// //           viscosity: "2.5-3.5 cSt",
// //           density: "1.25 g/cm³",
// //           flashPoint: "93°C",
// //           pourPoint: "-10°C max",
// //         },
// //       },
// //       {
// //         id: "antioxidant-bht",
// //         name: "Antioxidant BHT (Butylated Hydroxytoluene)",
// //         category: "specialty",
// //         formula: "C₁₅H₂₄O",
// //         casNumber: "128-37-0",
// //         image:
// //           "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300",
// //         description:
// //           "Primary antioxidant for polymers, rubber, and petroleum products to prevent oxidative degradation.",
// //         applications: [
// //           "Plastic additives",
// //           "Rubber stabilization",
// //           "Food packaging",
// //           "Fuel additives",
// //         ],
// //         safetyClass: "Irritant",
// //         packaging: ["25kg bags", "500kg big bags", "1000kg containers"],
// //         price: "$95.50",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.8,
// //         reviews: 134,
// //         certifications: ["Food Grade", "FDA Approved"],
// //         specifications: {
// //           purity: "99.0% min",
// //           meltingPoint: "69-71°C",
// //           ashContent: "0.1% max",
// //           heavyMetals: "10ppm max",
// //           phenolicContent: "99.0% min",
// //         },
// //       },
// //       {
// //         id: "analytical-hcl",
// //         name: "Hydrochloric Acid Analytical Grade",
// //         category: "laboratory",
// //         formula: "HCl",
// //         casNumber: "7647-01-0",
// //         image:
// //           "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=300",
// //         description:
// //           "Ultra-pure hydrochloric acid for analytical chemistry, pH adjustment, and laboratory applications.",
// //         applications: [
// //           "Analytical chemistry",
// //           "pH adjustment",
// //           "Digestion",
// //           "Titrations",
// //         ],
// //         safetyClass: "Corrosive",
// //         packaging: ["500ml bottles", "2.5L bottles", "10L containers"],
// //         price: "$42.00",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.9,
// //         reviews: 298,
// //         certifications: ["ACS Grade", "Reagent Grade"],
// //         specifications: {
// //           purity: "37.0% min",
// //           residue: "5ppm max",
// //           sulfate: "2ppm max",
// //           heavyMetals: "1ppm max",
// //           ironContent: "0.2ppm max",
// //         },
// //       },
// //       {
// //         id: "methanol-hplc",
// //         name: "Methanol HPLC Grade",
// //         category: "laboratory",
// //         formula: "CH₃OH",
// //         casNumber: "67-56-1",
// //         image:
// //           "https://images.unsplash.com/photo-1516737488405-d1d6b1c7d3b4?w=300",
// //         description:
// //           "High-purity methanol suitable for HPLC, spectroscopy, and analytical applications.",
// //         applications: [
// //           "HPLC mobile phase",
// //           "Spectroscopy",
// //           "Extraction",
// //           "Sample preparation",
// //         ],
// //         safetyClass: "Toxic/Flammable",
// //         packaging: ["1L bottles", "4L bottles", "200L drums"],
// //         price: "$38.25",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.7,
// //         reviews: 187,
// //         certifications: ["HPLC Grade", "Spectroscopic Grade"],
// //         specifications: {
// //           purity: "99.9% min",
// //           water: "0.1% max",
// //           residue: "5ppm max",
// //           uvTransmission: "100% at 400nm",
// //           acidity: "0.0008 meq/g max",
// //         },
// //       },
// //       {
// //         id: "safety-goggles",
// //         name: "Chemical Safety Goggles",
// //         category: "safety",
// //         formula: "N/A",
// //         casNumber: "N/A",
// //         image:
// //           "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300",
// //         description:
// //           "Anti-fog chemical splash goggles with indirect ventilation for laboratory and industrial use.",
// //         applications: [
// //           "Chemical handling",
// //           "Laboratory work",
// //           "Industrial processing",
// //           "Cleaning operations",
// //         ],
// //         safetyClass: "PPE",
// //         packaging: ["Individual units", "12-pack boxes", "100-unit cases"],
// //         price: "$24.50",
// //         inStock: true,
// //         featured: true,
// //         rating: 4.6,
// //         reviews: 412,
// //         certifications: ["ANSI Z87.1", "CE Marked"],
// //         specifications: {
// //           standard: "ANSI Z87.1",
// //           lensType: "Polycarbonate",
// //           coating: "Anti-fog",
// //           ventilation: "Indirect",
// //           uvProtection: "99.9%",
// //         },
// //       },
// //       {
// //         id: "nitrile-gloves",
// //         name: "Chemical Resistant Nitrile Gloves",
// //         category: "safety",
// //         formula: "N/A",
// //         casNumber: "N/A",
// //         image:
// //           "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300",
// //         description:
// //           "Powder-free nitrile examination gloves with excellent chemical resistance and tactile sensitivity.",
// //         applications: [
// //           "Chemical handling",
// //           "Laboratory analysis",
// //           "Sample preparation",
// //           "Quality control",
// //         ],
// //         safetyClass: "PPE",
// //         packaging: ["100-glove boxes", "1000-glove cases", "Bulk packaging"],
// //         price: "$18.75",
// //         inStock: true,
// //         featured: false,
// //         rating: 4.8,
// //         reviews: 567,
// //         certifications: ["FDA Approved", "ASTM D6319"],
// //         specifications: {
// //           thickness: "5-6 mil",
// //           length: "240mm min",
// //           standard: "ASTM D6319",
// //           powder: "Powder-free",
// //           aql: "1.5",
// //         },
// //       },
// //     ],
// //   };

// //   // Enhanced state management
// //   const [currentFilter, setCurrentFilter] = useState("all");
// //   const [filteredProducts, setFilteredProducts] = useState(
// //     productData.products
// //   );
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [sortBy, setSortBy] = useState("name");
// //   const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
// //   const [priceRange, setPriceRange] = useState([0, 200]);
// //   const [wishlist, setWishlist] = useState([]);
// //   const [viewMode, setViewMode] = useState("grid"); // grid or list

// //   // Wishlist functionality
// //   const toggleWishlist = (product) => {
// //     const isWishlisted = wishlist.some((item) => item.id === product.id);
// //     if (isWishlisted) {
// //       setWishlist(wishlist.filter((item) => item.id !== product.id));
// //     } else {
// //       setWishlist([...wishlist, product]);
// //     }
// //   };

// //   // Enhanced filtering and sorting
// //   const applyFiltersAndSort = () => {
// //     let products = [...productData.products];

// //     // Filter by category
// //     if (currentFilter !== "all") {
// //       products = products.filter(
// //         (product) => product.category === currentFilter
// //       );
// //     }

// //     // Filter by search query
// //     if (searchQuery) {
// //       products = products.filter(
// //         (product) =>
// //           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           product.description
// //             .toLowerCase()
// //             .includes(searchQuery.toLowerCase()) ||
// //           product.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           product.casNumber.includes(searchQuery) ||
// //           product.applications.some((app) =>
// //             app.toLowerCase().includes(searchQuery.toLowerCase())
// //           )
// //       );
// //     }

// //     // Filter by featured
// //     if (showFeaturedOnly) {
// //       products = products.filter((product) => product.featured);
// //     }

// //     // Filter by price range
// //     products = products.filter((product) => {
// //       const price = parseFloat(product.price.replace("$", ""));
// //       return price >= priceRange[0] && price <= priceRange[1];
// //     });

// //     // Sort products
// //     products.sort((a, b) => {
// //       switch (sortBy) {
// //         case "name":
// //           return a.name.localeCompare(b.name);
// //         case "price-low":
// //           return (
// //             parseFloat(a.price.replace("$", "")) -
// //             parseFloat(b.price.replace("$", ""))
// //           );
// //         case "price-high":
// //           return (
// //             parseFloat(b.price.replace("$", "")) -
// //             parseFloat(a.price.replace("$", ""))
// //           );
// //         case "rating":
// //           return b.rating - a.rating;
// //         case "featured":
// //           return b.featured - a.featured;
// //         default:
// //           return 0;
// //       }
// //     });

// //     setFilteredProducts(products);
// //   };

// //   // Filter products by category
// //   const filterProducts = (category) => {
// //     setCurrentFilter(category);
// //   };

// //   // Search products
// //   const handleSearch = (query) => {
// //     setSearchQuery(query);
// //   };

// //   // Show product details modal
// //   const showProductDetails = (product) => {
// //     setSelectedProduct(product);
// //     setIsModalOpen(true);
// //     setIsCartOpen(false);
// //     document.body.style.overflow = "hidden";
// //   };

// //   // Close modal
// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedProduct(null);
// //     document.body.style.overflow = "auto";
// //   };

// //   // Get safety class color
// //   const getSafetyClassColor = (safetyClass) => {
// //     const colors = {
// //       Corrosive: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
// //       Flammable:
// //         "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20",
// //       Toxic:
// //         "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20",
// //       "Toxic/Flammable":
// //         "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
// //       Irritant:
// //         "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20",
// //       PPE: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20",
// //       "Non-hazardous":
// //         "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20",
// //     };
// //     return (
// //       colors[safetyClass] ||
// //       "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800"
// //     );
// //   };

// //   // Download SDS
// //   const downloadSDS = () => {
// //     alert(
// //       "Safety Data Sheet download initiated. The document will be available shortly."
// //     );
// //   };

// //   // Request quote
// //   const requestQuote = (productName) => {
// //     alert(
// //       `Quote request initiated for ${productName}. Our sales team will contact you shortly.`
// //     );
// //   };

// //   // Bulk order
// //   const initiateBulkOrder = () => {
// //     if (cart.length === 0) {
// //       alert("Please add items to your cart before requesting a bulk order.");
// //       return;
// //     }
// //     alert(
// //       `Bulk order request initiated for ${
// //         cart.length
// //       } items. Total: $${getCartTotal()}. Our sales team will contact you shortly.`
// //     );
// //   };

// //   // Apply filters on state changes
// //   useEffect(() => {
// //     applyFiltersAndSort();
// //   }, [currentFilter, searchQuery, showFeaturedOnly, sortBy, priceRange]);

// //   // Example user and authentication state for Navbar
// //   const [isAuthenticated, setIsAuthenticated] = useState(true);
// //   const [user, setUser] = useState({
// //     name: "John Doe",
// //     email: "john@example.com",
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
// //       {/* Navbar with shared cart functionality */}
// //       <Navbar
// //         isAuthenticated={isAuthenticated}
// //         user={user}
// //         onLogout={() => {
// //           setIsAuthenticated(false);
// //           setUser(null);
// //         }}
// //       />

// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Hero Section with Background Image */}
// //         <div className="relative rounded-2xl overflow-hidden mb-12">
// //           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90 dark:from-blue-800/90 dark:to-purple-900/90"></div>
// //           <div className="relative px-8 py-16 text-center text-white">
// //             <h2 className="text-5xl font-bold mb-4">
// //               Chemical Products Catalog
// //             </h2>
// //             <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
// //               Comprehensive range of high-quality chemicals for industrial,
// //               laboratory, and specialty applications
// //             </p>
// //             <div className="flex justify-center space-x-4">
// //               <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
// //                 Download Catalog
// //               </button>
// //               <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
// //                 Contact Sales
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Enhanced Stats Section */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               {filteredProducts.length}
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">
// //               Products Found
// //             </div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               4
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">Categories</div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               25+
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">
// //               Countries Served
// //             </div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
// //             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// //               ISO 9001
// //             </div>
// //             <div className="text-gray-600 dark:text-gray-400">Certified</div>
// //           </div>
// //         </div>

// //         {/* Enhanced Categories Section */}
// //         <section className="mb-12">
// //           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
// //             Product Categories
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {productData.categories.map((category) => (
// //               <div
// //                 key={category.id}
// //                 onClick={() => filterProducts(category.id)}
// //                 className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
// //               >
// //                 <div className="aspect-w-16 aspect-h-9">
// //                   <img
// //                     src={category.image}
// //                     alt={category.name}
// //                     className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
// //                   />
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="text-center">
// //                     <div className="text-4xl mb-4">{category.icon}</div>
// //                     <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                       {category.name}
// //                     </h4>
// //                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
// //                       {category.description}
// //                     </p>
// //                     <div className="flex flex-wrap gap-2 justify-center">
// //                       {category.applications.slice(0, 2).map((app, idx) => (
// //                         <span
// //                           key={idx}
// //                           className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
// //                         >
// //                           {app}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Enhanced Filter and Sort Controls */}
// //         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
// //           <div className="flex flex-wrap gap-4 items-center justify-between">
// //             <div className="flex flex-wrap gap-4 items-center">
// //               <div className="flex items-center space-x-2">
// //                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                   Sort by:
// //                 </label>
// //                 <select
// //                   value={sortBy}
// //                   onChange={(e) => setSortBy(e.target.value)}
// //                   className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
// //                 >
// //                   <option value="name">Name</option>
// //                   <option value="price-low">Price: Low to High</option>
// //                   <option value="price-high">Price: High to Low</option>
// //                   <option value="rating">Rating</option>
// //                   <option value="featured">Featured</option>
// //                 </select>
// //               </div>

// //               <label className="flex items-center space-x-2 cursor-pointer">
// //                 <input
// //                   type="checkbox"
// //                   checked={showFeaturedOnly}
// //                   onChange={(e) => setShowFeaturedOnly(e.target.checked)}
// //                   className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
// //                 />
// //                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                   Featured Only
// //                 </span>
// //               </label>
// //             </div>

// //             <div className="flex items-center space-x-4">
// //               <div className="flex items-center space-x-2">
// //                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                   View:
// //                 </span>
// //                 <button
// //                   onClick={() => setViewMode("grid")}
// //                   className={`p-2 rounded-lg ${
// //                     viewMode === "grid"
// //                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
// //                       : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
// //                   }`}
// //                 >
// //                   <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
// //                     />
// //                   </svg>
// //                 </button>
// //                 <button
// //                   onClick={() => setViewMode("list")}
// //                   className={`p-2 rounded-lg ${
// //                     viewMode === "list"
// //                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
// //                       : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
// //                   }`}
// //                 >
// //                   <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 10h16M4 14h16M4 18h16"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>

// //               <button
// //                 onClick={initiateBulkOrder}
// //                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
// //               >
// //                 Bulk Order ({getTotalItems()})
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Products Section */}
// //         <section>
// //           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
// //             {currentFilter === "all"
// //               ? "All Products"
// //               : `${
// //                   productData.categories.find((c) => c.id === currentFilter)
// //                     ?.name || "Products"
// //                 }`}
// //           </h3>

// //           {viewMode === "grid" ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {filteredProducts.map((product) => (
// //                 <div
// //                   key={product.id}
// //                   className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
// //                 >
// //                   {/* Product Image */}
// //                   <div className="relative aspect-w-16 aspect-h-9">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
// //                     />
// //                     <div className="absolute top-4 left-4 flex space-x-2">
// //                       {product.featured && (
// //                         <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
// //                           ⭐ Featured
// //                         </span>
// //                       )}
// //                       {product.inStock ? (
// //                         <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
// //                           ✅ In Stock
// //                         </span>
// //                       ) : (
// //                         <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
// //                           ❌ Out of Stock
// //                         </span>
// //                       )}
// //                     </div>
// //                     <div className="absolute top-4 right-4">
// //                       <button
// //                         onClick={() => toggleWishlist(product)}
// //                         className={`p-2 rounded-full ${
// //                           wishlist.some((item) => item.id === product.id)
// //                             ? "bg-red-500 text-white"
// //                             : "bg-white text-gray-400 hover:text-red-500"
// //                         } transition-colors`}
// //                       >
// //                         <svg
// //                           className="w-5 h-5"
// //                           fill={
// //                             wishlist.some((item) => item.id === product.id)
// //                               ? "currentColor"
// //                               : "none"
// //                           }
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
// //                           />
// //                         </svg>
// //                       </button>
// //                     </div>
// //                   </div>

// //                   <div className="p-6">
// //                     <div className="flex justify-between items-start mb-4">
// //                       <div className="flex-1">
// //                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                           {product.name}
// //                         </h4>
// //                         <div className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
// //                           {product.formula}
// //                         </div>
// //                       </div>
// //                       <div className="text-right">
// //                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">
// //                           {product.price}
// //                         </div>
// //                         <div className="flex items-center text-yellow-500 text-sm">
// //                           <svg
// //                             className="w-4 h-4 mr-1"
// //                             fill="currentColor"
// //                             viewBox="0 0 20 20"
// //                           >
// //                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                           </svg>
// //                           {product.rating} ({product.reviews})
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
// //                       {product.description}
// //                     </p>

// //                     <div className="space-y-3 mb-4">
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500 dark:text-gray-400">
// //                           CAS Number:
// //                         </span>
// //                         <span className="font-medium text-gray-900 dark:text-white">
// //                           {product.casNumber}
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500 dark:text-gray-400">
// //                           Safety Class:
// //                         </span>
// //                         <span
// //                           className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
// //                             product.safetyClass
// //                           )}`}
// //                         >
// //                           {product.safetyClass}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="mb-6">
// //                       <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">
// //                         Applications:
// //                       </div>
// //                       <div className="flex flex-wrap gap-2">
// //                         {product.applications.slice(0, 3).map((app, idx) => (
// //                           <span
// //                             key={idx}
// //                             className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
// //                           >
// //                             {app}
// //                           </span>
// //                         ))}
// //                         {product.applications.length > 3 && (
// //                           <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
// //                             +{product.applications.length - 3} more
// //                           </span>
// //                         )}
// //                       </div>
// //                     </div>

// //                     <div className="flex space-x-3">
// //                       <button
// //                         onClick={() => showProductDetails(product)}
// //                         className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
// //                       >
// //                         View Details
// //                       </button>
// //                       <button
// //                         onClick={() => addToCart(product)}
// //                         className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
// //                       >
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             // List View
// //             <div className="space-y-4">
// //               {filteredProducts.map((product) => (
// //                 <div
// //                   key={product.id}
// //                   className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300"
// //                 >
// //                   <div className="flex items-center space-x-6">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-24 h-24 object-cover rounded-lg"
// //                     />
// //                     <div className="flex-1">
// //                       <div className="flex justify-between items-start mb-2">
// //                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
// //                           {product.name}
// //                         </h4>
// //                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">
// //                           {product.price}
// //                         </div>
// //                       </div>
// //                       <div className="flex items-center space-x-4 mb-2">
// //                         <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
// //                           {product.formula}
// //                         </span>
// //                         <span
// //                           className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
// //                             product.safetyClass
// //                           )}`}
// //                         >
// //                           {product.safetyClass}
// //                         </span>
// //                         <div className="flex items-center text-yellow-500 text-sm">
// //                           <svg
// //                             className="w-4 h-4 mr-1"
// //                             fill="currentColor"
// //                             viewBox="0 0 20 20"
// //                           >
// //                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                           </svg>
// //                           {product.rating} ({product.reviews})
// //                         </div>
// //                       </div>
// //                       <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
// //                         {product.description}
// //                       </p>
// //                       <div className="flex items-center justify-between">
// //                         <div className="flex flex-wrap gap-2">
// //                           {product.applications.slice(0, 3).map((app, idx) => (
// //                             <span
// //                               key={idx}
// //                               className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
// //                             >
// //                               {app}
// //                             </span>
// //                           ))}
// //                         </div>
// //                         <div className="flex space-x-3">
// //                           <button
// //                             onClick={() => showProductDetails(product)}
// //                             className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
// //                           >
// //                             Details
// //                           </button>
// //                           <button
// //                             onClick={() => addToCart(product)}
// //                             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
// //                           >
// //                             Add to Cart
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}

// //           {filteredProducts.length === 0 && (
// //             <div className="text-center py-20">
// //               <div className="text-gray-400 dark:text-gray-500 text-8xl mb-6">
// //                 🔍
// //               </div>
// //               <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
// //                 No products found
// //               </h3>
// //               <p className="text-gray-600 dark:text-gray-400 text-lg">
// //                 Try adjusting your search or filter criteria
// //               </p>
// //             </div>
// //           )}
// //         </section>
// //       </main>

// //       {/* Enhanced Product Detail Modal */}
// //       {isModalOpen && selectedProduct && (
// //         <div className="fixed inset-0 bg-black/70 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
// //             <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
// //               <div>
// //                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
// //                   {selectedProduct.name}
// //                 </h3>
// //                 <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
// //                   {selectedProduct.formula}
// //                 </p>
// //               </div>
// //               <button
// //                 onClick={closeModal}
// //                 className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
// //               >
// //                 <svg
// //                   className="w-8 h-8"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>

// //             <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
// //               <div className="p-8">
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
// //                   <div>
// //                     <img
// //                       src={selectedProduct.image}
// //                       alt={selectedProduct.name}
// //                       className="w-full h-80 object-cover rounded-xl"
// //                     />
// //                   </div>
// //                   <div className="space-y-6">
// //                     <div className="flex items-center justify-between">
// //                       <div className="text-4xl font-bold text-green-600 dark:text-green-400">
// //                         {selectedProduct.price}
// //                       </div>
// //                       <div className="flex items-center text-yellow-500">
// //                         <svg
// //                           className="w-6 h-6 mr-2"
// //                           fill="currentColor"
// //                           viewBox="0 0 20 20"
// //                         >
// //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                         </svg>
// //                         <span className="text-lg font-semibold">
// //                           {selectedProduct.rating}
// //                         </span>
// //                         <span className="text-gray-600 dark:text-gray-400 ml-2">
// //                           ({selectedProduct.reviews} reviews)
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="grid grid-cols-2 gap-4">
// //                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
// //                         <div className="font-semibold text-gray-900 dark:text-white mb-1">
// //                           CAS Number
// //                         </div>
// //                         <div className="text-gray-600 dark:text-gray-400">
// //                           {selectedProduct.casNumber}
// //                         </div>
// //                       </div>
// //                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
// //                         <div className="font-semibold text-gray-900 dark:text-white mb-1">
// //                           Safety Class
// //                         </div>
// //                         <span
// //                           className={`px-3 py-1 rounded-full text-sm font-medium ${getSafetyClassColor(
// //                             selectedProduct.safetyClass
// //                           )}`}
// //                         >
// //                           {selectedProduct.safetyClass}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
// //                         Certifications
// //                       </h4>
// //                       <div className="flex flex-wrap gap-2">
// //                         {selectedProduct.certifications.map((cert, idx) => (
// //                           <span
// //                             key={idx}
// //                             className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
// //                           >
// //                             {cert}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Description */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
// //                     Description
// //                   </h4>
// //                   <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
// //                     {selectedProduct.description}
// //                   </p>
// //                 </div>

// //                 {/* Technical Specifications */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
// //                     Technical Specifications
// //                   </h4>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                     {Object.entries(selectedProduct.specifications).map(
// //                       ([key, value]) => (
// //                         <div
// //                           key={key}
// //                           className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
// //                         >
// //                           <div className="font-semibold text-gray-900 dark:text-white mb-1">
// //                             {key
// //                               .replace(/([A-Z])/g, " $1")
// //                               .replace(/^./, (str) => str.toUpperCase())}
// //                           </div>
// //                           <div className="font-mono text-gray-600 dark:text-gray-400">
// //                             {value}
// //                           </div>
// //                         </div>
// //                       )
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Available Packaging */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
// //                     Available Packaging
// //                   </h4>
// //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                     {selectedProduct.packaging.map((pkg, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-400 p-4 rounded-xl text-center font-semibold"
// //                       >
// //                         {pkg}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Applications */}
// //                 <div className="mb-8">
// //                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
// //                     Applications
// //                   </h4>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     {selectedProduct.applications.map((app, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border-l-4 border-blue-500 dark:border-blue-400"
// //                       >
// //                         <div className="flex items-center">
// //                           <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
// //                           <span className="text-gray-800 dark:text-gray-200 font-medium">
// //                             {app}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
// //               <button
// //                 onClick={closeModal}
// //                 className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
// //               >
// //                 Close
// //               </button>
// //               <div className="flex space-x-4">
// //                 <button
// //                   onClick={downloadSDS}
// //                   className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium"
// //                 >
// //                   📄 Download SDS
// //                 </button>
// //                 <button
// //                   onClick={() => addToCart(selectedProduct)}
// //                   className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
// //                 >
// //                   🛒 Add to Cart
// //                 </button>
// //                 <button
// //                   onClick={() => requestQuote(selectedProduct.name)}
// //                   className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
// //                 >
// //                   💬 Request Quote
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Mobile Category Filter */}
// //       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-30">
// //         <div className="flex space-x-2 overflow-x-auto pb-2">
// //           <button
// //             onClick={() => filterProducts("all")}
// //             className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
// //               currentFilter === "all"
// //                 ? "bg-blue-600 text-white"
// //                 : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
// //             }`}
// //           >
// //             All
// //           </button>
// //           {productData.categories.map((category) => (
// //             <button
// //               key={category.id}
// //               onClick={() => filterProducts(category.id)}
// //               className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
// //                 currentFilter === category.id
// //                   ? "bg-blue-600 text-white"
// //                   : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
// //               }`}
// //             >
// //               {category.icon} {category.name}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Floating Cart Summary */}
// //       {!isCartOpen && cart.length > 0 && (
// //         <div className="fixed bottom-20 lg:bottom-6 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 z-40 max-w-sm">
// //           <div className="flex items-center justify-between mb-3">
// //             <h4 className="font-semibold text-gray-900 dark:text-white">
// //               Cart Summary
// //             </h4>
// //             <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-medium">
// //               {getTotalItems()} items
// //             </span>
// //           </div>
// //           <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
// //             Total: ${getCartTotal()}
// //           </div>
// //           <div className="space-y-2">
// //             {cart.slice(0, 3).map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="flex justify-between items-center text-sm"
// //               >
// //                 <span className="text-gray-600 dark:text-gray-400 truncate">
// //                   {item.name}
// //                 </span>
// //                 <span className="text-gray-900 dark:text-white font-medium">
// //                   ×{item.quantity}
// //                 </span>
// //               </div>
// //             ))}
// //             {cart.length > 3 && (
// //               <div className="text-center text-xs text-gray-500 dark:text-gray-400">
// //                 +{cart.length - 3} more items
// //               </div>
// //             )}
// //           </div>
// //           <button
// //             onClick={() => setIsCartOpen(true)}
// //             className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium mt-4 transition-colors"
// //           >
// //             View Full Cart
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Main App Component
// // const App = () => {
// //   return (
// //     <ThemeProvider>
// //       <CartProvider>
// //         <Products />
// //       </CartProvider>
// //     </ThemeProvider>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect, useContext, createContext } from "react";
// import Navbar from "../components/Navbar";

// // Theme Context
// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark", !isDarkMode);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

//     setIsDarkMode(shouldBeDark);
//     document.documentElement.classList.toggle("dark", shouldBeDark);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Cart Context - Export this so Navbar can use it
// export const CartContext = createContext();

// // Cart Provider Component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("chemicalCart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Save cart to localStorage whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("chemicalCart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product, quantity = 1) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity }]);
//     }
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   const updateCartQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
//     setCart(
//       cart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getCartTotal = () => {
//     return cart
//       .reduce((total, item) => {
//         const price = parseFloat(item.price.replace("$", ""));
//         return total + price * item.quantity;
//       }, 0)
//       .toFixed(2);
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         isCartOpen,
//         setIsCartOpen,
//         addToCart,
//         removeFromCart,
//         updateCartQuantity,
//         clearCart,
//         getCartTotal,
//         getTotalItems,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use cart - Export this
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// const Products = () => {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);
//   const {
//     cart,
//     isCartOpen,
//     setIsCartOpen,
//     addToCart,
//     removeFromCart,
//     updateCartQuantity,
//     clearCart,
//     getCartTotal,
//     getTotalItems,
//   } = useCart();

//   // Enhanced product data with working images
//   const productData = {
//     categories: [
//       {
//         id: "industrial",
//         name: "Industrial Chemicals",
//         description:
//           "High-purity acids, solvents, and cleaning agents for manufacturing processes",
//         icon: "⚗️",
//         color: "bg-blue-500 dark:bg-blue-600",
//         image:
//           "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400",
//         applications: [
//           "Metal processing",
//           "Textile manufacturing",
//           "Electronics",
//           "Automotive",
//         ],
//       },
//       {
//         id: "specialty",
//         name: "Specialty Chemicals",
//         description:
//           "Custom formulations and performance additives for specific applications",
//         icon: "🧪",
//         color: "bg-red-500 dark:bg-red-600",
//         image:
//           "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
//         applications: ["Adhesives", "Coatings", "Polymers", "Water treatment"],
//       },
//       {
//         id: "laboratory",
//         name: "Laboratory Chemicals",
//         description: "Analytical grade reagents and research chemicals for R&D",
//         icon: "🔬",
//         color: "bg-green-500 dark:bg-green-600",
//         image:
//           "https://images.unsplash.com/photo-1564444567045-db7c4b84d76e?w=400",
//         applications: [
//           "Research institutions",
//           "Quality control",
//           "Universities",
//           "Pharma labs",
//         ],
//       },
//       {
//         id: "safety",
//         name: "Safety Equipment",
//         description: "Personal protective equipment and safety solutions",
//         icon: "🛡️",
//         color: "bg-orange-500 dark:bg-orange-600",
//         image:
//           "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400",
//         applications: [
//           "Laboratory safety",
//           "Industrial protection",
//           "Emergency response",
//         ],
//       },
//     ],

//     products: [
//       {
//         id: "h2so4-98",
//         name: "Sulfuric Acid 98%",
//         category: "industrial",
//         formula: "H₂SO₄",
//         casNumber: "7664-93-9",
//         image:
//           "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=300",
//         description:
//           "High purity sulfuric acid for industrial applications including metal processing, battery manufacturing, and chemical synthesis.",
//         applications: [
//           "Battery acid",
//           "Metal etching",
//           "Chemical synthesis",
//           "Water treatment",
//         ],
//         safetyClass: "Corrosive",
//         packaging: ["1L bottles", "5L containers", "25L drums", "1000L IBC"],
//         price: "$45.00",
//         inStock: true,
//         featured: true,
//         rating: 4.8,
//         reviews: 127,
//         certifications: ["ISO 9001", "UN1830"],
//         specifications: {
//           purity: "98.0% min",
//           density: "1.84 g/cm³",
//           boilingPoint: "337°C",
//           meltingPoint: "10°C",
//           viscosity: "26.7 cP",
//         },
//       },
//       {
//         id: "ipa-999",
//         name: "Isopropyl Alcohol 99.9%",
//         category: "industrial",
//         formula: "C₃H₈O",
//         casNumber: "67-63-0",
//         image:
//           "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300",
//         description:
//           "Ultra-pure isopropyl alcohol for electronics cleaning, pharmaceuticals, and laboratory applications.",
//         applications: [
//           "Electronics cleaning",
//           "Disinfectant",
//           "Solvent",
//           "Pharmaceutical intermediate",
//         ],
//         safetyClass: "Flammable",
//         packaging: [
//           "250ml bottles",
//           "1L bottles",
//           "4L containers",
//           "200L drums",
//         ],
//         price: "$28.50",
//         inStock: true,
//         featured: false,
//         rating: 4.9,
//         reviews: 203,
//         certifications: ["USP Grade", "GMP"],
//         specifications: {
//           purity: "99.9% min",
//           density: "0.786 g/cm³",
//           boilingPoint: "82.6°C",
//           flashPoint: "11.7°C",
//           waterContent: "0.1% max",
//         },
//       },
//       {
//         id: "naoh-pellets",
//         name: "Sodium Hydroxide Pellets",
//         category: "industrial",
//         formula: "NaOH",
//         casNumber: "1310-73-2",
//         image:
//           "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
//         description:
//           "High-grade caustic soda pellets for soap manufacturing, water treatment, and chemical processing.",
//         applications: [
//           "Soap production",
//           "pH adjustment",
//           "Pulp & paper",
//           "Aluminum processing",
//         ],
//         safetyClass: "Corrosive",
//         packaging: ["1kg bags", "25kg bags", "500kg big bags", "Bulk delivery"],
//         price: "$32.00",
//         inStock: true,
//         featured: true,
//         rating: 4.7,
//         reviews: 89,
//         certifications: ["Food Grade", "Technical Grade"],
//         specifications: {
//           purity: "99.0% min",
//           moisture: "0.5% max",
//           carbonates: "0.8% max",
//           chlorides: "0.005% max",
//           ironContent: "0.001% max",
//         },
//       },
//       {
//         id: "acetone-tech",
//         name: "Acetone Technical Grade",
//         category: "industrial",
//         formula: "C₃H₆O",
//         casNumber: "67-64-1",
//         image:
//           "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300",
//         description:
//           "Technical grade acetone for use as solvent in paint, coatings, and adhesive formulations.",
//         applications: [
//           "Paint thinner",
//           "Adhesive solvent",
//           "Cleaning agent",
//           "Plastic production",
//         ],
//         safetyClass: "Flammable",
//         packaging: ["1L bottles", "5L containers", "25L drums", "200L drums"],
//         price: "$22.75",
//         inStock: true,
//         featured: false,
//         rating: 4.6,
//         reviews: 156,
//         certifications: ["Technical Grade", "ASTM D329"],
//         specifications: {
//           purity: "99.5% min",
//           density: "0.791 g/cm³",
//           boilingPoint: "56.05°C",
//           flashPoint: "-20°C",
//           residue: "0.01% max",
//         },
//       },
//       {
//         id: "polyurethane-catalyst",
//         name: "Polyurethane Catalyst DABCO T-12",
//         category: "specialty",
//         formula: "C₈H₁₂Sn",
//         casNumber: "77-58-7",
//         image:
//           "https://images.unsplash.com/photo-1574781330855-d0db13d25483?w=300",
//         description:
//           "High-performance tin catalyst for polyurethane foam and coating applications.",
//         applications: ["Flexible foam", "Rigid foam", "Coatings", "Adhesives"],
//         safetyClass: "Toxic",
//         packaging: ["1kg bottles", "5kg containers", "25kg drums"],
//         price: "$185.00",
//         inStock: true,
//         featured: true,
//         rating: 4.9,
//         reviews: 67,
//         certifications: ["REACH Compliant", "ISO 14001"],
//         specifications: {
//           tinContent: "28.5% min",
//           viscosity: "2.5-3.5 cSt",
//           density: "1.25 g/cm³",
//           flashPoint: "93°C",
//           pourPoint: "-10°C max",
//         },
//       },
//       {
//         id: "antioxidant-bht",
//         name: "Antioxidant BHT (Butylated Hydroxytoluene)",
//         category: "specialty",
//         formula: "C₁₅H₂₄O",
//         casNumber: "128-37-0",
//         image:
//           "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300",
//         description:
//           "Primary antioxidant for polymers, rubber, and petroleum products to prevent oxidative degradation.",
//         applications: [
//           "Plastic additives",
//           "Rubber stabilization",
//           "Food packaging",
//           "Fuel additives",
//         ],
//         safetyClass: "Irritant",
//         packaging: ["25kg bags", "500kg big bags", "1000kg containers"],
//         price: "$95.50",
//         inStock: true,
//         featured: false,
//         rating: 4.8,
//         reviews: 134,
//         certifications: ["Food Grade", "FDA Approved"],
//         specifications: {
//           purity: "99.0% min",
//           meltingPoint: "69-71°C",
//           ashContent: "0.1% max",
//           heavyMetals: "10ppm max",
//           phenolicContent: "99.0% min",
//         },
//       },
//       {
//         id: "analytical-hcl",
//         name: "Hydrochloric Acid Analytical Grade",
//         category: "laboratory",
//         formula: "HCl",
//         casNumber: "7647-01-0",
//         image:
//           "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=300",
//         description:
//           "Ultra-pure hydrochloric acid for analytical chemistry, pH adjustment, and laboratory applications.",
//         applications: [
//           "Analytical chemistry",
//           "pH adjustment",
//           "Digestion",
//           "Titrations",
//         ],
//         safetyClass: "Corrosive",
//         packaging: ["500ml bottles", "2.5L bottles", "10L containers"],
//         price: "$42.00",
//         inStock: true,
//         featured: true,
//         rating: 4.9,
//         reviews: 298,
//         certifications: ["ACS Grade", "Reagent Grade"],
//         specifications: {
//           purity: "37.0% min",
//           residue: "5ppm max",
//           sulfate: "2ppm max",
//           heavyMetals: "1ppm max",
//           ironContent: "0.2ppm max",
//         },
//       },
//       {
//         id: "methanol-hplc",
//         name: "Methanol HPLC Grade",
//         category: "laboratory",
//         formula: "CH₃OH",
//         casNumber: "67-56-1",
//         image:
//           "https://images.unsplash.com/photo-1516737488405-d1d6b1c7d3b4?w=300",
//         description:
//           "High-purity methanol suitable for HPLC, spectroscopy, and analytical applications.",
//         applications: [
//           "HPLC mobile phase",
//           "Spectroscopy",
//           "Extraction",
//           "Sample preparation",
//         ],
//         safetyClass: "Toxic/Flammable",
//         packaging: ["1L bottles", "4L bottles", "200L drums"],
//         price: "$38.25",
//         inStock: true,
//         featured: false,
//         rating: 4.7,
//         reviews: 187,
//         certifications: ["HPLC Grade", "Spectroscopic Grade"],
//         specifications: {
//           purity: "99.9% min",
//           water: "0.1% max",
//           residue: "5ppm max",
//           uvTransmission: "100% at 400nm",
//           acidity: "0.0008 meq/g max",
//         },
//       },
//       {
//         id: "safety-goggles",
//         name: "Chemical Safety Goggles",
//         category: "safety",
//         formula: "N/A",
//         casNumber: "N/A",
//         image:
//           "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300",
//         description:
//           "Anti-fog chemical splash goggles with indirect ventilation for laboratory and industrial use.",
//         applications: [
//           "Chemical handling",
//           "Laboratory work",
//           "Industrial processing",
//           "Cleaning operations",
//         ],
//         safetyClass: "PPE",
//         packaging: ["Individual units", "12-pack boxes", "100-unit cases"],
//         price: "$24.50",
//         inStock: true,
//         featured: true,
//         rating: 4.6,
//         reviews: 412,
//         certifications: ["ANSI Z87.1", "CE Marked"],
//         specifications: {
//           standard: "ANSI Z87.1",
//           lensType: "Polycarbonate",
//           coating: "Anti-fog",
//           ventilation: "Indirect",
//           uvProtection: "99.9%",
//         },
//       },
//       {
//         id: "nitrile-gloves",
//         name: "Chemical Resistant Nitrile Gloves",
//         category: "safety",
//         formula: "N/A",
//         casNumber: "N/A",
//         image:
//           "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300",
//         description:
//           "Powder-free nitrile examination gloves with excellent chemical resistance and tactile sensitivity.",
//         applications: [
//           "Chemical handling",
//           "Laboratory analysis",
//           "Sample preparation",
//           "Quality control",
//         ],
//         safetyClass: "PPE",
//         packaging: ["100-glove boxes", "1000-glove cases", "Bulk packaging"],
//         price: "$18.75",
//         inStock: true,
//         featured: false,
//         rating: 4.8,
//         reviews: 567,
//         certifications: ["FDA Approved", "ASTM D6319"],
//         specifications: {
//           thickness: "5-6 mil",
//           length: "240mm min",
//           standard: "ASTM D6319",
//           powder: "Powder-free",
//           aql: "1.5",
//         },
//       },
//     ],
//   };

//   // Enhanced state management
//   const [currentFilter, setCurrentFilter] = useState("all");
//   const [filteredProducts, setFilteredProducts] = useState(
//     productData.products
//   );
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [sortBy, setSortBy] = useState("name");
//   const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
//   const [priceRange, setPriceRange] = useState([0, 200]);
//   const [wishlist, setWishlist] = useState([]);
//   const [viewMode, setViewMode] = useState("grid"); // grid or list

//   // Wishlist functionality
//   const toggleWishlist = (product) => {
//     const isWishlisted = wishlist.some((item) => item.id === product.id);
//     if (isWishlisted) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   // Enhanced filtering and sorting
//   const applyFiltersAndSort = () => {
//     let products = [...productData.products];

//     // Filter by category
//     if (currentFilter !== "all") {
//       products = products.filter(
//         (product) => product.category === currentFilter
//       );
//     }

//     // Filter by search query
//     if (searchQuery) {
//       products = products.filter(
//         (product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           product.description
//             .toLowerCase()
//             .includes(searchQuery.toLowerCase()) ||
//           product.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           product.casNumber.includes(searchQuery) ||
//           product.applications.some((app) =>
//             app.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//       );
//     }

//     // Filter by featured
//     if (showFeaturedOnly) {
//       products = products.filter((product) => product.featured);
//     }

//     // Filter by price range
//     products = products.filter((product) => {
//       const price = parseFloat(product.price.replace("$", ""));
//       return price >= priceRange[0] && price <= priceRange[1];
//     });

//     // Sort products
//     products.sort((a, b) => {
//       switch (sortBy) {
//         case "name":
//           return a.name.localeCompare(b.name);
//         case "price-low":
//           return (
//             parseFloat(a.price.replace("$", "")) -
//             parseFloat(b.price.replace("$", ""))
//           );
//         case "price-high":
//           return (
//             parseFloat(b.price.replace("$", "")) -
//             parseFloat(a.price.replace("$", ""))
//           );
//         case "rating":
//           return b.rating - a.rating;
//         case "featured":
//           return b.featured - a.featured;
//         default:
//           return 0;
//       }
//     });

//     setFilteredProducts(products);
//   };

//   // Filter products by category
//   const filterProducts = (category) => {
//     setCurrentFilter(category);
//   };

//   // Search products
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Show product details modal
//   const showProductDetails = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//     setIsCartOpen(false);
//     document.body.style.overflow = "hidden";
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//     document.body.style.overflow = "auto";
//   };

//   // Get safety class color
//   const getSafetyClassColor = (safetyClass) => {
//     const colors = {
//       Corrosive: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
//       Flammable:
//         "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20",
//       Toxic:
//         "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20",
//       "Toxic/Flammable":
//         "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
//       Irritant:
//         "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20",
//       PPE: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20",
//       "Non-hazardous":
//         "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20",
//     };
//     return (
//       colors[safetyClass] ||
//       "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800"
//     );
//   };

//   // Download SDS
//   const downloadSDS = () => {
//     alert(
//       "Safety Data Sheet download initiated. The document will be available shortly."
//     );
//   };

//   // Request quote
//   const requestQuote = (productName) => {
//     alert(
//       `Quote request initiated for ${productName}. Our sales team will contact you shortly.`
//     );
//   };

//   // Bulk order
//   const initiateBulkOrder = () => {
//     if (cart.length === 0) {
//       alert("Please add items to your cart before requesting a bulk order.");
//       return;
//     }
//     alert(
//       `Bulk order request initiated for ${
//         cart.length
//       } items. Total: $${getCartTotal()}. Our sales team will contact you shortly.`
//     );
//   };

//   // Apply filters on state changes
//   useEffect(() => {
//     applyFiltersAndSort();
//   }, [currentFilter, searchQuery, showFeaturedOnly, sortBy, priceRange]);

//   // Example user and authentication state for Navbar
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       {/* Navbar with shared cart functionality */}
//       {/* <Navbar
//         isAuthenticated={isAuthenticated}
//         user={user}
//         onLogout={() => {
//           setIsAuthenticated(false);
//           setUser(null);
//         }}
//       /> */}

//       <Navbar
//         darkMode={isDarkMode}
//         toggleDarkMode={toggleTheme}
//         isAuthenticated={isAuthenticated} // Pass authentication status
//         user={user} // Pass user data with name and initials
//         onLogout={() => {
//           setIsAuthenticated(false);
//           setUser(null);
//         }}
//       />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Hero Section with Background Image */}
//         <div className="relative rounded-2xl overflow-hidden mb-12">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90 dark:from-blue-800/90 dark:to-purple-900/90"></div>
//           <div className="relative px-8 py-16 text-center text-white">
//             <h2 className="text-5xl font-bold mb-4">
//               Chemical Products Catalog
//             </h2>
//             <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
//               Comprehensive range of high-quality chemicals for industrial,
//               laboratory, and specialty applications
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
//                 Download Catalog
//               </button>
//               <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
//                 Contact Sales
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
//             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               {filteredProducts.length}
//             </div>
//             <div className="text-gray-600 dark:text-gray-400">
//               Products Found
//             </div>
//           </div>
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
//             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               4
//             </div>
//             <div className="text-gray-600 dark:text-gray-400">Categories</div>
//           </div>
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
//             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               25+
//             </div>
//             <div className="text-gray-600 dark:text-gray-400">
//               Countries Served
//             </div>
//           </div>
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
//             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               ISO 9001
//             </div>
//             <div className="text-gray-600 dark:text-gray-400">Certified</div>
//           </div>
//         </div>

//         {/* Enhanced Categories Section */}
//         <section className="mb-12">
//           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//             Product Categories
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {productData.categories.map((category) => (
//               <div
//                 key={category.id}
//                 onClick={() => filterProducts(category.id)}
//                 className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
//               >
//                 <div className="aspect-w-16 aspect-h-9">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="text-center">
//                     <div className="text-4xl mb-4">{category.icon}</div>
//                     <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                       {category.name}
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                       {category.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {category.applications.slice(0, 2).map((app, idx) => (
//                         <span
//                           key={idx}
//                           className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
//                         >
//                           {app}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Enhanced Filter and Sort Controls */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
//           <div className="flex flex-wrap gap-4 items-center justify-between">
//             <div className="flex flex-wrap gap-4 items-center">
//               <div className="flex items-center space-x-2">
//                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Sort by:
//                 </label>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                 >
//                   <option value="name">Name</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="rating">Rating</option>
//                   <option value="featured">Featured</option>
//                 </select>
//               </div>

//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={showFeaturedOnly}
//                   onChange={(e) => setShowFeaturedOnly(e.target.checked)}
//                   className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                 />
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Featured Only
//                 </span>
//               </label>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   View:
//                 </span>
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 rounded-lg ${
//                     viewMode === "grid"
//                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
//                       : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                   }`}
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 rounded-lg ${
//                     viewMode === "list"
//                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
//                       : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                   }`}
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 10h16M4 14h16M4 18h16"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <button
//                 onClick={initiateBulkOrder}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
//               >
//                 Bulk Order ({getTotalItems()})
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Products Section */}
//         <section>
//           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//             {currentFilter === "all"
//               ? "All Products"
//               : `${
//                   productData.categories.find((c) => c.id === currentFilter)
//                     ?.name || "Products"
//                 }`}
//           </h3>

//           {viewMode === "grid" ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
//                 >
//                   {/* Product Image */}
//                   <div className="relative aspect-w-16 aspect-h-9">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute top-4 left-4 flex space-x-2">
//                       {product.featured && (
//                         <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
//                           ⭐ Featured
//                         </span>
//                       )}
//                       {product.inStock ? (
//                         <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
//                           ✅ In Stock
//                         </span>
//                       ) : (
//                         <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
//                           ❌ Out of Stock
//                         </span>
//                       )}
//                     </div>
//                     <div className="absolute top-4 right-4">
//                       <button
//                         onClick={() => toggleWishlist(product)}
//                         className={`p-2 rounded-full ${
//                           wishlist.some((item) => item.id === product.id)
//                             ? "bg-red-500 text-white"
//                             : "bg-white text-gray-400 hover:text-red-500"
//                         } transition-colors`}
//                       >
//                         <svg
//                           className="w-5 h-5"
//                           fill={
//                             wishlist.some((item) => item.id === product.id)
//                               ? "currentColor"
//                               : "none"
//                           }
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex-1">
//                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                           {product.name}
//                         </h4>
//                         <div className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
//                           {product.formula}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">
//                           {product.price}
//                         </div>
//                         <div className="flex items-center text-yellow-500 text-sm">
//                           <svg
//                             className="w-4 h-4 mr-1"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                           {product.rating} ({product.reviews})
//                         </div>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
//                       {product.description}
//                     </p>

//                     <div className="space-y-3 mb-4">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500 dark:text-gray-400">
//                           CAS Number:
//                         </span>
//                         <span className="font-medium text-gray-900 dark:text-white">
//                           {product.casNumber}
//                         </span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500 dark:text-gray-400">
//                           Safety Class:
//                         </span>
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
//                             product.safetyClass
//                           )}`}
//                         >
//                           {product.safetyClass}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">
//                         Applications:
//                       </div>
//                       <div className="flex flex-wrap gap-2">
//                         {product.applications.slice(0, 3).map((app, idx) => (
//                           <span
//                             key={idx}
//                             className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
//                           >
//                             {app}
//                           </span>
//                         ))}
//                         {product.applications.length > 3 && (
//                           <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
//                             +{product.applications.length - 3} more
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex space-x-3">
//                       <button
//                         onClick={() => showProductDetails(product)}
//                         className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
//                       >
//                         View Details
//                       </button>
//                       <button
//                         onClick={() => addToCart(product)}
//                         className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             // List View
//             <div className="space-y-4">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="flex items-center space-x-6">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-24 h-24 object-cover rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
//                           {product.name}
//                         </h4>
//                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">
//                           {product.price}
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-4 mb-2">
//                         <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
//                           {product.formula}
//                         </span>
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(
//                             product.safetyClass
//                           )}`}
//                         >
//                           {product.safetyClass}
//                         </span>
//                         <div className="flex items-center text-yellow-500 text-sm">
//                           <svg
//                             className="w-4 h-4 mr-1"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                           {product.rating} ({product.reviews})
//                         </div>
//                       </div>
//                       <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
//                         {product.description}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-wrap gap-2">
//                           {product.applications.slice(0, 3).map((app, idx) => (
//                             <span
//                               key={idx}
//                               className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
//                             >
//                               {app}
//                             </span>
//                           ))}
//                         </div>
//                         <div className="flex space-x-3">
//                           <button
//                             onClick={() => showProductDetails(product)}
//                             className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                           >
//                             Details
//                           </button>
//                           <button
//                             onClick={() => addToCart(product)}
//                             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
//                           >
//                             Add to Cart
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-20">
//               <div className="text-gray-400 dark:text-gray-500 text-8xl mb-6">
//                 🔍
//               </div>
//               <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
//                 No products found
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 text-lg">
//                 Try adjusting your search or filter criteria
//               </p>
//             </div>
//           )}
//         </section>
//       </main>

//       {/* Enhanced Product Detail Modal */}
//       {isModalOpen && selectedProduct && (
//         <div className="fixed inset-0 bg-black/70 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
//             <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
//                   {selectedProduct.name}
//                 </h3>
//                 <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
//                   {selectedProduct.formula}
//                 </p>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
//               <div className="p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//                   <div>
//                     <img
//                       src={selectedProduct.image}
//                       alt={selectedProduct.name}
//                       className="w-full h-80 object-cover rounded-xl"
//                     />
//                   </div>
//                   <div className="space-y-6">
//                     <div className="flex items-center justify-between">
//                       <div className="text-4xl font-bold text-green-600 dark:text-green-400">
//                         {selectedProduct.price}
//                       </div>
//                       <div className="flex items-center text-yellow-500">
//                         <svg
//                           className="w-6 h-6 mr-2"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                         <span className="text-lg font-semibold">
//                           {selectedProduct.rating}
//                         </span>
//                         <span className="text-gray-600 dark:text-gray-400 ml-2">
//                           ({selectedProduct.reviews} reviews)
//                         </span>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
//                         <div className="font-semibold text-gray-900 dark:text-white mb-1">
//                           CAS Number
//                         </div>
//                         <div className="text-gray-600 dark:text-gray-400">
//                           {selectedProduct.casNumber}
//                         </div>
//                       </div>
//                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
//                         <div className="font-semibold text-gray-900 dark:text-white mb-1">
//                           Safety Class
//                         </div>
//                         <span
//                           className={`px-3 py-1 rounded-full text-sm font-medium ${getSafetyClassColor(
//                             selectedProduct.safetyClass
//                           )}`}
//                         >
//                           {selectedProduct.safetyClass}
//                         </span>
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
//                         Certifications
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedProduct.certifications.map((cert, idx) => (
//                           <span
//                             key={idx}
//                             className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
//                           >
//                             {cert}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-8">
//                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//                     Description
//                   </h4>
//                   <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//                     {selectedProduct.description}
//                   </p>
//                 </div>

//                 {/* Technical Specifications */}
//                 <div className="mb-8">
//                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//                     Technical Specifications
//                   </h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {Object.entries(selectedProduct.specifications).map(
//                       ([key, value]) => (
//                         <div
//                           key={key}
//                           className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
//                         >
//                           <div className="font-semibold text-gray-900 dark:text-white mb-1">
//                             {key
//                               .replace(/([A-Z])/g, " $1")
//                               .replace(/^./, (str) => str.toUpperCase())}
//                           </div>
//                           <div className="font-mono text-gray-600 dark:text-gray-400">
//                             {value}
//                           </div>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 {/* Available Packaging */}
//                 <div className="mb-8">
//                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//                     Available Packaging
//                   </h4>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {selectedProduct.packaging.map((pkg, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-400 p-4 rounded-xl text-center font-semibold"
//                       >
//                         {pkg}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Applications */}
//                 <div className="mb-8">
//                   <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//                     Applications
//                   </h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {selectedProduct.applications.map((app, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border-l-4 border-blue-500 dark:border-blue-400"
//                       >
//                         <div className="flex items-center">
//                           <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
//                           <span className="text-gray-800 dark:text-gray-200 font-medium">
//                             {app}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
//               <button
//                 onClick={closeModal}
//                 className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
//               >
//                 Close
//               </button>
//               <div className="flex space-x-4">
//                 <button
//                   onClick={downloadSDS}
//                   className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium"
//                 >
//                   📄 Download SDS
//                 </button>
//                 <button
//                   onClick={() => addToCart(selectedProduct)}
//                   className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
//                 >
//                   🛒 Add to Cart
//                 </button>
//                 <button
//                   onClick={() => requestQuote(selectedProduct.name)}
//                   className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
//                 >
//                   💬 Request Quote
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mobile Category Filter */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-30">
//         <div className="flex space-x-2 overflow-x-auto pb-2">
//           <button
//             onClick={() => filterProducts("all")}
//             className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
//               currentFilter === "all"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             All
//           </button>
//           {productData.categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => filterProducts(category.id)}
//               className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
//                 currentFilter === category.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//               }`}
//             >
//               {category.icon} {category.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Floating Cart Summary */}
//       {!isCartOpen && cart.length > 0 && (
//         <div className="fixed bottom-20 lg:bottom-6 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 z-40 max-w-sm">
//           <div className="flex items-center justify-between mb-3">
//             <h4 className="font-semibold text-gray-900 dark:text-white">
//               Cart Summary
//             </h4>
//             <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-medium">
//               {getTotalItems()} items
//             </span>
//           </div>
//           <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
//             Total: ${getCartTotal()}
//           </div>
//           <div className="space-y-2">
//             {cart.slice(0, 3).map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center text-sm"
//               >
//                 <span className="text-gray-600 dark:text-gray-400 truncate">
//                   {item.name}
//                 </span>
//                 <span className="text-gray-900 dark:text-white font-medium">
//                   ×{item.quantity}
//                 </span>
//               </div>
//             ))}
//             {cart.length > 3 && (
//               <div className="text-center text-xs text-gray-500 dark:text-gray-400">
//                 +{cart.length - 3} more items
//               </div>
//             )}
//           </div>
//           <button
//             onClick={() => setIsCartOpen(true)}
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium mt-4 transition-colors"
//           >
//             View Full Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   return (
//     <ThemeProvider>
//       <CartProvider>
//         <Products />
//       </CartProvider>
//     </ThemeProvider>
//   );
// };

// export default App;



import React, { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar'; // Import your custom Navbar

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Cart Context - Export this so Navbar can use it
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('chemicalCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('chemicalCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart - Export this
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const Products = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    addToCart, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart, 
    getCartTotal, 
    getTotalItems 
  } = useCart();

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Product state
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [wishlist, setWishlist] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');

    if (token && userData && userData !== 'undefined') {
      try {
        const parsedUser = JSON.parse(userData);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
    setLoading(false);
  };

  // Generate user initials for avatar
  const generateInitials = (name) => {
    if (!name) return 'U';
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    } else {
      const firstInitial = nameParts[0].charAt(0).toUpperCase();
      const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
      return firstInitial + lastInitial;
    }
  };

  // Handle logout
  const handleLogout = () => {
    const userName = user?.name || 'User';
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    toast.info(`Goodbye, ${userName}! Come back soon! 👋`, {
      position: 'top-right',
      autoClose: 3000,
      theme: isDarkMode ? 'dark' : 'light',
    });
    navigate('/login');
  };

  // Enhanced product data with working images
  const productData = {
    categories: [
      {
        id: 'industrial',
        name: 'Industrial Chemicals',
        description: 'High-purity acids, solvents, and cleaning agents for manufacturing processes',
        icon: '⚗️',
        color: 'bg-blue-500 dark:bg-blue-600',
        image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400',
        applications: ['Metal processing', 'Textile manufacturing', 'Electronics', 'Automotive']
      },
      {
        id: 'specialty',
        name: 'Specialty Chemicals',
        description: 'Custom formulations and performance additives for specific applications',
        icon: '🧪',
        color: 'bg-red-500 dark:bg-red-600',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400',
        applications: ['Adhesives', 'Coatings', 'Polymers', 'Water treatment']
      },
      {
        id: 'laboratory',
        name: 'Laboratory Chemicals',
        description: 'Analytical grade reagents and research chemicals for R&D',
        icon: '🔬',
        color: 'bg-green-500 dark:bg-green-600',
        image: 'https://images.unsplash.com/photo-1564444567045-db7c4b84d76e?w=400',
        applications: ['Research institutions', 'Quality control', 'Universities', 'Pharma labs']
      },
      {
        id: 'safety',
        name: 'Safety Equipment',
        description: 'Personal protective equipment and safety solutions',
        icon: '🛡️',
        color: 'bg-orange-500 dark:bg-orange-600',
        image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400',
        applications: ['Laboratory safety', 'Industrial protection', 'Emergency response']
      }
    ],
    products: [
      {
        id: 'h2so4-98',
        name: 'Sulfuric Acid 98%',
        category: 'industrial',
        formula: 'H₂SO₄',
        casNumber: '7664-93-9',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=300',
        description: 'High purity sulfuric acid for industrial applications including metal processing, battery manufacturing, and chemical synthesis.',
        applications: ['Battery acid', 'Metal etching', 'Chemical synthesis', 'Water treatment'],
        safetyClass: 'Corrosive',
        packaging: ['1L bottles', '5L containers', '25L drums', '1000L IBC'],
        price: '$45.00',
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 127,
        certifications: ['ISO 9001', 'UN1830'],
        specifications: {
          purity: '98.0% min',
          density: '1.84 g/cm³',
          boilingPoint: '337°C',
          meltingPoint: '10°C',
          viscosity: '26.7 cP'
        }
      },
      // Add more products here...
      {
        id: 'ipa-999',
        name: 'Isopropyl Alcohol 99.9%',
        category: 'industrial',
        formula: 'C₃H₈O',
        casNumber: '67-63-0',
        image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300',
        description: 'Ultra-pure isopropyl alcohol for electronics cleaning, pharmaceuticals, and laboratory applications.',
        applications: ['Electronics cleaning', 'Disinfectant', 'Solvent', 'Pharmaceutical intermediate'],
        safetyClass: 'Flammable',
        packaging: ['250ml bottles', '1L bottles', '4L containers', '200L drums'],
        price: '$28.50',
        inStock: true,
        featured: false,
        rating: 4.9,
        reviews: 203,
        certifications: ['USP Grade', 'GMP'],
        specifications: {
          purity: '99.9% min',
          density: '0.786 g/cm³',
          boilingPoint: '82.6°C',
          flashPoint: '11.7°C',
          waterContent: '0.1% max'
        }
      }
      // More products would go here...
    ]
  };

  // Enhanced state management
  useEffect(() => {
    setFilteredProducts(productData.products);
  }, []);

  // Wishlist functionality
  const toggleWishlist = (product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    if (isWishlisted) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Enhanced filtering and sorting
  const applyFiltersAndSort = () => {
    let products = [...productData.products];

    // Filter by category
    if (currentFilter !== 'all') {
      products = products.filter((product) => product.category === currentFilter);
    }

    // Filter by search query
    if (searchQuery) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.casNumber.includes(searchQuery) ||
        product.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by featured
    if (showFeaturedOnly) {
      products = products.filter((product) => product.featured);
    }

    // Filter by price range
    products = products.filter((product) => {
      const price = parseFloat(product.price.replace('$', ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort products
    products.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
          return b.featured - a.featured;
        default:
          return 0;
      }
    });

    setFilteredProducts(products);
  };

  // Filter products by category
  const filterProducts = (category) => {
    setCurrentFilter(category);
  };

  // Search products
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Show product details modal
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsCartOpen(false);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  // Get safety class color
  const getSafetyClassColor = (safetyClass) => {
    const colors = {
      'Corrosive': 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20',
      'Flammable': 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20',
      'Toxic': 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20',
      'Toxic/Flammable': 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20',
      'Irritant': 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20',
      'PPE': 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20',
      'Non-hazardous': 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20'
    };
    
    return colors[safetyClass] || 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800';
  };

  // Download SDS
  const downloadSDS = () => {
    alert('Safety Data Sheet download initiated. The document will be available shortly.');
  };

  // Request quote
  const requestQuote = (productName) => {
    alert(`Quote request initiated for ${productName}. Our sales team will contact you shortly.`);
  };

  // Bulk order
  const initiateBulkOrder = () => {
    if (cart.length === 0) {
      alert('Please add items to your cart before requesting a bulk order.');
      return;
    }
    alert(`Bulk order request initiated for ${cart.length} items. Total: $${getCartTotal()}. Our sales team will contact you shortly.`);
  };

  // Apply filters on state changes
  useEffect(() => {
    applyFiltersAndSort();
  }, [currentFilter, searchQuery, showFeaturedOnly, sortBy, priceRange]);

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <div className="text-xl text-gray-600 dark:text-gray-300">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Replace old header with your Navbar */}
      <Navbar
        darkMode={isDarkMode}
        toggleDarkMode={toggleTheme}
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />

      {/* The rest of your Products page remains unchanged */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Background Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90 dark:from-blue-800/90 dark:to-purple-900/90"></div>
          <div className="relative px-8 py-16 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Chemical Products Catalog</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
              Comprehensive range of high-quality chemicals for industrial, laboratory, and specialty applications
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Catalog
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{filteredProducts.length}</div>
            <div className="text-gray-600 dark:text-gray-400">Products Found</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">ISO 9001</div>
            <div className="text-gray-600 dark:text-gray-400">Certified</div>
          </div>
        </div>

        {/* Enhanced Categories Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Product Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.categories.map((category) => (
              <div
                key={category.id}
                onClick={() => filterProducts(category.id)}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-1.02 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.applications.slice(0, 2).map((app, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Filter and Sort Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured Only</span>
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                      : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                      : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <button
                onClick={initiateBulkOrder}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Bulk Order ({getTotalItems()})
              </button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {currentFilter === 'all' 
              ? 'All Products' 
              : productData.categories.find(c => c.id === currentFilter)?.name + ' Products'}
          </h3>

          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-1.02 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {product.featured && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                      {product.inStock ? (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          In Stock
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`p-2 rounded-full ${
                          wishlist.some((item) => item.id === product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-400 hover:text-red-500'
                        } transition-colors`}
                      >
                        <svg className="w-5 h-5" fill={wishlist.some((item) => item.id === product.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h4>
                        <div className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
                          {product.formula}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{product.price}</div>
                        <div className="flex items-center text-yellow-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {product.rating} ({product.reviews})
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">CAS Number:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{product.casNumber}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Safety Class:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(product.safetyClass)}`}>
                          {product.safetyClass}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">Applications</div>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 3).map((app, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            +{product.applications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => showProductDetails(product)}
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h4>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{product.price}</div>
                      </div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
                          {product.formula}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(product.safetyClass)}`}>
                          {product.safetyClass}
                        </span>
                      </div>
                      <div className="flex items-center text-yellow-500 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating} ({product.reviews})
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {product.applications.slice(0, 3).map((app, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                              {app}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => showProductDetails(product)}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 dark:text-gray-500 text-8xl mb-6">🧪</div>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">No products found</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Enhanced Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProduct.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{selectedProduct.formula}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400">{selectedProduct.price}</div>
                      <div className="flex items-center text-yellow-500">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-lg font-semibold">{selectedProduct.rating}</span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">({selectedProduct.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">CAS Number</div>
                        <div className="text-gray-600 dark:text-gray-400">{selectedProduct.casNumber}</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">Safety Class</div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSafetyClassColor(selectedProduct.safetyClass)}`}>
                          {selectedProduct.safetyClass}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.certifications.map((cert, idx) => (
                          <span key={idx} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Technical Specifications */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </div>
                        <div className="font-mono text-gray-600 dark:text-gray-400">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Packaging */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Available Packaging</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProduct.packaging.map((pkg, idx) => (
                      <div key={idx} className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-400 p-4 rounded-xl text-center font-semibold">
                        {pkg}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Applications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProduct.applications.map((app, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border-l-4 border-blue-500 dark:border-blue-400">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-800 dark:text-gray-200 font-medium">{app}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  Close
                </button>
                <div className="flex space-x-4">
                  <button
                    onClick={downloadSDS}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium"
                  >
                    Download SDS
                  </button>
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => requestQuote(selectedProduct.name)}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Cart Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Shopping Cart ({getTotalItems()} items)
              </h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-gray-400 dark:text-gray-500 text-8xl mb-6">🛒</div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">Your cart is empty</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Add some products to get started</p>
                </div>
              ) : (
                <div className="p-8">
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-700 rounded-2xl p-6"
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h4>
                          <div className="flex items-center space-x-4">
                            <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
                              {item.formula}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyClassColor(item.safetyClass)}`}>
                              {item.safetyClass}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">{item.price}</div>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                            >
                              -
                            </button>
                            <span className="text-lg font-semibold text-gray-900 dark:text-white min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Subtotal: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}

                    {/* Cart Summary */}
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Order Summary</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Items:</span>
                              <span className="font-medium text-gray-900 dark:text-white">{getTotalItems()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Products:</span>
                              <span className="font-medium text-gray-900 dark:text-white">{cart.length}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Pricing</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                              <span className="font-medium text-gray-900 dark:text-white">${getCartTotal()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
                              <span className="font-medium text-gray-900 dark:text-white">Calculated at checkout</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Total</h4>
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">${getCartTotal()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Actions */}
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-8 py-6 flex justify-between items-center">
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                Continue Shopping
              </button>
              {cart.length > 0 && (
                <div className="flex space-x-4">
                  <button
                    onClick={clearCart}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-medium"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={initiateBulkOrder}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
                  >
                    Proceed to Bulk Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Category Filter */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-30">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button
            onClick={() => filterProducts('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              currentFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          {productData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => filterProducts(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                currentFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Cart Summary */}
      {!isCartOpen && cart.length > 0 && (
        <div className="fixed bottom-20 lg:bottom-6 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 z-40 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900 dark:text-white">Cart Summary</h4>
            <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-medium">
              {getTotalItems()} items
            </span>
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
            Total: ${getCartTotal()}
          </div>
          <div className="space-y-2">
            {cart.slice(0, 3).map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400 truncate">{item.name}</span>
                <span className="text-gray-900 dark:text-white font-medium">{item.quantity}</span>
              </div>
            ))}
            {cart.length > 3 && (
              <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                +{cart.length - 3} more items
              </div>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium mt-4 transition-colors"
          >
            View Full Cart
          </button>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Products />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;