import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import Arrows from "../components/UI/Arrows/Arrows";
import classes from "./AllProjectPage.module.css";
import { useContext } from "react";

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

  if (!taskCtx.data.tasks.length) {
    return <p>No Tasks!</p>;
  }

  let currentProjectTasks;
  return (
    <ul>
      {taskCtx.data.projects.map((project) => {
        currentProjectTasks = taskCtx.data.tasks.filter(
          (task) => task.projId === project.id
        );
        return (
          <div className={classes.container} key={project.id}>
            <TaskGroup
              groupTitle={project.title}
              groupId={project.id}
              tasks={currentProjectTasks}
              sortBy={project.sortedBy}
              // key={project.id}
            />
            <Arrows
              projId={project.id}
              key={Math.floor(Math.random() * 100000)}
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
