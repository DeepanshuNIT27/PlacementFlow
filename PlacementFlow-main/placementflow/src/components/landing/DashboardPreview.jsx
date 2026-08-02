function DashboardPreview() {
  return (
    <section className="bg-slate-950 px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Everything You Need,
            <span className="text-blue-500"> In One Dashboard</span>
          </h2>

          <p className="mt-4 text-slate-400">
            Track applications, deadlines and interviews from one place.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Top Navbar */}
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
            <h3 className="font-semibold text-white">
              PlacementFlow Dashboard
            </h3>

            <div className="w-60 rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-500">
              Search company...
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 p-6 md:grid-cols-4">
            {[
              ["48", "Applications"],
              ["18", "OA"],
              ["8", "Interviews"],
              ["3", "Offers"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-800 bg-slate-800 p-5"
              >
                <h4 className="text-3xl font-bold text-white">{value}</h4>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Kanban Preview */}
          <div className="grid gap-4 p-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Wishlist",
              "Applied",
              "OA",
              "Interview",
              "Offer",
              "Rejected",
            ].map((column) => (
              <div
                key={column}
                className="rounded-xl border border-slate-800 bg-slate-800 p-4"
              >
                <h5 className="mb-4 font-medium text-white">{column}</h5>

                <div className="space-y-3">
                  <div className="rounded-lg bg-slate-700 p-3">
                    <p className="text-sm font-medium text-white">Microsoft</p>
                    <span className="text-xs text-slate-400">SDE Intern</span>
                  </div>

                  <div className="rounded-lg bg-slate-700 p-3">
                    <p className="text-sm font-medium text-white">Amazon</p>
                    <span className="text-xs text-slate-400">SWE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;
