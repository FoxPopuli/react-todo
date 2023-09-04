import classes from "./HomePage.module.css";
import { useContext } from "react";
import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";

const AllTasksPage = () => {
  const taskCtx = useContext(TaskContext);
  // Filter everything except group 0
  const project = taskCtx.data.projects.filter((project) => !project.projId)[0];
  return (
    <section className={classes.home}>
      <TaskGroup
        groupTitle="All Tasks"
        tasks={taskCtx.data.tasks}
        sortBy={project.sortedBy}
        groupId={project.projId}
      />
    </section>
  );
};

export default AllTasksPage;
