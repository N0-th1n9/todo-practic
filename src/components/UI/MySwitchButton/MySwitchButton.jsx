import React from 'react';
import styles from './MySwitchButton.module.scss'

const MySwitchButton = ({...props}) => {
  return (
    <div>
      <input {...props.register} type="checkbox" className={styles.button}/>
    </div>
  );
};

export default MySwitchButton;