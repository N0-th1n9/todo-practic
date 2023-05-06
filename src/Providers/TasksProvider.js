import {createContext, useState} from "react";
import {SortContext} from "./SortProvider";

export const TasksContext = createContext([
  {
    id: 1,
    Name: "Buy Groceries",
    Body: "Buy groceries for the week. Don't forget to get some fruits and vegetables.",
    Date: "10:12:45",
    Favorites: true
  },
  {
    id: 2,
    Name: "Call Mom for Birthday",
    Body: "Call Mom to wish her a happy birthday. Send her some flowers too. Call Mom to wish her a happy birthday. " +
      "Send her some flowers too. Call Mom to wish her a happy birthday. Send her some flowers too.",
    Date: "16:30:00",
    Favorites: false
  },
  {
    id: 3,
    Name: "Dinner",
    Body: "Buy groceries for the week. Don't forget to get some fruits and vegetables.",
    Date: "01:57:30",
    Favorites: false
  },
])

export const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Name: "Buy Groceries",
      Body: "Buy groceries for the week. Don't forget to get some fruits and vegetables.",
      Date: "10:12:45",
      Favorites: true
    },
    {
      id: 2,
      Name: "Call Mom for Birthday",
      Body: "Call Mom to wish her a happy birthday. Send her some flowers too. Call Mom to wish her a happy birthday. " +
        "Send her some flowers too. Call Mom to wish her a happy birthday. Send her some flowers too.",
      Date: "16:30:00",
      Favorites: false
    },
    {
      id: 3,
      Name: "Dinner",
      Body: "Buy groceries for the week. Don't forget to get some fruits and vegetables.",
      Date: "01:57:30",
      Favorites: false
    },
  ])

  return(
    <TasksContext.Provider value={{tasks, setTasks}}>
      {children}
    </TasksContext.Provider>
  )
}
