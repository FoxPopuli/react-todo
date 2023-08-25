import "./index.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NewTaskPage from "./pages/NewTaskPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new-task" element={<NewTaskPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
