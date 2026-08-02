const FilterBar = () => {
  return (
    <section className="flex flex-wrap items-center gap-md bg-surface-container-low p-md rounded-xl border border-outline-variant">
      <div className="relative min-w-[240px] flex-1">
        <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
        <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-sm pl-10 pr-md text-body-md focus:ring-primary focus:border-primary" placeholder="Search company, role..." type="text"/>
      </div>
      <select className="bg-surface-container-lowest border border-outline-variant rounded-lg py-sm px-md text-on-surface-variant font-label-md focus:ring-primary">
        <option>All Status</option>
        <option>Applied</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>
      <select className="bg-surface-container-lowest border border-outline-variant rounded-lg py-sm px-md text-on-surface-variant font-label-md focus:ring-primary">
        <option>All Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select className="bg-surface-container-lowest border border-outline-variant rounded-lg py-sm px-md text-on-surface-variant font-label-md focus:ring-primary">
        <option>Latest</option>
        <option>Oldest</option>
        <option>Deadline Soon</option>
      </select>
      <button className="text-on-surface-variant font-label-md hover:text-on-surface px-md py-sm transition-colors">Clear Filters</button>
    </section>
  );
};

export default FilterBar;
