import "./index.css";
import Layout from "./layout/Layout";
import ErrorBoundary from "./error/ErrorBoundary";

import AllTasksPage from "./pages/AllTasksPage";
import AllProjectsPage from "./pages/AllProjectPage";
import NewTaskPage from "./pages/NewTaskPage";
import NewProjectPage from "./pages/NewProjectPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Routes>
          <Route path="/react-todo" element={<AllProjectsPage />}></Route>
          <Route path="/" element={<AllProjectsPage />}></Route>
          <Route path="/all-projects" element={<AllProjectsPage />}></Route>
          <Route path="/new-task" element={<NewTaskPage />}></Route>
          <Route path="/new-project" element={<NewProjectPage />}></Route>
          <Route path="/all-tasks" element={<AllTasksPage />} />
          <Route path="/login" element={<SignupPage />} />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
