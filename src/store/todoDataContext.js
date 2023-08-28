import { createContext } from "react";
import { useState } from "react";
const CompleteTasksContext = createContext({
  completeTasks: [],
  // For autocompletion
  markTaskComplete: (task) => {},
  markTaskIncomplete: (id) => {},
  isTaskComplete: (id) => {},
});

export const CompleteTasksContextProvider = (props) => {
  const [completeTasks, setCompleteTasks] = useState([]);

  const completeTaskHandler = (completeTask) => {
    setCompleteTasks((prevCompletedTasks) => {
      prevCompletedTasks.concat(completeTask);
    });
  };

  const incompleteTaskHandler = (id) => {
    setCompleteTasks((prevCompletedTasks) => {
      return prevCompletedTasks.filter((task) => {
        if (task.id !== id) return task;
      });
    });
  };

  const isTaskComplete = (id) => {
    return completeTasks.some((task) => task.id === id);
  };

  const context = {
    completedTasks: completeTasks,
    markTaskComplete: completeTaskHandler,
    markTaskIncomplete: incompleteTaskHandler,
    isComplete: isTaskComplete,
  };

  return (
    <CompleteTasksContext.Provider value={context}>
      {props.children}
    </CompleteTasksContext.Provider>
  );
};

export default CompleteTasksContext;
