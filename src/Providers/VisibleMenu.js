import {createContext, useState} from "react";

export const VisibleMenu = createContext(false)

export const VisibleMenuProvider = ({children}) => {
  const [visible, setVisible] = useState(false)

  return(
    <VisibleMenu.Provider value={{visible, setVisible}}>
      {children}
    </VisibleMenu.Provider>
  )
}