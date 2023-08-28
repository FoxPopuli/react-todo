import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CompleteTasksContextProvider from "./store/todoDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CompleteTasksContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CompleteTasksContextProvider>

  // <App />
);
