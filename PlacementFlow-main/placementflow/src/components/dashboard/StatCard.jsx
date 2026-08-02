import { memo } from "react";

function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
      <p className="text-sm text-slate-400">{title}</p>

      <h2 className="mt-2 text-3xl font-bold text-white">{value}</h2>
    </div>
  );
}

export default memo(StatCard);
