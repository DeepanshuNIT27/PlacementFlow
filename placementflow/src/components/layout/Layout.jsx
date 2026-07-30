import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto bg-slate-950 px-4 py-6 transition-all duration-300 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
