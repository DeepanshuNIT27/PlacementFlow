import { useCallback, useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import Filters from "../components/dashboard/Filters";
import Board from "../components/board/Board";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [sortOption, setSortOption] = useState("latest");

  // Memoized Handlers
  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const handlePriorityChange = useCallback((value) => {
    setFilterPriority(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortOption(value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery("");
    setFilterPriority("all");
    setSortOption("latest");
  }, []);

  return (
    <section className="flex h-full flex-col gap-8">
      <DashboardHeader />

      <StatsCards />

      <Filters
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        filterPriority={filterPriority}
        onPriorityChange={handlePriorityChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
      />

      <div className="flex-1">
        <Board
          searchQuery={searchQuery}
          filterPriority={filterPriority}
          sortOption={sortOption}
        />
      </div>
    </section>
  );
}

export default Dashboard;
