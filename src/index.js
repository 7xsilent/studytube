import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StudyProvider } from "./context/StudyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StudyProvider>
    <App />
  </StudyProvider>
);
