import classes from "./ProjectDetails.module.css";
import DueDate from "../DueDate/DueDate";
import TaskContext from "../../store/task-context";
import { useContext } from "react";

const ProjectDetails = (props) => {
  // const taskCtx = useContext(TaskContext);
  // const projectId = props.projId;
  return (
    <div className={classes.main}>
      <DueDate dueDate={props.dueDate} />
    </div>
  );
};

export default ProjectDetails;
