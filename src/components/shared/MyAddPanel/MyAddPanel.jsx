import React, {useContext, useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import styles from './MyAddPanel.module.scss'
import MyTextarea from "../../UI/MyTextarea/MyTextarea";
import MyAddButton from "../../UI/MyAddButton/MyAddButton";
import {useAddNewTasks} from "../../../hooks/WorkWithTasks";
import {VisiblePanelsContext} from "../../../Providers/VisiblePanelsProvider";

const MyAddPanel = () => {
  const {visiblePanel, setVisiblePanel} = useContext(VisiblePanelsContext)
  const [task, setTask] = useState({Name: "", Body: "", Date: "00:00:00:00"})
  const addNewTasks = useAddNewTasks()

  const rootClasses = [styles.body_off]
  if (visiblePanel.addPanel) {
    rootClasses.push(styles.body_on)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisiblePanel({...visiblePanel, addPanel: false})}>
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
              <MyAddButton onClick={e => addNewTasks(e, task, setTask, visiblePanel, setVisiblePanel)}>
                Add Task
              </MyAddButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAddPanel;