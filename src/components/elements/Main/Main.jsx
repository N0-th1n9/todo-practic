import React, {useContext, useEffect, useMemo} from 'react';
import styles from './Main.module.scss'
import TasksList from "../../shared/TasksList/TasksList";
import SortNavigation from "../../shared/SortButtons/SortNavigation";
import {useSortAndSearchTasks} from "../../../hooks/useSortTasks";
import {SortContext} from "../../../Providers/SortProvider";
import {TasksContext} from "../../../Providers/TasksProvider";
import {useCommonTasks} from "../../../hooks/DistributionTasks";
import {useFavoritesTasks} from "../../../hooks/DistributionTasks";

export const defaultSettings = {selectedSort: '', isReversSort: false, search: ''}

const Main = () => {
  const {sort} = useContext(SortContext)
  const {tasks, setTasks} = useContext(TasksContext)
  const sortAndSearchTasks = useSortAndSearchTasks(tasks, sort)
  const commonTasks = useCommonTasks(sortAndSearchTasks)
  const favoritesTasks = useFavoritesTasks(sortAndSearchTasks)

  const chooseFavorite = (task) => { // Изменение favorite по нажатию на звездачку
    const updatedTasks = [...tasks]; // Создаем копию массива tasks

    if (updatedTasks[task.id - 1].Favorites) {
      // Обновляем значение Favorites в копии
      updatedTasks[task.id - 1] = {
        ...updatedTasks[task.id - 1],
        Favorites: false
      };

    }else{
      // Обновляем значение Favorites в копии
      updatedTasks[task.id - 1] = {
        ...updatedTasks[task.id - 1],
        Favorites: true
      };
    }

    setTasks(updatedTasks)
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Notes</h2>
      <div className={styles.top}>
        <SortNavigation/>
        <p className={styles.advise}>Text lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
      <TasksList chooseFavorite={chooseFavorite} tasks={commonTasks}/>
      <h3 className={styles.favorites}>Favorites</h3>
      <TasksList chooseFavorite={chooseFavorite} tasks={favoritesTasks}/>
    </div>
  );
};

export default Main;