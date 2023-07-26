import React, {useContext, useEffect, useState} from 'react';
import styles from './MyLoginPanel.module.scss'
import {VisiblePanelsContext} from "../../../Providers/VisiblePanelsProvider";
import MySingButton from "../../UI/MySIngButton/MySingButton";
import MyInput from "../../UI/MyInput/MyInput";

const MyLoginPanel = () => {
  const {visiblePanel, setVisiblePanel} = useContext(VisiblePanelsContext)
  const [sing, setSing] = useState({singIn: true, singUp: false})

  const rootClasses = [styles.login_off]
  if (visiblePanel.loginPanel) {
    rootClasses.push(styles.login)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisiblePanel({...visiblePanel, loginPanel: false})}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.top}>
          <MySingButton
            onClick={() => setSing({singIn: true, singUp: false})}
            sing = {sing.singIn}
          >Sing In
          </MySingButton>
          <MySingButton
            onClick={() => setSing({singIn: false, singUp: true})}
            sing = {sing.singUp}
          >Sing Up
          </MySingButton>
        </div>
        <section className={styles.singIn}>
          <div>
            <h4 className={styles.label}>Email</h4>
            <MyInput/>
          </div>
          <div>
            <h4 className={styles.label}>Password</h4>
            <MyInput/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyLoginPanel;