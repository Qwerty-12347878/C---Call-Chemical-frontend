// // import React, { useEffect, useState } from "react";
// // import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Services from "./components/Services";
// // import About from "./components/About";
// // import Contact from "./components/Contact";
// // import Footer from "./components/Footer";
// // import Login from "./components/Login";
// // import Register from "./components/Register";
// // import Product from "./pages/Product";

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem("theme");
// //     const prefersDark = window.matchMedia(
// //       "(prefers-color-scheme: dark)"
// //     ).matches;
// //     if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
// //       setDarkMode(true);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const htmlElement = document.documentElement;
// //     if (darkMode) {
// //       htmlElement.classList.add("dark");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       htmlElement.classList.remove("dark");
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [darkMode]);

// //   const toggleDarkMode = () => setDarkMode((prev) => !prev);

// //   return (
// //     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
// //       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <>
// //               <Hero />
// //               <Services />
// //               <About />
// //               <Contact />
// //               <Footer />
// //             </>
// //           }
// //         />
// //         <Route path="/products" element={<Product />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Product from "./pages/Product";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is already logged in on app start
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const userData = localStorage.getItem("user");

//     if (token && userData) {
//       setIsAuthenticated(true);
//       setUser(JSON.parse(userData));
//       toast.success(`Welcome back, ${JSON.parse(userData).name}!`, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
//       setDarkMode(true);
//     }
//   }, []);

//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     if (darkMode) {
//       htmlElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       htmlElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   const handleLoginSuccess = () => {
//     const token = localStorage.getItem("authToken");
//     const userData = localStorage.getItem("user");

//     if (token && userData) {
//       const userObj = JSON.parse(userData);
//       setIsAuthenticated(true);
//       setUser(userObj);
//       toast.success(`Welcome back, ${userObj.name}! 🎉`, {
//         position: "top-right",
//         autoClose: 4000,
//         theme: darkMode ? "dark" : "light",
//       });
//     }
//   };

//   const handleRegisterSuccess = () => {
//     const token = localStorage.getItem("authToken");
//     const userData = localStorage.getItem("user");

//     if (token && userData) {
//       const userObj = JSON.parse(userData);
//       setIsAuthenticated(true);
//       setUser(userObj);
//       toast.success(`Account created successfully! Welcome, ${userObj.name}! 🎉`, {
//         position: "top-right",
//         autoClose: 4000,
//         theme: darkMode ? "dark" : "light",
//       });
//     }
//   };

//   const handleLogout = () => {
//     const userName = user?.name || "User";
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     setUser(null);
//     toast.info(`Goodbye, ${userName}! Come back soon! 👋`, {
//       position: "top-right",
//       autoClose: 3000,
//       theme: darkMode ? "dark" : "light",
//     });
//   };

//   // Show loading spinner while checking authentication
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
//         <div className="text-xl text-gray-600 dark:text-gray-300">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//       {/* Toast Container */}
//       <ToastContainer
//         position="top-right"
//         autoClose={4000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme={darkMode ? "dark" : "light"}
//       />

//       <Navbar
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         isAuthenticated={isAuthenticated}
//         user={user}
//         onLogout={handleLogout}
//       />
//       <Routes>
//         {isAuthenticated ? (
//           // Show main content when authenticated
//           <>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <Services />
//                   <About />
//                   <Contact />
//                   <Footer />
//                 </>
//               }
//             />
//             <Route path="/products" element={<Product />} />
//             <Route path="/login" element={<div className="min-h-screen flex items-center justify-center">You are already logged in!</div>} />
//             <Route path="/register" element={<div className="min-h-screen flex items-center justify-center">You are already registered!</div>} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/register" element={<Register onRegisterSuccess={handleRegisterSuccess} />} />
//             <Route path="/products" element={<div className="min-h-screen flex items-center justify-center">Please login to access products</div>} />
//           </>
//         )}
//         <Route path="*" element={
//           <div className="min-h-screen flex items-center justify-center">
//             Page not found
//           </div>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./pages/Product";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, []);

 const checkAuthStatus = () => {
  const token = localStorage.getItem("authToken");
  const userData = localStorage.getItem("user");

  // Check for token and safe userData
  if (token && userData && userData !== "undefined") {
    try {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData)); // Only parse if valid
    } catch {
      // If parsing fails, remove corrupted item
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      setUser(null);
    }
  } else {
    setIsAuthenticated(false);
    setUser(null);
  }
  setLoading(false);
};


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // LOGIN SUCCESS
  const handleLoginSuccess = (userData, token) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(userData));
    toast.success(`Welcome back, ${userData.name}! 🎉`, {
      position: "top-right",
      autoClose: 4000,
      theme: darkMode ? "dark" : "light",
    });
    navigate("/");
  };

  // REGISTER SUCCESS - FIXED
  const handleRegisterSuccess = (userData, token) => {
    // Do NOT setIsAuthenticated or setUser here
    toast.success(
      `Account created successfully! Please login, ${userData.name}! 🎉`,
      {
        position: "top-right",
        autoClose: 4000,
        theme: darkMode ? "dark" : "light",
      }
    );
    navigate("/login");
  };

  // LOGOUT
  const handleLogout = () => {
    const userName = user?.name || "User";
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    toast.info(`Goodbye, ${userName}! Come back soon! 👋`, {
      position: "top-right",
      autoClose: 3000,
      theme: darkMode ? "dark" : "light",
    });
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
{/* 
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      /> */}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
               <Navbar/>
                <Hero />
                <Services />
                <About />
                <Contact />
                <Footer />
              </>
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/products"
          element={
            isAuthenticated ? (
              <Product />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
              <>
                <Navbar/>
                <Hero />
                <Services />
                <About />
                <Contact />
                <Footer />
              </>
            )
          }
        />
        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register onRegisterSuccess={handleRegisterSuccess} />
            ) : (
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
                <Footer />
              </>
            )
          }
        />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              Page not found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
