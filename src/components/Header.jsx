import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Header({ isAuthenticated, user, onLogout }) {
  console.log("Header Props:", { isAuthenticated, user }); // Debug log

  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:py-6">
      <Link
        to="/"
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400"
      >
        C – Call Chemical
      </Link>
      <nav className="space-x-4 flex items-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-300 font-semibold"
              : "text-gray-700 dark:text-gray-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-300 font-semibold"
              : "text-gray-700 dark:text-gray-200"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-300 font-semibold"
              : "text-gray-700 dark:text-gray-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-300 font-semibold"
              : "text-gray-700 dark:text-gray-200"
          }
        >
          Contact
        </NavLink>

        {/* Conditional rendering for auth state */}
        {isAuthenticated ? (
          <div className="flex items-center space-x-4 ml-4">
            <span className="text-gray-700 dark:text-gray-200 text-sm">
              Welcome, {user?.name || "User"}
            </span>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4 ml-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 dark:text-blue-300 font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200"
            >
              Register
            </NavLink>
          </div>
        )}
      </nav>
      {/* <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-0 right-0 bg-yellow-400 text-black text-xs p-1">
          Auth: {isAuthenticated ? "YES" : "NO"}
        </div>
      )}
    </header>
  );
}
