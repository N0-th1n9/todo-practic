import React, {useContext} from 'react';
import styles from './MainShowAll.module.scss'
import MyInputSearch from "../../UI/MyInputSearch/MyInputSearch";
import MyTask from "../../UI/MyTask/MyTask";
import {TasksContext} from "../../../Providers/TasksProvider";

const MainShowAll = () => {
  const {tasks} = useContext(TasksContext)

  return (
    <div>
      <h2>Notes</h2>
      <div className={styles.top}>
        <div className={styles.top_sort}>
          <MyInputSearch placeholder="Search here..."/>
        </div>
        <p className={styles.advise}>Success does not consist in never making mistakes but in never making the same one
          a second time.</p>
      </div>

      <section className={styles.tasks_container}>
        <h3>Today</h3>
        <div className={styles.tasks}>
          {tasks.map(task =>
            <MyTask task={task}/>
          )}
        </div>
      </section>
      <section>
        <h3>Last 7 days</h3>
      </section>
      <section>
        <h3>More 7 days</h3>
      </section>
    </div>
  );
};

export default MainShowAll;