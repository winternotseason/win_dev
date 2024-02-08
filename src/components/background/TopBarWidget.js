import React, { Fragment } from "react";
import styles from "./TopBarWidget.module.css";

const TopBarWidget = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.addWidget}>
        <h4>새로운 기능</h4>
        <p>데스크탑에 직접 위젯을 배치</p>
        <p>하고 iPhone 위젯을 추가</p>
        <p>하십시오.</p>
      </div>
      <div className={styles.weather}>날씨 위젯</div>
    </div>
  );
};

export default TopBarWidget;
