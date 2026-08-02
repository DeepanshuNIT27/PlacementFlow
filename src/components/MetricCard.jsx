const MetricCard = ({ title, value, icon, colorClass, borderColorClass, hoverBorderColorClass }) => {
  return (
    <div className={`bg-surface-container p-lg rounded-xl border border-outline-variant ${hoverBorderColorClass} transition-colors group`}>
      <p className={`font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-sm transition-colors ${colorClass.hoverText}`}>
        {title}
      </p>
      <div className="flex items-end justify-between">
        <span className="font-display-lg text-display-lg text-on-surface font-bold">{value}</span>
        <span className={`material-symbols-outlined ${colorClass.text} text-3xl opacity-20 group-hover:opacity-100 transition-opacity`}>
          {icon}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;
