import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </div>
  );
}

export default React.memo(FeatureCard);
