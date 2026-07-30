import { useMemo } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";

import usePlacement from "../../hooks/usePlacement";
import Column from "./Column";

const columns = ["Wishlist", "Applied", "OA", "Interview", "Offer", "Rejected"];

function Board({
  searchQuery = "",
  filterPriority = "all",
  sortOption = "latest",
}) {
  const { companies, dispatch } = usePlacement();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    dispatch({
      type: "MOVE_COMPANY",
      payload: {
        id: active.id,
        status: over.id,
      },
    });
  };

  // ✅ Memoized Search + Filter + Sort
  const processedCompanies = useMemo(() => {
    let result = [...companies];

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      result = result.filter(
        (company) =>
          company.company.toLowerCase().includes(query) ||
          company.role.toLowerCase().includes(query),
      );
    }

    // Priority Filter
    if (filterPriority !== "all") {
      result = result.filter((company) => company.priority === filterPriority);
    }

    // Sort
    switch (sortOption) {
      case "company":
        result.sort((a, b) => a.company.localeCompare(b.company));
        break;

      case "package":
        result.sort(
          (a, b) =>
            parseFloat(b.packageLPA.replace(/[^\d.]/g, "")) -
            parseFloat(a.packageLPA.replace(/[^\d.]/g, "")),
        );
        break;

      default:
        break;
    }

    return result;
  }, [companies, searchQuery, filterPriority, sortOption]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <section className="overflow-x-auto">
        <div className="flex gap-5 pb-2">
          {columns.map((title) => {
            const cards = processedCompanies.filter(
              (company) => company.status === title,
            );

            return (
              <Column
                key={title}
                title={title}
                count={cards.length}
                cards={cards}
              />
            );
          })}
        </div>
      </section>
    </DndContext>
  );
}

export default Board;
