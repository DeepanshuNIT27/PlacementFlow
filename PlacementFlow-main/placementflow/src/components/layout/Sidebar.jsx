import { NavLink } from "react-router-dom";
import { FiGrid, FiBarChart2 } from "react-icons/fi";

function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10"
        : "text-slate-400 hover:translate-x-1 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-900/95 p-6 backdrop-blur md:flex">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-blue-500">PlacementFlow</h1>
        <p className="mt-1 text-sm text-slate-400">Campus Placement Manager</p>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col gap-2">
        <NavLink to="/dashboard" className={navLinkClass}>
          <FiGrid size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/analytics" className={navLinkClass}>
          <FiBarChart2 size={18} />
          <span>Analytics</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
