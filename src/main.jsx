import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Set CSS variable for base URL so CSS url() can use it if needed
const rootEl = document.documentElement;
rootEl.style.setProperty("--base-url", import.meta.env.BASE_URL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
