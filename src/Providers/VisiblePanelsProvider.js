import {createContext, useState} from "react";

export const VisiblePanelsContext = createContext({addPanel: false, loginPanel: false})

export const VisiblePanelsProvider = ({children}) => {
  const [visiblePanel, setVisiblePanel] = useState({addPanel: false, loginPanel: false})

  return(
    <VisiblePanelsContext.Provider value={{visiblePanel, setVisiblePanel}}>
      {children}
    </VisiblePanelsContext.Provider>
  )
}
