import { createContext, useEffect, useMemo, useReducer } from "react";
import { initialState, placementReducer } from "./placementReducer";

export const PlacementContext = createContext(null);

function PlacementProvider({ children }) {
  const [state, dispatch] = useReducer(
    placementReducer,
    initialState,
    (initial) => {
      const savedCompanies = localStorage.getItem("companies");

      if (savedCompanies) {
        return {
          ...initial,
          companies: JSON.parse(savedCompanies),
        };
      }

      return initial;
    },
  );

  useEffect(() => {
    localStorage.setItem("companies", JSON.stringify(state.companies));
  }, [state.companies]);

  const value = useMemo(
    () => ({
      companies: state.companies,
      dispatch,
    }),
    [state.companies],
  );

  return (
    <PlacementContext.Provider value={value}>
      {children}
    </PlacementContext.Provider>
  );
}

export default PlacementProvider;
