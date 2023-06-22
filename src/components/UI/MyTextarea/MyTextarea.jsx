import React from 'react';
import styles from "./MyTextarea.module.scss"

const MyTextarea = () => {
  return (
    <div>
      <textarea className={styles.myTextarea}></textarea>
    </div>
  );
};

export default MyTextarea;