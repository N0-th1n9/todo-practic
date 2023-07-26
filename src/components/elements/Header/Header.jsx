import React, {useContext} from 'react';
import styles from './Header.module.scss'
import MyBurger from "../../UI/MyBurger/MyBurger";
import MyMenu from "../../shared/MyMenu/MyMenu";
import MyClock from "../../UI/MyClock/MyClock";
import {Link} from "react-router-dom";
import {SortContext} from "../../../Providers/SortProvider";

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
    </div>

  );
};

export default Header;