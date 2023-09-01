import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import { useContext } from "react";

const AllProjectsPage = () => {
  const taskCtx = useContext(TaskContext);
  const projects = taskCtx.projects;
  let currentProjectTasks;
  return (
    <ul>
      {projects.map((project) => {
        currentProjectTasks = taskCtx.tasks.filter(
          (task) => task.projId === project.projId
        );
        return (
          <TaskGroup
            groupTitle={project.title}
            tasks={currentProjectTasks}
            sortBy={project.sortedBy}
            key={project.projId}
          />
        );
      })}
    </ul>
  );
};

export default AllProjectsPage;
