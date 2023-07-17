import React, {useContext} from 'react';
import styles from './MyBurger.module.scss'
import {VisibleMenu} from "../../../Providers/VisibleMenu";

const MyBurger = ({visible}) => {
  const {visibleMenu, setVisibleMenu} = useContext(VisibleMenu)

  const changeVisibleMenu = () => {
    setVisibleMenu(!visibleMenu)
  }

  return (
    <button className={styles.btn} onClick={() => changeVisibleMenu()}>
      <div className={visible ?  [styles.burger, styles.burger_off].join(" ") : styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={visible ? styles.cross : [styles.cross, styles.cross_off].join(" ")}>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default MyBurger;