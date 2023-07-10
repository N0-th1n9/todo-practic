import React from 'react';
import styles from "./MyTextarea.module.scss"

const MyTextarea = ({...props}) => {
  return (
    <div>
      <textarea {...props} className={styles.myTextarea}></textarea>
    </div>
  );
};

export default MyTextarea;