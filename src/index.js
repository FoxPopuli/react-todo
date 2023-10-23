import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./store/task-context";
import SidebarModal from "./modals/SidebarModal";
import { ModalContextProvider } from "./store/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalContextProvider>
    <TaskContextProvider>
      <BrowserRouter>
        <SidebarModal />
        <App />
      </BrowserRouter>
    </TaskContextProvider>
  </ModalContextProvider>

  // <App />
);
