import { createContext } from "react";
import { useState } from "react";
import DummyData from "../data/dummyData";

const TaskContext = createContext({
  tasks: [],
  // For autocompletion
  markTaskComplete: (id) => {},
  markTaskIncomplete: (id) => {},
  removeItem: (id) => {},
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

  const removeItemHandler = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const context = {
    tasks: tasks,
    markTaskComplete: markCompleteHandler,
    markTaskIncomplete: markIncompleteHandler,
    removeItem: removeItemHandler,
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
