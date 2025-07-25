import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import App from "@/App";
import store from "@/store";
import "@/style.css";
// Create app
const root = createRoot(document.getElementById("root")!);

// Render the app
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
);
