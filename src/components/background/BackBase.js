import React, {useState} from "react";
import Background from "../chang/Background";
import styles from "./BackBase.module.css";
import BottomBar from "./BottomBar";
import Portfolio from "./Portfolio";
import TopBar from "./TopBar";

const BackBase = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(false);
  };
  return (
    <div className={styles.back}>
      <TopBar />
      <Background onClick={onClick} visible={visible}/>
      <Portfolio setVisible={setVisible}/>
      <BottomBar />
    </div>
  );
};

export default BackBase;
