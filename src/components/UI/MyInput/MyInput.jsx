import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = ({register, changeBorder, type}) => {

  const rootClasses = [styles.myInput]
  if (changeBorder) {
    rootClasses.push(styles.error)
  }

  return (
    <div>
      <input type={type} {...register} className={rootClasses.join(" ")}/>
    </div>

  );
};
export default MyInput;