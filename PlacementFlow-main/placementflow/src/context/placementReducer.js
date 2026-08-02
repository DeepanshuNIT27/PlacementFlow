import dummyData from "../utils/dummyData";

export const initialState = {
  companies: dummyData,
};

export function placementReducer(state, action) {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };

    case "UPDATE_COMPANY":
      return {
        ...state,
        companies: state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company,
        ),
      };

    case "UPDATE_COMPANY_DETAILS":
      return {
        ...state,
        companies: state.companies.map((company) =>
          company.id === action.payload.id
            ? {
                ...company,
                ...action.payload,
              }
            : company,
        ),
      };

    case "MOVE_COMPANY":
      return {
        ...state,
        companies: state.companies.map((company) =>
          company.id === action.payload.id
            ? { ...company, status: action.payload.status }
            : company,
        ),
      };

    case "DELETE_COMPANY":
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload,
        ),
      };

    default:
      return state;
  }
}
