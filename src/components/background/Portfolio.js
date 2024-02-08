import React from "react";
import folderImg from "./images/folder.png";
import styles from "./PortfolioFolder.module.css";

const PortfolioFolder = (props) => {
  // const onClick = () => {
  //   props.setVisible(true);
  // };
  return (
    <>
      <div className={styles.portfolio} >
        <img src={folderImg} alt="folder" />
        <span className={styles.title}>My Portfolio!</span>
      </div>
    </>
  );
};

export default PortfolioFolder;
