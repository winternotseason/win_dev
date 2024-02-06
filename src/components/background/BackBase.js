import React from "react";
import Background from "../chang/Background";
import styles from "./BackBase.module.css";
import logo from "./images/logo.png"

const BackBase = () => {
  return (
    <div className={styles.back}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div>Finder</div>
        <div>파일</div>
        <div>편집</div>
        <div>보기</div>
        <div>이동</div>
        <div>윈도우</div>
        <div>도움말</div>
      </div>
      <Background />
    </div>
  );
};

export default BackBase;
