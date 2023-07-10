import React from 'react';
import styles from './MyMenu.module.scss'

const MyMenu = ({visible}) => {
  return (
    <div className={visible ? styles.menu : styles.menu_off}>
      <div className={styles.right_navbar}>
        <a href="" >Hello <span>Vladislav</span></a> {/*переделать на Link to*/}
        <a href="" >About</a> {/*переделать на Link to*/}
        <a href="" >Login</a> {/*переделать на Link to*/}
      </div>
    </div>
  );
};

export default MyMenu;