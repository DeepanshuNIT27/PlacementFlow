import { useContext } from "react";
import { PlacementContext } from "../context/PlacementContext";

function usePlacement() {
  const context = useContext(PlacementContext);

  if (!context) {
    throw new Error("usePlacement must be used inside PlacementProvider");
  }

  return context;
}

export default usePlacement;
