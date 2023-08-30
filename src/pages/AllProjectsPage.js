import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const AllProjectsPage = (props) => {
  const taskCtx = useContext(TaskContext);

  const completeTasks = taskCtx.tasks.filter((task) => task.complete);
  const incompleteTasks = taskCtx.tasks.filter((task) => !task.complete);

  const projects = taskCtx.projects;
  console.log(projects);

  return (
    <section className={classes.home}>
      {projects.map((project) => {
        const completeProjectTasks = completeTasks.filter((task) => {
          return task.projId === project.id;
        });
        const incompleteProjectTasks = incompleteTasks.filter((task) => {
          return task.projId === project.id;
        });

        return (
          <div>
            <h2>{project.title}</h2>
            <TodoList
              data={incompleteProjectTasks}
              onRemoveItem={props.onRemoveItem}
              onMarkDone={props.onMarkDone}
            />
            <TodoList
              data={completeProjectTasks}
              onRemoveItem={props.onRemoveItem}
              onMarkDone={props.onMarkDone}
            />
          </div>
        );
      })}
    </section>
  );
};

export default AllProjectsPage;
