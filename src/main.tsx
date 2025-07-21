import "./index.css";

// src/index
import { scan } from "react-scan"; // must be imported before React and React DOM
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

scan({
  enabled: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
