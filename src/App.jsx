import React, { useState, useEffect } from "react";
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
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import NotFound from "./components/NotFound";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (token && userData && userData !== "undefined") {
      try {
        const parsedUser = JSON.parse(userData);
        setIsAuthenticated(true);
        setUser(parsedUser);
        if (
          parsedUser.role === "admin" ||
          parsedUser.isAdmin ||
          parsedUser.email === "admin@ccallchemical.com"
        ) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        setUser(null);
        setIsAdmin(false);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
      setIsAdmin(false);
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
  const generateInitials = (name) => {
    if (!name) return "U";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    } else {
      const firstInitial = nameParts[0].charAt(0).toUpperCase();
      const lastInitial = nameParts[nameParts.length - 1]
        .charAt(0)
        .toUpperCase();
      return firstInitial + lastInitial;
    }
  };

  // Duplicate handleLoginSuccess removed to fix redeclaration error.
  const handleRegisterSuccess = (userData, token) => {
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

  const handleLogout = () => {
    const userName = user?.name || "User";
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
    toast.info(`Goodbye, ${userName}! Come back soon! 👋`, {
      position: "top-right",
      autoClose: 3000,
      theme: darkMode ? "dark" : "light",
    });
    navigate("/login");
  };
  const handleLoginSuccess = (userData, token) => {
    console.log("Login successful:", userData);

    const userWithInitials = {
      ...userData,
      initials: generateInitials(userData.name),
    };

    setIsAuthenticated(true);
    setUser(userWithInitials);

    // Check if user is admin using specific credentials
    const isUserAdmin =
      userData.email === "admin@gmail.com" ||
      userData.role === "admin" ||
      userData.isAdmin ||
      userData.email === "admin@ccallchemical.com";

    setIsAdmin(isUserAdmin);

    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(userWithInitials));

    toast.success(`Welcome back, ${userData.name}! 🎉`, {
      position: "top-right",
      autoClose: 4000,
      theme: darkMode ? "dark" : "light",
    });

    // Redirect admin users to admin panel, others to home
    if (isUserAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };
  const ProtectedRoute = ({
    children,
    requireAuth = true,
    requireAdmin = false,
  }) => {
    if (requireAuth && !isAuthenticated) {
      return <Login onLoginSuccess={handleLoginSuccess} />;
    }

    if (requireAdmin && !isAdmin) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Access Denied
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You don't have permission to access this page.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return children;
  };

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

  return (
    <CartProvider>
      <div
        className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${
          darkMode ? "dark" : ""
        }`}
      >
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

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute requireAuth={true}>
                <>
                  <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={handleLogout}
                  />
                  <Hero />
                  <Services />
                  <About />
                  <Contact />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute requireAuth={true}>
                <>
                  <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={handleLogout}
                  />
                  <Product />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requireAuth={true}>
                <>
                  <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={handleLogout}
                  />
                  <Dashboard />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAuth={true} requireAdmin={true}>
                <AdminPanel
                  user={user}
                  onLogout={handleLogout}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLoginSuccess={handleLoginSuccess} />
              ) : isAdmin ? (
                <AdminPanel
                  user={user}
                  onLogout={handleLogout}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              ) : (
                <>
                  <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={handleLogout}
                  />
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
              ) : isAdmin ? (
                <AdminPanel
                  user={user}
                  onLogout={handleLogout}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              ) : (
                <>
                  <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={handleLogout}
                  />
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
            path="/about"
            element={
              <>
                <Navbar
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  onLogout={handleLogout}
                />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  onLogout={handleLogout}
                />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  onLogout={handleLogout}
                />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
