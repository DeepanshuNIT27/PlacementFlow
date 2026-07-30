function EmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-700 p-6 text-center">
      <div className="mb-4 text-5xl">📂</div>

      <h3 className="text-lg font-semibold text-white">No Companies</h3>

      <p className="mt-2 text-sm text-slate-400">
        Add a company to start tracking your placement journey.
      </p>
    </div>
  );
}

export default EmptyState;
