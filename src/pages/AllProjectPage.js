import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import Arrows from "../components/UI/Arrows/Arrows";
import classes from "./AllProjectPage.module.css";
import { useState, useContext } from "react";

const swapElements = (myArray, index1, index2) => {
  [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};

const AllProjectsPage = () => {
  const taskCtx = useContext(TaskContext);
  // taskCtx.hardReset();

  const moveProjectUp = (id) => {
    // swapElements(projects, ind1, ind2);
    taskCtx.moveProjectUp(id);
    console.log("Moving up");
  };
  const moveProjectDown = (id) => {
    // const ind1 = projects.filter((project) => project.id === id);
    // const ind2 = ind1 - 1;
    // swapElements(projects, ind1, ind2);
    taskCtx.moveProjectDown(id);
    console.log("Moving down");
  };

  let currentProjectTasks;
  return (
    <ul>
      {taskCtx.data.projects.map((project) => {
        currentProjectTasks = taskCtx.data.tasks.filter(
          (task) => task.projId === project.id
        );
        return (
          <div className={classes.container}>
            <TaskGroup
              groupTitle={project.title}
              groupId={project.id}
              tasks={currentProjectTasks}
              sortBy={project.sortedBy}
              key={project.id}
            />
            <Arrows
              projId={project.id}
              onUpClick={moveProjectUp}
              onDownClick={moveProjectDown}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default AllProjectsPage;
