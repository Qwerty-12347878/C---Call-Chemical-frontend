export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setDarkMode(!darkMode)}
      className="ml-3 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      title="Toggle Dark Mode"
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 0 0 0 16 8 8 0 1 1 0-16z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
        </svg>
      )}
    </button>
  );
}
