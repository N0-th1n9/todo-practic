import React, {useContext, useEffect, useMemo, useState} from 'react';
import styles from './Main.module.scss'
import TasksList from "../../shared/TasksList/TasksList";
import SortNavigation from "../../shared/SortButtons/SortNavigation";
import {SortContext} from "../../../Providers/SortProvider";
import MyAddButton from "../../UI/MyAddButton/MyAddButton";
import {TasksContext} from "../../../Providers/TasksProvider";

export const defaultSettings = {selectedSort: '', isReversSort: false, search: ''}

const Main = () => {
  const {sort} = useContext(SortContext)
  const {tasks, setTasks} = useContext(TasksContext)
  // const sortTasks = useSortTasks(sort)

  const sortTasks = useMemo(() => {
    if (sort.selectedSort && !sort.isReversSort) {
      return [...tasks].sort((a, b) =>
        a[sort.selectedSort].localeCompare(b[sort.selectedSort])
      )
    }else if (sort.selectedSort && sort.isReversSort){
      return [...tasks].sort((a, b) =>
        b[sort.selectedSort].localeCompare(a[sort.selectedSort])
      )
    }
    return tasks
  }, [sort.selectedSort, sort.isReversSort])


  const sortAndSearchTasks = useMemo(() => {
    if (sort.search === undefined){
      return sortTasks
    }
    return sortTasks.filter(task => task.Name.trim().toLowerCase().includes(sort.search.trim().toLowerCase()))
  }, [sort.search, sortTasks])


  const favoritesTasks = useMemo(() => {
    return sortAndSearchTasks.filter(task => task.Favorites === true);
  }, [tasks.Favorites, sortAndSearchTasks])

  const chooseFavor = () => {
    console.log(sort.Favorites)
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Notes</h2>
      <div className={styles.top}>
        <SortNavigation/>
        <p className={styles.advise}>Text lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
      <TasksList tasks={sortAndSearchTasks}/>
      <h3 className={styles.favorites}>Favorites</h3>
      <TasksList tasks={favoritesTasks} setTasks={setTasks}/>
    </div>
  );
};

export default Main;