import { createContext } from "react";
import { useState, useEffect } from "react";

const TaskContext = createContext({
  data: [],
  // For autocompletion
  toggleComplete: (id) => {},
  removeTask: (id) => {},
  addTask: (task) => {},
  addProject: (project) => {},
  setGroupSort: (groupId, sortString) => {},
  getIsLoading: () => {},
  getIsHardLoading: () => {},
  hardReset: () => {},
});

const emptyDummyObj = {
  tasks: [],
  projects: [
    {
      title: "General",
      id: 0,
      dueDate: new Date(2023, 9, 2),
      sortedBy: "Priority",
    },
  ],
};

// const

export const TaskContextProvider = (props) => {
  const [data, setData] = useState(emptyDummyObj);
  const [isLoading, setIsLoading] = useState(false);
  const [isHardLoading, setIsHardLoading] = useState(false);

  useEffect(() => {
    setIsHardLoading(true);

    fetch("https://react-todo-75b5d-default-rtdb.firebaseio.com/test-data.json")
      .then((response) => {
        return response.json();
      })
      .then((serverData) => {
        setData(serverData);
        setIsHardLoading(false);
      });
  }, []);

  const getIsLoading = () => isLoading;
  const getIsHardLoading = () => isHardLoading;

  const hardReset = () => {
    setData(emptyDummyObj);
    postToServer(emptyDummyObj);
    console.log("Hard reset complete");
  };

  const fetchData = () => {
    setIsHardLoading(true);
    fetch("https://react-todo-75b5d-default-rtdb.firebaseio.com/main-data.json")
      .then((response) => {
        return response.json();
      })
      .then((serverData) => {
        setData(serverData);
        setIsHardLoading(false);
      });
  };

  const postToServer = (data) => {
    setIsLoading(true);
    fetch(
      "https://react-todo-75b5d-default-rtdb.firebaseio.com/test-data.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      setIsLoading(false);
      console.log("POST complete");
    });
  };

  const modifyData = (data) => {
    fetch(
      "https://react-todo-75b5d-default-rtdb.firebaseio.com/test-data.json",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      setIsLoading(false);
      console.log("PUT complete");
    });
  };

  const setGroupSort = (groupId, sortString) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.map((project) => {
        if (project.id === groupId) {
          project.sortedBy = sortString;
        }
        return project;
      });
      newData.projects = newProjects;

      modifyData(newData);

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
      modifyData(newData);
      return newData;
    });
  };

  const removeTaskHandler = (id) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.filter((task) => task.id !== id);
      newData.tasks = newTasks;
      modifyData(newData);
      return newData;
    });
  };

  const addTaskHandler = (task) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.concat(task);
      newData.tasks = newTasks;
      modifyData(newData);
      return newData;
    });
  };

  const addProjectHandler = (project) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.concat(project);
      newData.projects = newProjects;
      modifyData(newData);
      return newData;
    });
  };

  const context = {
    data,
    hardReset,
    getIsLoading,
    getIsHardLoading,
    fetchData,
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
