import React from 'react';
import MyInput from "../MyInput/MyInput";
import styles from './MyAddPanel.module.scss'
import MyTextarea from "../MyTextarea/MyTextarea";
import MyAddButton from "../MyAddButton/MyAddButton";

const MyAddPanel = ({visible, setVisible}) => {
  const rootClasses = [styles.body_off]

  if (visible) {
    rootClasses.push(styles.body_on)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <form action="" className={styles.panel}>
          <div>
            <h4>Name</h4>
            <MyInput/>
          </div>
          <div>
            <h4>Description</h4>
            <MyTextarea/>
          </div>
          <div className={styles.btn}>
            <MyAddButton/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAddPanel;