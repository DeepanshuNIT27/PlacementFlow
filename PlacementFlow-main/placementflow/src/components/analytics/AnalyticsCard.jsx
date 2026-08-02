import { memo } from "react";

function AnalyticsCard({ title, value, color }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
        {title}
      </p>

      <h2 className={`mt-4 text-4xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}

export default memo(AnalyticsCard);
