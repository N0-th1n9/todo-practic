import React, {useContext, useEffect} from 'react';
import styles from './Header.module.scss'
import MyBurger from "../../UI/MyBurger/MyBurger";
import MyMenu from "../../UI/MyMenu/MyMenu";
import MyClock from "../../UI/MyClock/MyClock";
import {Link} from "react-router-dom";
import {VisibleMenu} from "../../../Providers/VisibleMenu";

const Header = () => {
  const {visibleMenu, setVisibleMenu} = useContext(VisibleMenu)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) setVisibleMenu(false)
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left_navbar}>
            <Link to="/" ><h1 className={styles.logo}>To<span>Do</span></h1></Link>
          <div className={styles.clock}>
            <MyClock/>
          </div>
        </div>
        <div className={styles.right_navbar}>
          <div className={styles.right_navbar_info}>
            <button>Hello <span>Vladislav</span></button>
            <Link to="/about">About</Link>
          </div>
          <Link to='/login'>Login</Link>
        </div>
        <div className={styles.burger} onClick={() => setVisibleMenu(!visibleMenu)}>
          <MyBurger visible={visibleMenu}/>
        </div>
      </div>
      <MyMenu visible={visibleMenu}/>
    </div>

  );
};

export default Header;