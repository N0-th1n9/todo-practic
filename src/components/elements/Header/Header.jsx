import React, {useContext} from 'react';
import styles from './Header.module.scss'
import MyBurger from "../../UI/MyBurger/MyBurger";
import MyMenu from "../../shared/MyMenu/MyMenu";
import MyClock from "../../UI/MyClock/MyClock";
import {Link} from "react-router-dom";
import {SortContext} from "../../../Providers/SortProvider";
import MyLoginPanel from "../../shared/MyLoginPanel/MyLoginPanel";

const Header = () => {
  const {sort, setSort} = useContext(SortContext)

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left_navbar}>
            <Link to="/" onClick={() => setSort({selectedSort: '', isReversSort: false, search:''})}><h1 className={styles.logo}>To<span>Do</span></h1></Link>
          <div className={styles.clock}>
            <MyClock/>
          </div>
        </div>
        <MyMenu/>
        <MyBurger/>
      </div>
      <MyLoginPanel/>
    </div>

  );
};

export default Header;