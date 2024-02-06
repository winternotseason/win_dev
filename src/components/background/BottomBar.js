import React from "react";
import styles from "./BottomBar.module.css";
import memoLogo from "./images/memoLogo.png";
import storeLogo from "./images/storeLogo.png";
import kakaoLogo from "./images/kakaoLogo.png";
import cameraLogo from "./images/cameraLogo.png";
import albumLogo from "./images/albumLogo.png";
import messageLogo from "./images/messageLogo.png"
import calendarLogo from "./images/calendarLogo.png"

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div>
        <img src={memoLogo} alt="vs code logo" />
      </div>
      <div>
        <img src={storeLogo} alt="culLogo" />
      </div>
      <div>
        <img src={kakaoLogo} alt="culLogo" />
      </div>
      <div>
        <img src={cameraLogo} alt="culLogo" />
      </div>
      <div>
        <img src={albumLogo} alt="culLogo" />
      </div>
      <div>
        <img src={messageLogo} alt="culLogo" />
      </div>
      <div>
        <img src={calendarLogo} alt="culLogo" />
      </div>
    </div>
  );
};

export default BottomBar;
