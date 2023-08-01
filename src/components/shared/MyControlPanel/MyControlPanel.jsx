import React, {useContext} from 'react';
import MyInputSearch from "../../UI/MyInputSearch/MyInputSearch";
import SortNavigation from "../SortButtons/SortNavigation";
import MyAddButton from "../../UI/MyAddButton/MyAddButton";
import styles from "./MyControlPanel.module.scss"
import {VisiblePanelsContext} from "../../../Providers/VisiblePanelsProvider";

const MyControlPanel = ({visible,   setVisible}) => {
  const {visiblePanel, setVisiblePanel} = useContext(VisiblePanelsContext)

  return (
    <div>
      <MyInputSearch placeholder="Search here..."/>
      <div className={styles.btns}>
        <SortNavigation/>
        <MyAddButton onClick={() => setVisiblePanel({...visiblePanel, addPanel: true})}>
          Add Task
        </MyAddButton>
      </div>
    </div>
  );
};

export default MyControlPanel;