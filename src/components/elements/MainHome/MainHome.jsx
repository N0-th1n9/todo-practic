import React, {useContext, useEffect} from 'react';
import styles from './MainHome.module.scss'
import {useSortAndSearchTasks} from "../../../hooks/useSortTasks";
import {SortContext} from "../../../Providers/SortProvider";
import {TasksContext} from "../../../Providers/TasksProvider";
import {useCommonTasks, useFavoritesTasks} from "../../../hooks/useDistributionTasks";
import MyControlPanel from "../../shared/MyControlPanel/MyControlPanel";
import MyAddPanel from "../../shared/MyAddPanel/MyAddPanel";
import TasksList from "../../shared/TasksList/TasksList";
import {VisibleMenuContext} from "../../../Providers/VisibleMenuProvider";
import {Link} from "react-router-dom";
import MyLoginPanel from "../../shared/MyLoginPanel/MyLoginPanel";
import axios from "axios";

export const defaultSettings = {selectedSort: '', isReversSort: false, search: ''}

const MainHome = () => {
  const {sort, setSort} = useContext(SortContext)
  const {tasks} = useContext(TasksContext)
  const {visibleMenu} = useContext(VisibleMenuContext)
  const sortAndSearchTasks = useSortAndSearchTasks(tasks, sort)
  const commonTasks = useCommonTasks(sortAndSearchTasks, tasks, sort);
  const favoritesTasks = useFavoritesTasks(sortAndSearchTasks, tasks, sort);

  return (
    <div className={visibleMenu ? [styles.main, styles.main_down].join(" ") : styles.main}>
      <MyAddPanel/>
      <h2>Notes</h2>
      <div className={styles.top}>
        <div className={styles.top_sort}>
          <MyControlPanel/>
        </div>
        <p className={styles.advise}>Success does not consist in never making mistakes but in never making the same one
          a second time.</p>
      </div>
      <div className={styles.top_tasks}>
        <h3>Favorites</h3>
        <Link to='/allTasks' className={styles.show_all} onClick={() => setSort({selectedSort: '', isReversSort: false, search:''})}>Show All <span>({tasks.length})</span></Link>
      </div>
      <TasksList tasks={favoritesTasks} favTasks = {true}/>
      <div className={styles.difTasks}>
        <h3>Other</h3>
        <TasksList tasks={commonTasks} favTasks = {false}/>
      </div>
    </div>
  );
};

export default MainHome;