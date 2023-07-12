import React, {useContext, useState} from 'react';
import styles from './Main.module.scss'
import {useSortAndSearchTasks} from "../../../hooks/useSortTasks";
import {SortContext} from "../../../Providers/SortProvider";
import {TasksContext} from "../../../Providers/TasksProvider";
import {useCommonTasks} from "../../../hooks/useDistributionTasks";
import {useFavoritesTasks} from "../../../hooks/useDistributionTasks";
import MyControlPanel from "../../UI/MyControlPanel/MyControlPanel";
import MyAddPanel from "../../UI/MyAddPanel/MyAddPanel";
import TasksList from "../../shared/TasksList/TasksList";
import {VisibleMenu} from "../../../Providers/VisibleMenu";

export const defaultSettings = {selectedSort: '', isReversSort: false, search: ''}

const Main = () => {
  const {sort} = useContext(SortContext)
  const {tasks, setTasks} = useContext(TasksContext)
  const {visibleMenu, setVisibleMenu} = useContext(VisibleMenu)
  const sortAndSearchTasks = useSortAndSearchTasks(tasks, sort)
  const commonTasks = useCommonTasks(sortAndSearchTasks, tasks, sort);
  const favoritesTasks = useFavoritesTasks(sortAndSearchTasks, tasks, sort);
  const [visible, setVisible] = useState(false)
  const [task, setTask] = useState({Name: "", Body: "", Date: "00:00:00:00"})

  const chooseFavorite = (id) => { // Изменение favorite по нажатию на звездачку
    const updatedTasks = [...tasks]; // Создаем копию массива tasks

    updatedTasks.forEach((t, index) => {
      if (t.id === id) {
        if (t.Favorites) {
          // Обновляем значение Favorites в копии
          updatedTasks[index] = {
            ...updatedTasks[index], Favorites: false
          };
        } else {
          updatedTasks[index] = {
            ...updatedTasks[index], Favorites: true
          };
        }
        setTasks(updatedTasks)
      }
    });
  }

  const addNewTask = (e) => {
    e.preventDefault()
    setTasks([...tasks, {id: Date.now(), ...task, Favorites: false}])
    console.log(tasks)
    setTask({Name: "", Body: "", Date: "00:00:00"})
    setVisible(false)

  }

  const removeTasks = (delTask) => {
    setTasks(tasks.filter(task => task.id !== delTask.id))
  }

  return (
    <div className={visibleMenu ? [styles.main, styles.main_down].join(" ") : styles.main}>
      <MyAddPanel visible={visible} setVisible={setVisible} task={task} setTask={setTask} addNewTask={addNewTask}/>
      <h2 className={styles.title}>Notes</h2>
      <div className={styles.top}>
        <div className={styles.top_sort}>
          <MyControlPanel setVisible={setVisible}/>
        </div>
        <p className={styles.advise}>Success does not consist in never making mistakes but in never making the same one
          a second time.</p>
      </div>
      <h3 className={styles.favorites}>Favorites</h3>
      <TasksList chooseFavorite={chooseFavorite} tasks={favoritesTasks} removeTasks={removeTasks} favTasks = {true}/>
      <div className={styles.difTasks}>
        <TasksList chooseFavorite={chooseFavorite} tasks={commonTasks} removeTasks={removeTasks} favTasks = {false}/>
      </div>
    </div>
  );
};

export default Main;