import { createContext } from "react";
import { useState } from "react";
const TaskContext = createContext({
  completeTasks: [],
  // For autocompletion
  markTaskComplete: (task) => {},
  markTaskIncomplete: (id) => {},
  isTaskComplete: (id) => {},
});

export const TaskContextProvider = (props) => {
  const [completeTasks, setCompleteTasks] = useState([]);

  const markCompleteHandler = (completeTask) => {
    // When the updated state value depends on the previous value,
    // pass an arrow function since useState doesn't update instantly and
    // can lead to desync otherwise (scheduler)
    setCompleteTasks((prevCompletedTasks) => {
      return prevCompletedTasks.concat(completeTask);
    });
  };

  const markIncompleteHandler = (id) => {
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
    markTaskComplete: markCompleteHandler,
    markTaskIncomplete: markIncompleteHandler,
    isComplete: isTaskComplete,
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
