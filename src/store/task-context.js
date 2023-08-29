import { createContext } from "react";
import { useState } from "react";
import DummyData from "../data/dummyData";

const TaskContext = createContext({
  tasks: [],
  // For autocompletion
  markTaskComplete: (id) => {},
  markTaskIncomplete: (id) => {},
  removeTask: (id) => {},
  addTask: (task) => {},
});

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState(DummyData);

  const markCompleteHandler = (id) => {
    // When the updated state value depends on the previous value,
    // pass an arrow function since useState doesn't update instantly and
    // can lead to desync otherwise (scheduler)

    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          task.complete = true;
        }
        return task;
      });
    });
  };

  const markIncompleteHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          task.complete = false;
        }
        return task;
      });
    });
  };

  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  const context = {
    tasks,
    markTaskComplete: markCompleteHandler,
    markTaskIncomplete: markIncompleteHandler,
    removeTask: removeTaskHandler,
    addTask: addTaskHandler,
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
