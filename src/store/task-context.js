import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "./auth-context";

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
  moveProjectUp: () => {},
  moveProjectDown: () => {},
  removeProject: () => {},
  setIsLoading: (isLoading) => {},
  initUser: () => {},
  fetchData: () => {},
});

const emptyDummyObj = {
  tasks: [],
  projects: [
    {
      title: "General",
      id: 0,
      sortedBy: "Priority",
    },
  ],
};

export const TaskContextProvider = (props) => {
  const [data, setData] = useState(emptyDummyObj);
  const [isLoading, setIsLoading] = useState(false); // For database sync
  const [isHardLoading, setIsHardLoading] = useState(false); // For displaying loading screen
  const authCtx = useContext(AuthContext);

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") console.log(data);
  });

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   setIsHardLoading(true);

  // fetch(
  //   // `https://react-to-do-development-default-rtdb.firebaseio.com/${authCtx.currentUser.uid}/data.json`
  //   "https://react-todo-75b5d-default-rtdb.firebaseio.com/test-data.json"
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((serverData) => {
  //     console.log(serverData);
  //     setData(tempData);
  //     setIsHardLoading(false);
  //   });
  // }, []);

  const initUser = (uid) => {
    // Initializes a new user for local data tracking
    setIsHardLoading(true);
    setData(emptyDummyObj);
    postToServer(data);
  };

  const modifyServerData = (data) => {
    fetch(
      // "https://react-todo-75b5d-default-rtdb.firebaseio.com/test-data.json",
      `https://react-to-do-development-default-rtdb.firebaseio.com/${authCtx.currentUser.uid}/data.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log("PUT complete");
      });
  };

  const fetchData = () => {
    setIsHardLoading(true);
    if (authCtx.currentUser) {
      fetch(
        `https://react-to-do-development-default-rtdb.firebaseio.com/${authCtx.currentUser.uid}/data.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((serverData) => {
          setData(serverData);
          console.log(serverData);
          setIsHardLoading(false);
        });
    } else {
      console.log("No user logged in.");
      setIsHardLoading(false);
    }
  };

  const getIsLoading = () => isLoading;
  const getIsHardLoading = () => isHardLoading;

  const hardReset = () => {
    setData(emptyDummyObj);
    if (authCtx.currentUser) modifyServerData(emptyDummyObj);
    console.log("Hard reset complete");
  };

  const moveProject = (id, direction) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = [...newData.projects];

      let modifier = 0;
      switch (direction) {
        case "up":
          modifier--;
          break;
        case "down":
        default:
          modifier++;
          break;
      }

      const ind1 = newProjects.findIndex((project) => project.id === id);
      let ind2 = ind1 + modifier;

      if (ind2 < 0) {
        ind2 = newProjects.length - 1;
      } else if (ind2 === newProjects.length) {
        ind2 = 0;
      }

      const proj1 = newProjects[ind1];
      newProjects[ind1] = newProjects[ind2];
      newProjects[ind2] = proj1;

      newData.projects = newProjects;

      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const removeProject = (id) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.filter(
        (project) => project.id !== id
      );
      newData.projects = newProjects;

      const newTasks = newData.tasks.filter((task) => {
        return task.projId !== id;
      });
      newData.tasks = newTasks;

      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const moveProjectUp = (id) => moveProject(id, "up");
  const moveProjectDown = (id) => moveProject(id, "down");

  const postToServer = (data) => {
    setIsLoading(true);
    fetch(
      `https://react-to-do-development-default-rtdb.firebaseio.com/${authCtx.currentUser.uid}/data.json`,

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

  const setGroupSort = (groupId, sortString) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.map((project) => {
        if (+project.id === +groupId) {
          project.sortedBy = sortString;
        }
        return project;
      });
      newData.projects = newProjects;

      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const toggleComplete = (id) => {
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
      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const removeTask = (id) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.filter((task) => task.id !== id);
      newData.tasks = newTasks;
      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const addTask = (task) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.concat(task);
      newData.tasks = newTasks;
      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const addProject = (project) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const newProjects = prevData.projects.concat(project);
      newData.projects = newProjects;
      if (authCtx.currentUser) modifyServerData(newData);
      return newData;
    });
  };

  const context = {
    data,
    setIsLoading,
    moveProjectDown,
    moveProjectUp,
    hardReset,
    getIsLoading,
    getIsHardLoading,
    fetchData,
    removeProject,
    setGroupSort,
    toggleComplete,
    removeTask,
    addTask,
    addProject,
    initUser,
    fetchData,
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
