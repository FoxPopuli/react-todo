import { createContext } from "react";
import { useState } from "react";
import DummyData from "../data/dummyData";

const TaskContext = createContext({
  data: [],
  // For autocompletion
  markTaskComplete: (id) => {},
  markTaskIncomplete: (id) => {},
  removeTask: (id) => {},
  addTask: (task) => {},
});

export const TaskContextProvider = (props) => {
  const [data, setData] = useState(DummyData);

  const markCompleteHandler = (id) => {
    // When the updated state value depends on the previous value,
    // pass an arrow function since useState doesn't update instantly and
    // can lead to desync otherwise (scheduler)

    // setData((prevData) => {
    //   prevData.tasks = prevData.tasks.map((task) => {
    //     if (task.id === id) {
    //       task.complete = true;
    //     }
    //     return task;
    //   });
    //   console.log(prevData);
    //   return prevData;
    // });

    setData((prevData) => {
      const newData = { ...prevData };
      const newTasks = prevData.tasks.map((task) => {
        if (task.id === id) {
          task.complete = true;
        }
        return task;
      });

      newData.tasks = newTasks;
      console.log(newData);
      console.log(prevData);
      return newData;
    });
  };

  const markIncompleteHandler = (id) => {
    setData((prevData) => {
      // Apparently when using useState on an object, prevData must be deconstructed
      // and assigned, then modified and returned

      // Modifying and returning pevData doesn't rerender
      // components using this context

      // This doesn't apply when using useState on arrays

      const newData = { ...prevData };
      const newTasks = prevData.tasks.map((task) => {
        if (task.id === id) {
          task.complete = false;
        }
        return task;
      });

      newData.tasks = newTasks;
      console.log(newData);
      console.log(prevData);
      return newData;
    });
  };

  const removeTaskHandler = (id) => {
    setData((prevData) => {
      prevData.tasks.filter((task) => task.id !== id);
      return prevData;
    });
  };

  const addTaskHandler = (task) => {
    setData((prevData) => prevData.tasks.concat(task));
    // setData((prevData) => {
    //   const newData = prevData;
    //   const newTasks = prevData.tasks.filter((task) => task.id !== id);
    //   newData.tasks = newTasks;
    //   return newData;
    // });
  };

  const context = {
    data,
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
