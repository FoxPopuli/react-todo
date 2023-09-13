import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import Arrows from "../components/UI/Arrows/Arrows";
import classes from "./AllProjectPage.module.css";
import { useContext } from "react";
import ErrorBoundary from "../error/ErrorBoundary";

const AllProjectsPage = () => {
  const taskCtx = useContext(TaskContext);

  const moveProjectUp = (id) => {
    taskCtx.moveProjectUp(id);
  };
  const moveProjectDown = (id) => {
    taskCtx.moveProjectDown(id);
  };

  if (taskCtx.getIsHardLoading()) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  let currentProjectTasks;
  return (
    <ErrorBoundary>
      <ul>
        {taskCtx.data.projects.map((project) => {
          currentProjectTasks = taskCtx.data.tasks.filter(
            (task) => task.projId === project.id
          );
          return (
            <li className={classes.container} key={project.id}>
              <TaskGroup
                groupTitle={project.title}
                groupId={project.id}
                tasks={currentProjectTasks}
                sortBy={project.sortedBy}
              />
              <Arrows
                projId={project.id}
                onUpClick={moveProjectUp}
                onDownClick={moveProjectDown}
              />
            </li>
          );
        })}
      </ul>
    </ErrorBoundary>
  );
};

export default AllProjectsPage;
