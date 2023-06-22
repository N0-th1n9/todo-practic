import React, {useContext} from "react";
import styles from "./MyTask.module.scss"

const MyTask = ({task, chooseFavorite, id}) => {

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
        <button className={stylesFavorites()} onClick={() => chooseFavorite(task)}></button>
      </div>
      <p>{task.Body}</p>
      <span>{task.Date}</span>
    </div>
  );
};

export default MyTask;