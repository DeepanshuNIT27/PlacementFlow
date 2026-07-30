function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">PlacementFlow</h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Organize your entire placement journey in one place. Track
            applications, deadlines, interviews, and offers through a clean,
            modern dashboard.
          </p>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <p className="text-sm text-slate-500">
            Built with React, Tailwind CSS & React Router
          </p>

          <p className="mt-2 text-sm text-slate-600">
            © {currentYear} PlacementFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
