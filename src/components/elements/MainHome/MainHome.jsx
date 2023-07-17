import React, {useContext, useState} from 'react';
import styles from './MainHome.module.scss'
import {useSortAndSearchTasks} from "../../../hooks/useSortTasks";
import {SortContext} from "../../../Providers/SortProvider";
import {TasksContext} from "../../../Providers/TasksProvider";
import {useCommonTasks} from "../../../hooks/useDistributionTasks";
import {useFavoritesTasks} from "../../../hooks/useDistributionTasks";
import MyControlPanel from "../../shared/MyControlPanel/MyControlPanel";
import MyAddPanel from "../../shared/MyAddPanel/MyAddPanel";
import TasksList from "../../shared/TasksList/TasksList";
import {VisibleMenu} from "../../../Providers/VisibleMenu";
import {Link} from "react-router-dom";

export const defaultSettings = {selectedSort: '', isReversSort: false, search: ''}

const MainHome = () => {
  const {sort} = useContext(SortContext)
  const {tasks} = useContext(TasksContext)
  const {visibleMenu} = useContext(VisibleMenu)
  const sortAndSearchTasks = useSortAndSearchTasks(tasks, sort)
  const commonTasks = useCommonTasks(sortAndSearchTasks, tasks, sort);
  const favoritesTasks = useFavoritesTasks(sortAndSearchTasks, tasks, sort);
  const [visible, setVisible] = useState(false)


  return (
    <div className={visibleMenu ? [styles.main, styles.main_down].join(" ") : styles.main}>
      <MyAddPanel visible={visible} setVisible={setVisible}/>
      <h2>Notes</h2>
      <div className={styles.top}>
        <div className={styles.top_sort}>
          <MyControlPanel setVisible={setVisible}/>
        </div>
        <p className={styles.advise}>Success does not consist in never making mistakes but in never making the same one
          a second time.</p>
      </div>
      <div className={styles.top_tasks}>
        <h3>Favorites</h3>
        <Link to='/allTasks' className={styles.show_all}>Show All <span>({tasks.length})</span></Link>
      </div>
      <TasksList tasks={favoritesTasks} favTasks = {true}/>
      <div className={styles.difTasks}>
        <TasksList tasks={commonTasks} favTasks = {false}/>
      </div>
    </div>
  );
};

export default MainHome;