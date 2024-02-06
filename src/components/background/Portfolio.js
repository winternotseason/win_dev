import React from "react";
import folderImg from "./images/folder.png";
import styles from "./Portfolio.module.css";

const Portfolio = (props) => {
  const onClick = () => {
    props.setVisible(true);
  };
  return (
    <>
      <div className={styles.portfolio} onDoubleClick={onClick}>
        <img src={folderImg} alt="folder" />
        <span className={styles.title}>My Portfolio!</span>
      </div>
    </>
  );
};

export default Portfolio;
