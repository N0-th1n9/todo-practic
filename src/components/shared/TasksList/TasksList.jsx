import React from 'react';
import MyTask from "../../UI/MyTask/MyTask";
import styles from "./TasksList.module.scss"

const TasksList = ({chooseFavorite, tasks}) => {

  return (
    <div className={styles.tasks_container}>
      <div className={styles.btnShow_container}>
        <button className={styles.btnShow}>show all</button>
      </div>
      <div className={styles.tasks}>
        {tasks.length
          ?
          tasks.map(task =>
            <MyTask key={task.id} task={task} id={task.id} chooseFavorite={chooseFavorite}/>)
          :
          <h3>Tasks is not found</h3>
        }
      </div>
    </div>

  );
};

export default TasksList;