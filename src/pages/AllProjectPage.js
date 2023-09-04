import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import { useContext } from "react";

const AllProjectsPage = () => {
  const taskCtx = useContext(TaskContext);
  // Filtered like this to exclude group 0
  const projects = taskCtx.data.projects.filter((project) => project.projId);
  let currentProjectTasks;
  return (
    <ul>
      {projects.map((project) => {
        currentProjectTasks = taskCtx.data.tasks.filter(
          (task) => task.projId === project.projId
        );
        return (
          <TaskGroup
            groupTitle={project.title}
            groupId={project.projId}
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
