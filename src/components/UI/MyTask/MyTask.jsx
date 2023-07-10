import React, {useContext} from "react";
import styles from "./MyTask.module.scss"

const MyTask = ({task, chooseFavorite, removeTasks}) => {

  const stylesFavorites = () => {
    if (task.Favorites){
      return styles.favorite_on
    }else{
      return styles.favorite_off
    }
  }

  return (
    <div className={styles.task}>
      <div className={styles.top}>
        <h4>{task.Name}</h4>
        <div className={styles.btn}>
          <button className={stylesFavorites()} onClick={() => chooseFavorite(task.id)}></button>
          <button className={styles.del} onClick={() => removeTasks(task)}></button>
        </div>
      </div>
      <p>{task.Body}</p>
      <span>{task.Date}</span>
    </div>
  );
};

export default MyTask;