function Filters({
  searchQuery,
  onSearchChange,
  filterPriority,
  onPriorityChange,
  sortOption,
  onSortChange,
  onClearFilters,
}) {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Search company, role..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:w-56"
        />

        <select className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:w-auto">
          <option>All Status</option>
          <option>Wishlist</option>
          <option>Applied</option>
          <option>OA</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <select
          value={filterPriority}
          onChange={(e) => onPriorityChange(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:w-auto"
        >
          <option value="all">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:w-auto"
        >
          <option value="latest">Latest</option>
          <option value="company">Company A-Z</option>
          <option value="package">Package High-Low</option>
        </select>

        <button
          type="button"
          onClick={onClearFilters}
          className="w-full rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 sm:w-auto"
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}

export default Filters;
