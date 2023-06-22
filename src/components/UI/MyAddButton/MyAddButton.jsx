import React, {useContext} from 'react';
import styles from './MyAddButton.module.scss'

const MyAddButton = ({...props}) => {
  const CallAddPanel = () => {

  }

  return (
    <div>
      <button {...props} className={styles.addButton}>Add Task</button>
    </div>
  );
};

export default MyAddButton;