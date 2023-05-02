import React from 'react';
import styles from './Main.module.scss'
import MyInput from "../../UI/MyInput/MyInput";
import MySortBtn from "../../UI/MyInput/MySortBtn/MySortBtn";
import MyRestoreBtn from "../../UI/MyInput/MyRestoreBtn/MyRestoreBtn";

const Main = () => {
  return (
    <div className={styles.main}>
      <span className={styles.title}>Notes</span>
      <div className={styles.top}>
        <div>
          <MyInput placeholder="Search here..."/>
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

        <p>Text lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
    </div>
  );
};

export default Main;