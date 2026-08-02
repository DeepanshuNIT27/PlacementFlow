const KanbanCard = ({ company, role, priority, priorityColor, packageVal, deadline, borderClass, ringClass }) => {
  return (
    <div className={`glass-card p-md rounded-xl space-y-md border-t-2 ${borderClass} ${ringClass || ''}`}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-headline-md text-lg font-bold">{company}</h4>
          <p className="font-body-md text-sm text-on-surface-variant">{role}</p>
        </div>
        <div className="flex items-center gap-xs">
          <span className={`${priorityColor.text} text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${priorityColor.bg} rounded`}>{priority}</span>
          <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">edit</span></button>
          <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">delete</span></button>
        </div>
      </div>
      <div className="space-y-xs">
        <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Package</p>
        <p className="font-headline-md text-primary text-xl font-bold">{packageVal}</p>
      </div>
      <div className="flex justify-between items-center pt-md border-t border-outline-variant/30">
        <span className="font-body-md text-xs text-on-surface-variant">Deadline</span>
        <span className="font-label-md text-xs font-bold">{deadline}</span>
      </div>
    </div>
  );
};

export default KanbanCard;
