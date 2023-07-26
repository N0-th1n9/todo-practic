import {createContext, useState} from "react";

export const VisibleMenuContext = createContext(false)

export const VisibleMenuProvider = ({children}) => {
  const [visibleMenu, setVisibleMenu] = useState(false)

  return(
    <VisibleMenuContext.Provider value={{visibleMenu, setVisibleMenu}}>
      {children}
    </VisibleMenuContext.Provider>
  )
}