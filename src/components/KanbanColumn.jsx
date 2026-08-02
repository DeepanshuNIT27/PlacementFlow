const KanbanColumn = ({ title, count, children, opacityClass = "" }) => {
  return (
    <div className={`kanban-column flex flex-col gap-md ${opacityClass}`}>
      <div className="flex justify-between items-center px-sm">
        <h3 className="font-headline-md text-headline-md flex items-center gap-sm">
          {title} <span className="text-on-surface-variant font-body-md text-sm bg-surface-container px-2 rounded-full">{count}</span>
        </h3>
        <button className="p-xs text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
      {children}
    </div>
  );
};

export default KanbanColumn;
