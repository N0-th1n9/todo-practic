import React, {useContext} from 'react';
import styles from './MyBurger.module.scss'
import {VisibleMenuContext} from "../../../Providers/VisibleMenuProvider";

const MyBurger = () => {
  const {visibleMenu, setVisibleMenu} = useContext(VisibleMenuContext)

  const changeVisibleMenu = () => {
    setVisibleMenu(!visibleMenu)
  }

  return (
    <button className={styles.btn} onClick={() => changeVisibleMenu()}>
      <div className={visibleMenu ?  [styles.burger, styles.burger_off].join(" ") : styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={visibleMenu ? styles.cross : [styles.cross, styles.cross_off].join(" ")}>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default MyBurger;