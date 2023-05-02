import React from 'react';
import styles from "./MyRestoreBtn.module.scss"

const MySortBtn = ({...props}) => {
  return (
    <button {...props} className={styles.btnRestore}>
    </button>
  );
};

export default MySortBtn;