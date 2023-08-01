import React from 'react';
import styles from './MyInputForm.module.scss'
import MyInput from "../../UI/MyInput/MyInput";

const MyInputForm = ({register, errors, name, label, type}) => {

  return (
    <label>
      <div className={styles.top}>
        <span>{label}</span>
        <div className={styles.error}>{errors[name] && <small>{errors[name].message || "Error!"}</small>}</div>      </div>
      <MyInput
        type={type}
        register={register}
        changeBorder = {errors[name]}
      />
    </label>
  );
};

export default MyInputForm;