import React, { useState } from "react";
import Background from "../chang/Background";
import styles from "./BackBase.module.css";
import BottomBar from "./BottomBar";
import PortfolioFolder from "./Portfolio";
import TopBar from "./TopBar";
import TopBarWidget from "./TopBarWidget";

const BackBase = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(false);
  };
  return (
    <div className={styles.back}>
      <TopBar />
      <TopBarWidget />
      <Background onClick={onClick} visible={visible} />
      <PortfolioFolder setVisible={setVisible} />
      <BottomBar />
    </div>
  );
};

export default BackBase;
