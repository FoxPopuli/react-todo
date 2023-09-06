import "./index.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

import AllTasksPage from "./pages/AllTasksPage";
import AllProjectsPage from "./pages/AllProjectPage";
import NewTaskPage from "./pages/NewTaskPage";
import NewProjectPage from "./pages/NewProjectPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/all-projects" element={<AllProjectsPage />}></Route>
        <Route path="/new-task" element={<NewTaskPage />}></Route>
        <Route path="/new-project" element={<NewProjectPage />}></Route>
        <Route path="/all-tasks" element={<AllTasksPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
