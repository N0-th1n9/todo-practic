import React from 'react';
import styles from './Header.module.scss'
import MyBurger from "../../UI/MyBurger/MyBurger";
import MyMenu from "../../shared/MyMenu/MyMenu";
import MyClock from "../../UI/MyClock/MyClock";
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left_navbar}>
            <Link to="/"><h1 className={styles.logo}>To<span>Do</span></h1></Link>
          <div className={styles.clock}>
            <MyClock/>
          </div>
        </div>
        <MyMenu/>
        <MyBurger/>
      </div>
    </div>

  );
};

export default Header;