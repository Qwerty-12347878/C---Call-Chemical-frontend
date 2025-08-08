import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:py-6">
      <Link
        to="/"
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400"
      >
        C – Call Chemical 
      </Link>
      <nav className="space-x-4 flex">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : "text-gray-700 dark:text-gray-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : "text-gray-700 dark:text-gray-200"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : "text-gray-700 dark:text-gray-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : "text-gray-700 dark:text-gray-200"
          }
        >
          Contact
        </NavLink>
      </nav>
      {/* <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </header>
  );
}
