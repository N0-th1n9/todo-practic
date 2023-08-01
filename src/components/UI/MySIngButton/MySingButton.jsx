import React from 'react';
import styles from './MySingButton.module.scss'

const MySingButton = ({...props}) => {
  return (
    <button {...props} type="button" className={props.sing ? [styles.btn, styles.btn_active].join(' ') : styles.btn}>
      {props.children}
    </button>
  );
};

export default MySingButton;