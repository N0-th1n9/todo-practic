import React, {useContext} from "react";
import styles from "./MyTask.module.scss"
import {TasksContext} from "../../../Providers/TasksProvider";

const MyTask = ({task, id}) => {

  return (
    <div className={styles.task}>
      <div className={styles.top}>
        <h4>{task.Name}</h4>
        <button></button>
      </div>
      <p>{task.Body}</p>
      <span>{task.Date}</span>
    </div>
  );
};

export default MyTask;