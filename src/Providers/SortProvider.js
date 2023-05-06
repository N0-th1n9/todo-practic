import {createContext, useState} from "react";

export const SortContext = createContext({selectedSort: '', isReversSort: false, search:''})

export const SortProvider = ({children}) => {
  const [sort, setSort] = useState({selectedSort: '', isReversSort: false, search: ''})

  return(
    <SortContext.Provider value={{sort, setSort}}>
      {children}
    </SortContext.Provider>
  )
}
