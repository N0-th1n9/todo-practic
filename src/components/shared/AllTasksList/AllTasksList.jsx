import React, {useContext, useMemo} from 'react';
import styles from './AllTasksList.module.scss'
import MyTask from "../../UI/MyTask/MyTask";
import {TasksContext} from "../../../Providers/TasksProvider";
import {SortContext} from "../../../Providers/SortProvider";
import {useSortAndSearchTasks} from "../../../hooks/useSortTasks";
import {VisibleMenuContext} from "../../../Providers/VisibleMenuProvider";

const AllTasksList = ({type}) => {
  const {sort} = useContext(SortContext)
  const {tasks} = useContext(TasksContext)
  const SortAndSearchTasks = useSortAndSearchTasks(tasks, sort)
  const {visibleMenu} = useContext(VisibleMenuContext)
  const tasksSortDate = []

  useMemo(() => {
    SortAndSearchTasks.forEach((task) => {
      if (task.From_creation === type) {
        tasksSortDate.push(task);
      }
    });
  }, [SortAndSearchTasks, visibleMenu]);


  return (
    <section className={styles.tasks_wrap}>
      <h3>{type}</h3>
      <div className={styles.tasks}>
        {tasksSortDate.length
          ?
          tasksSortDate.map((task, index) => {
              return <MyTask key={index} task={task} id={index} />;
            })
          :
          <h3 className={styles.notfound}>Tasks is not found</h3>
        }
      </div>
    </section>

  );
};

export default AllTasksList;