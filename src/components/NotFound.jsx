import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-6 mt-24 text-center">
      <h1 className="text-7xl font-extrabold mb-4 text-blue-700 dark:text-blue-400">404</h1>
      <p className="mb-6 text-gray-800 dark:text-gray-300 text-lg">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="text-blue-700 dark:text-blue-300 underline font-semibold"
      >
        Go Home
      </Link>
    </section>
  );
}
