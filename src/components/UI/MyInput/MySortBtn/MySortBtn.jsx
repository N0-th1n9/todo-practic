import React from 'react';
import styles from "./MySortBtn.module.scss"

const MySortBtn = ({value, ...props}) => {
  return (
    <button {...props} className={styles.btn}>
      {value}
    </button>
  );
};

export default MySortBtn;