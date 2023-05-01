import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>HI</span>
      <a href="" className={styles.link}>Login</a> {/*переделать на Link to*/}
    </div>
  );
};

export default Header;