import React from 'react';
import styles from "./SortNavigation.module.scss";
import MySortBtn from "../../UI/MySortBtn/MySortBtn";
import MyRestoreBtn from "../../UI/MyRestoreBtn/MyRestoreBtn";

const SortNavigation = () => {

  return (
    <div>
      <div className={styles.sortBtn}>
        <MySortBtn
          value="Date"
        />
        <MySortBtn
          value="Name"
        />
        <MyRestoreBtn/>
      </div>
    </div>

  );
};

export default SortNavigation;