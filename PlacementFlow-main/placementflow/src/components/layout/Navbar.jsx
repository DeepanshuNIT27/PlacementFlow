import { Link } from "react-router-dom";
import { FiSearch, FiMoon, FiPlus } from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-center border-b border-slate-800 bg-slate-900/90 px-4 backdrop-blur-md md:px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* Search */}
        <div className="flex-1">
          <div className="relative max-w-md">
            <FiSearch
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search companies..."
              className="w-full rounded-lg border border-slate-700 bg-slate-800 py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="ml-4 flex items-center gap-2 md:gap-4">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:text-white"
          >
            <FiMoon size={20} />
          </button>

          <Link
            to="/add-company"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 md:px-5 md:py-2.5"
          >
            <FiPlus size={18} />
            <span className="hidden sm:inline">Add Company</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
