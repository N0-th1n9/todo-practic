import React from 'react';
import MyInputSearch from "../../UI/MyInputSearch/MyInputSearch";
import SortNavigation from "../SortButtons/SortNavigation";
import MyAddButton from "../../UI/MyAddButton/MyAddButton";
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