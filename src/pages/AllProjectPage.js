import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import { useContext } from "react";

const AllProjectsPage = () => {
  const taskCtx = useContext(TaskContext);
  const projects = taskCtx.projects;
  return {
    //Stopped here, produce TaskGroups mapped to projects
    // projects.map()
  };
  //   return <TaskGroup tasks={taskCtx.tasks} sortBy="priority" />;
};

export default AllProjectsPage;
