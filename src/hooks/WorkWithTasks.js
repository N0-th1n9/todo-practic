import {useContext} from "react";
import {TasksContext} from "../Providers/TasksProvider";


export const useAddNewTasks = () => {
  const {tasks, setTasks} = useContext(TasksContext)

  return (e, task, setTask, visiblePanel, setVisiblePanel) => {
    e.preventDefault();
    setTasks([...tasks, {id: Date.now(), ...task, Favorites: false}]);
    console.log(tasks);
    setTask({Name: "", Body: "", Date: "00:00:00"});
    setVisiblePanel({...visiblePanel, addPanel: false});
  }
}


export const useRemoveTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  return (delTask) => {
    setTasks(tasks.filter((task) => task.id !== delTask.id));
  };
};

export const useChooseFavorite = () => {
  const {tasks, setTasks} = useContext(TasksContext)

  return (id) => { // Изменение favorite по нажатию на звездачку
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

}
