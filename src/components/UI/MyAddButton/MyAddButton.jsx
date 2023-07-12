import React from 'react';
import styles from './MyAddButton.module.scss'

const MyAddButton = ({...props}) => {
  return (
    <div>
      <button {...props} className={styles.addButton}>Add Task</button>
    </div>
  );
};

export default MyAddButton;