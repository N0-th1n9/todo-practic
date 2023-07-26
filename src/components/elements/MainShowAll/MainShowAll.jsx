import React, {useContext} from 'react';
import styles from './MainShowAll.module.scss'
import MyInputSearch from "../../UI/MyInputSearch/MyInputSearch";
import AllTasksList from "../../shared/AllTasksList/AllTasksList";
import {VisibleMenuContext} from "../../../Providers/VisibleMenuProvider";

const MainShowAll = () => {
  const {visibleMenu} = useContext(VisibleMenuContext)

  return (
    <div className={visibleMenu ? [styles.all_tasks, styles.all_tasks__down].join(" ") : styles.all_tasks}>
      <h2>Notes</h2>
      <div className={styles.top}>
        <div className={styles.top_sort}>
          <MyInputSearch placeholder="Search here..."/>
        </div>
        <p className={styles.advise}>Success does not consist in never making mistakes but in never making the same one
          a second time.</p>
      </div>
      <AllTasksList type="Today"/>
      <AllTasksList type="Last 7 days"/>
      <AllTasksList type="More 7 days"/>
    </div>
  );
};

export default MainShowAll;