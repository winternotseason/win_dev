import React, { useState } from "react";
import styles from "./TopBar.module.css";
import logo from "./images/logo.png";

const TopBar = () => {
    const [time, setTime] = useState({month:2, date:6, day:'화', pm:true ,hour:21, minute:9 });
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    setInterval(() => {
        const today = new Date();
        const today_obj = {
            month : today.getMonth(),
            date : today.getDate(),
            day : week[today.getDay()],
            hour : today.getHours(),
            minute : today.getMinutes(),
            pm : today.getHours() < 12 ? '오전' : '오후'
        }
        setTime(today_obj)
    }, 300000);
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.finder}>Finder</div>
        <div>파일</div>
        <div>편집</div>
        <div>보기</div>
        <div>이동</div>
        <div>윈도우</div>
        <div>도움말</div>
      </div>
      <div className={styles.topBarRight}>
          <div>{time.month+1}월 {time.date}일 {time.day} {time.pm} {time.hour} : {time.minute}</div>
      </div>
    </div>
  );
};

export default TopBar;
