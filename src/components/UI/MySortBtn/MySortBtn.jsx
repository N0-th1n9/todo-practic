import React, {useContext,useState} from 'react';
import styles from "./MySortBtn.module.scss"
import {SortContext} from "../../../Providers/SortProvider";

const MySortBtn = ({value, ...props}) => {
  const {sort, setSort} = useContext(SortContext)
  const [revers, setRevers] = useState(false)

  //Проверка на обратную сортировку
  const changeSort = () => {
    if (sort.selectedSort !== value && sort.selectedSort !== ''){
      setSort({selectedSort: value, isReversSort: false})
      setRevers(true)
    }else if (sort.selectedSort === value){
      setSort({selectedSort: value, isReversSort: revers})
      setRevers(!revers)
    }else if(sort.selectedSort === ''){
      setSort({selectedSort: value, isReversSort: false})
      setRevers(true)
    }
  }

  //Установка классов в зависимости от сортировки
  const changeClass = () => {
    if (sort.selectedSort === value && sort.isReversSort === false) {
      return [styles.btn, styles.btn_active]
    }
    if (sort.selectedSort === value && sort.isReversSort === true) {
      return [styles.btn, styles.btn_active_reverse]
    }
    return [styles.btn]
  }

  return (
    <button
      {...props}
      onClick={() => {
        changeSort()
      }}
      className={changeClass().join(" ")}
    >
      {value}
    </button>
  );
};

export default MySortBtn;