import "./index.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NewTaskPage from "./pages/NewTaskPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const DUMMY_DATA = [
  {
    title: "Take out rubbish",
    id: Math.floor(Math.random() * 100),
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 14),
    priority: 1,
    complete: false,
  },
  {
    title: "Do laundry",
    id: Math.floor(Math.random() * 100),
    dateAdded: new Date(),
    dueDate: new Date(2023, 9, 12),
    priority: 2,
    complete: false,
  },
  {
    title: "Cook dinner",
    id: Math.floor(Math.random() * 100),
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 15),
    priority: 3,
    complete: false,
  },
];

function App() {
  const [data, setData] = useState(DUMMY_DATA);
  const onAddTask = (newItem) => {
    newItem.dateAdded = new Date();

    newItem.id = Math.floor(Math.random() * 100);

    const newData = [...data, newItem];
    console.log("using this data: ");
    console.log(newData);
    setData(newData);
  };

  const onRemoveItem = (id) => {
    const newData = data.filter((item) => {
      if (data.id !== id) return item;
    });
    console.log("using this data: ");
    console.log(newData);
    setData(newData);
  };
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<HomePage data={data} onRemoveItem={onRemoveItem} />}
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
