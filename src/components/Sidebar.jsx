import { Link } from 'react-router-dom';

const Sidebar = ({ activePage = 'dashboard' }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant flex flex-col p-md z-40 transition-all duration-200 ease-in-out">
      <div className="flex items-center gap-md mb-xl px-sm">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">PlacementFlow</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant">Career Tracker</p>
        </div>
      </div>
      <nav className="flex-1 space-y-sm">
        <Link 
          to="/dashboard"
          className={`flex items-center gap-md p-md rounded-lg transition-all duration-200 ${
            activePage === 'dashboard' 
              ? 'bg-secondary-container text-on-secondary-container' 
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
          }`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </Link>
        <Link 
          to="/analytics"
          className={`flex items-center gap-md p-md rounded-lg transition-all duration-200 ${
            activePage === 'analytics' 
              ? 'bg-secondary-container text-on-secondary-container' 
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
          }`}
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-md text-label-md">Analytics</span>
        </Link>
      </nav>
      <div className="mt-auto space-y-sm pt-md border-t border-outline-variant">
        <a className="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg transition-all duration-200" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-md text-label-md">Help</span>
        </a>
        <Link to="/" className="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg transition-all duration-200">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md text-label-md">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
