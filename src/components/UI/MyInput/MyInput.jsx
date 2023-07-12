import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = ({...props}) => {

  return (
    <div>
      <input{...props} className={styles.myInput}/>
    </div>

  );
};
export default MyInput;