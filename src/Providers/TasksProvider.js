import {createContext, useState} from "react";
import data from "../data";

export const TasksContext = createContext(data)

export const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useState(data)

  return(
    <TasksContext.Provider value={{tasks, setTasks}}>
      {children}
    </TasksContext.Provider>
  )
}
