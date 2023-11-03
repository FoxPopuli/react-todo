import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./store/task-context";
import SidebarModal from "./modals/SidebarModal";
import { ModalContextProvider } from "./store/modal-context";
import { AuthContextProvider } from "./store/auth-context";

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") console.log("hi");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ModalContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <SidebarModal />
          <App />
        </BrowserRouter>
      </TaskContextProvider>
    </ModalContextProvider>
  </AuthContextProvider>
);
