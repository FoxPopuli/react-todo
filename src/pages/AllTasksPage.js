import classes from "./HomePage.module.css";
import { useContext } from "react";
import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";

import TestingButtons from "../components/TestingButtons/TestingButtons";
const AllTasksPage = () => {
  const taskCtx = useContext(TaskContext);

  if (taskCtx.getIsHardLoading()) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.home}>
      <TaskGroup
        groupTitle="All Tasks"
        tasks={taskCtx.data.tasks}
        sortBy="Priority"
        groupId="0"
      />
      <TestingButtons />
    </section>
  );
};

export default AllTasksPage;
