import React, {useContext} from 'react';
import styles from './MyMenu.module.scss'
import {NavLink} from "react-router-dom";
import {VisibleMenuContext} from "../../../Providers/VisibleMenuProvider";
import {VisiblePanelsContext} from "../../../Providers/VisiblePanelsProvider";

const MyMenu = () => {
  const {visiblePanel, setVisiblePanel} = useContext(VisiblePanelsContext)
  const {visibleMenu} = useContext(VisibleMenuContext)

  return (
    <div className={visibleMenu ? styles.navbar : [styles.navbar, styles.navbar_off].join(" ")}>
      <div className={styles.navbar_info}>
        <NavLink to='/im'>Hello <span>Vladislav</span></NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      <button onClick={() => setVisiblePanel({...visiblePanel, loginPanel: true})}>Login</button>
    </div>
  );
};

export default MyMenu;