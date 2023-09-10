import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import { useContext } from "react";

const AllProjectsPage = () => {
  const taskCtx = useContext(TaskContext);
  const projects = taskCtx.data.projects;

  let currentProjectTasks;
  return (
    <ul>
      {projects.map((project) => {
        currentProjectTasks = taskCtx.data.tasks.filter(
          (task) => task.projId === project.id
        );
        return (
          <TaskGroup
            groupTitle={project.title}
            groupId={project.id}
            tasks={currentProjectTasks}
            sortBy={project.sortedBy}
            key={project.id}
          />
        );
      })}
    </ul>
  );
};

export default AllProjectsPage;
