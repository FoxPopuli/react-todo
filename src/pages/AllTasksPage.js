import classes from "./HomePage.module.css";
import { useContext } from "react";
import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";

import TestingButtons from "../components/TestingButtons/TestingButtons";
const AllTasksPage = () => {
  const taskCtx = useContext(TaskContext);
  const project = taskCtx.data.projects.filter(
    (project) => project.id === 0
  )[0];

  if (taskCtx.getIsHardLoading()) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.home}>
      <ul>
        <TaskGroup
          groupTitle="All Tasks"
          tasks={taskCtx.data.tasks}
          sortBy={project.sortedBy}
          groupId="0"
        />
      </ul>

      <TestingButtons />
    </section>
  );
};

export default AllTasksPage;
