import React, {useContext} from 'react';
import styles from "./MyRestoreBtn.module.scss"
import {SortContext} from "../../../Providers/SortProvider";
import {defaultSettings} from "../../elements/Main/Main";

const MySortBtn = ({...props}) => {
  const {setSort} = useContext(SortContext)

  const ResetSort = () => {
    setSort(defaultSettings)
  }

  return (
    <button
      {...props}
      onClick={() => {ResetSort()}}
      className={styles.btnRestore}>
    </button>
  );
};

export default MySortBtn;