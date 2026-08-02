import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-extrabold text-blue-500">404</h1>

        <h2 className="mt-6 text-3xl font-bold text-white">Page Not Found</h2>

        <p className="mt-4 text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
