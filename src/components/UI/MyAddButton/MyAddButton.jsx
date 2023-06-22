import React from 'react';
import styles from './MyAddButton.module.scss'

const MyAddButton = ({...props}) => {
  return (
    <div>
      <button {...props} className={styles.addButton}></button>
    </div>
  );
};

export default MyAddButton;