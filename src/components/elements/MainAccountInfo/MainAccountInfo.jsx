import React, {useContext} from 'react';
import styles from './MainAccountInfo.module.scss'
import {statsAll, statsDays} from "../../../Stats";
import StatsList from "../../shared/StatsList/StatsList";
import {VisibleMenuContext} from "../../../Providers/VisibleMenuProvider";

const MainAccountInfo = () => {
  const {visibleMenu} = useContext(VisibleMenuContext)

  return (
    <div className={visibleMenu ? [styles.account, styles.account_down].join(" ") : styles.account}>
      <div className={styles.account_top}>
        <h2>Account</h2>
        <p>Your account was created on <span>June 22 2023</span></p>
      </div>
      <div className={styles.stats}>
        <div className={styles.left_stats}>
          <StatsList stats={statsDays} name="Last 30 days"/>
          <StatsList stats={statsAll} name="All the time"/>
        </div>
        <div className={styles.right_stats}>
          In progress...
        </div>
      </div>
    </div>
  );
};

export default MainAccountInfo;