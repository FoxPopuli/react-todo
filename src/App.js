import "./index.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NewTaskPage from "./pages/NewTaskPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DummyData from "./data/dummyData";

function App() {
  const [data, setData] = useState(DummyData);
  const navigate = useNavigate();

  const onAddTask = (newItem) => {
    newItem.dateAdded = new Date();
    newItem.id = Math.floor(Math.random() * 100);

    const newData = [...data, newItem];
    setData(newData);
    navigate("/");
  };

  const onRemoveItem = (id) => {
    const newData = data.filter((item) => {
      if (item.id !== id) return item;
      return null;
    });
    setData(newData);
  };

  const onMarkDone = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
        return item;
      }
      return item;
    });
    console.log(newData);
    setData(newData);
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              data={data}
              onRemoveItem={onRemoveItem}
              onMarkDone={onMarkDone}
            />
          }
        ></Route>
        <Route
          path="/new-task"
          element={<NewTaskPage onAddTask={onAddTask} />}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
