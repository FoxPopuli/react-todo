import { createContext } from "react";
import { useState } from "react";
import DummyData from "../data/dummyData";

const TaskContext = createContext({
  data: [],
  // For autocompletion
  toggleComplete: (id) => {},
  removeTask: (id) => {},
  addTask: (task) => {},
  addProject: (project) => {},
  setGroupSort: (groupId, sortString) => {},
});

export const TaskContextProvider = (props) => {
  const [data, setData] = useState(DummyData);

  const setGroupSort = (groupId, sortString) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.map((project) => {
        if (project.projId === groupId) {
          project.sortedBy = sortString;
        }
        return project;
      });
      newData.projects = newProjects;
      return newData;
    });
  };

  const toggleCompleteHandler = (id) => {
    // When the updated state value depends on the previous value,
    // pass an arrow function since useState doesn't update instantly and
    // can lead to desync otherwise (scheduler)

    // Apparently when using useState on an object, prevData must be deconstructed
    // and assigned, then modified and returned

    // Modifying and returning pevData doesn't rerender
    // components using this context

    // This doesn't apply when using useState on arrays

    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.map((task) => {
        if (task.id === id) task.complete = !task.complete;
        return task;
      });

      newData.tasks = newTasks;
      fetch(
        "https://react-todo-75b5d-default-rtdb.firebaseio.com/main-data.json",
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return newData;
    });
  };

  const removeTaskHandler = (id) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.filter((task) => task.id !== id);
      newData.tasks = newTasks;
      fetch(
        "https://react-todo-75b5d-default-rtdb.firebaseio.com/main-data.json",
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return newData;
    });
  };

  const addTaskHandler = (task) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.concat(task);
      newData.tasks = newTasks;
      fetch(
        "https://react-todo-75b5d-default-rtdb.firebaseio.com/main-data.json",
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return newData;
    });
  };

  const addProjectHandler = (project) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.concat(project);
      newData.projects = newProjects;
      fetch(
        "https://react-todo-75b5d-default-rtdb.firebaseio.com/main-data.json",
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return newData;
    });
  };

  const context = {
    data,
    setGroupSort,
    toggleComplete: toggleCompleteHandler,
    removeTask: removeTaskHandler,
    addTask: addTaskHandler,
    addProject: addProjectHandler,
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
