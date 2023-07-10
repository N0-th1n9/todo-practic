import React from 'react';
import styles from './MyBurger.module.scss'

const MyBurger = ({visible}) => {

  return (
    <button className={styles.btn}>
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