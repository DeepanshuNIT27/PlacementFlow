import { memo } from "react";
import { useDroppable } from "@dnd-kit/core";
import CompanyCard from "./CompanyCard";
import EmptyState from "../ui/EmptyState";

function Column({ title, count, cards }) {
  const { setNodeRef, isOver } = useDroppable({
    id: title,
    data: {
      status: title,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[500px] min-w-[300px] flex-col rounded-xl border bg-slate-900 transition-colors duration-200 ${
        isOver ? "border-blue-500 ring-2 ring-blue-500/20" : "border-slate-800"
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 p-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>

        <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
          {count}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {cards.length > 0 ? (
          cards.map((company) => (
            <CompanyCard key={company.id} companyData={company} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default memo(Column);
