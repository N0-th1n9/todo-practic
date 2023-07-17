import React, {useContext} from 'react';
import styles from './MyMenu.module.scss'
import {NavLink} from "react-router-dom";
import {VisibleMenu} from "../../../Providers/VisibleMenu";

const MyMenu = () => {
  const {visibleMenu} = useContext(VisibleMenu)

  return (
    <div className={visibleMenu ? styles.navbar : [styles.navbar, styles.navbar_off].join(" ")}>
      <div className={styles.navbar_info}>
        <NavLink to='/im'>Hello <span>Vladislav</span></NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default MyMenu;