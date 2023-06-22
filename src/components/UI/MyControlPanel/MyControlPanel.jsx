import React from 'react';
import MyInputSearch from "../MyInputSearch/MyInputSearch";
import SortNavigation from "../../shared/SortButtons/SortNavigation";
import MyAddButton from "../MyAddButton/MyAddButton";
import styles from "./MyControlPanel.module.scss"

const MyControlPanel = ({setVisible}) => {

  return (
    <div>
      <MyInputSearch placeholder="Search here..."/>
      <div className={styles.btns}>
        <SortNavigation/>
        <MyAddButton onClick={() => setVisible(true)}/>
      </div>
    </div>
  );
};

export default MyControlPanel;