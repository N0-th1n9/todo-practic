import React, {useContext} from 'react';
import styles from './MyInput.module.scss'
import {SortContext} from "../../../Providers/SortProvider";

const MyInput = ({...props}) => {
  const {sort, setSort} = useContext(SortContext)

  return (
    <div className={styles.divMyInput}>
      <input
        {...props}
        onChange={(e) => {
          setSort({search: e.target.value})
        }}
        className={styles.myInput}/>
    </div>

  );
};

export default MyInput;