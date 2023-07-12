import {createContext, useState} from "react";

export const VisibleMenu = createContext(false)

export const VisibleMenuProvider = ({children}) => {
  const [visibleMenu, setVisibleMenu] = useState(false)

  return(
    <VisibleMenu.Provider value={{visibleMenu, setVisibleMenu}}>
      {children}
    </VisibleMenu.Provider>
  )
}