import React from 'react';
import MyInput from "../MyInput/MyInput";
import styles from './MyAddPanel.module.scss'
import MyTextarea from "../MyTextarea/MyTextarea";
import MyAddButton from "../MyAddButton/MyAddButton";

const MyAddPanel = ({visible, setVisible, task, setTask, addNewTask}) => {
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
            <MyInput value={task.Name} onChange={e => setTask({...task, Name: e.target.value})}/>
          </div>
          <div>
            <h4>Description</h4>
            <MyTextarea value={task.Body} onChange={e => setTask({...task, Body: e.target.value})}/>
          </div>
          <div className={styles.down}>
            <div>
              <h4>Date</h4>
              <MyInput value={task.Date} onChange={e => setTask({...task, Date: e.target.value})}/>
            </div>
            <div className={styles.btn}>
              <MyAddButton onClick={addNewTask}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAddPanel;