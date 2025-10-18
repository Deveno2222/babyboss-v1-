import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouterProvider } from "./app/providers/routes/ui/BrowserRouterProvider";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouterProvider>
      <App />
    </BrowserRouterProvider>
  </StrictMode>
);
