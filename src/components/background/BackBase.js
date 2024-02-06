import React from "react";
import Background from "../chang/Background";
import styles from "./BackBase.module.css";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

const BackBase = () => {
  return (
    <div className={styles.back}>
      <TopBar />
      <Background />
      <BottomBar />
    </div>
  );
};

export default BackBase;
