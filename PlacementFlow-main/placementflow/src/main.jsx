import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import PlacementProvider from "./context/PlacementContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlacementProvider>
        <App />
      </PlacementProvider>
    </BrowserRouter>
  </StrictMode>,
);
