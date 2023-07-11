import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import MyBurger from "../../UI/MyBurger/MyBurger";
import MyMenu from "../../UI/MyMenu/MyMenu";
import MyClock from "../../UI/MyClock/MyClock";

const Header = ({visible, setVisible}) => {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) setVisible(false)
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
          <h1 className={styles.logo}>To<span>Do</span></h1>
          <div className={styles.clock}>
            <MyClock/>
          </div>
        </div>
        <div className={styles.right_navbar}>
          <div className={styles.right_navbar_info}>
            <a href="">Hello <span>Vladislav</span></a> {/*переделать на Link to*/}
            <a href="">About</a> {/*переделать на Link to*/}
          </div>
          <a href="">Login</a> {/*переделать на Link to*/}
        </div>
        <div className={styles.burger} onClick={() => setVisible(!visible)}>
          <MyBurger visible={visible}/>
        </div>
      </div>
      <MyMenu visible={visible}/>
    </div>

  );
};

export default Header;