import React, { useEffect, useState } from "react";
import styles from "./TopBarWidget.module.css";
import { fetchWeather } from "./weather/WeatherApi";
import WeatherWidget from "./weather/WeatherWidget";

const TopBarWidget = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!navigator.geolocation) {
          console.log("지원하지 않음");
        } else {
          console.log("위치 파악 중…");
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeather(lat, lon).then((data) => {
              setWeather(data);
            });
          });
        }
      } catch (e) {
        throw new Error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.widget}>
      <div className={styles.addWidget}>
        <h4>새로운 기능</h4>
        <p>데스크탑에 직접 위젯을 배치</p>
        <p>하고 iPhone 위젯을 추가</p>
        <p>하십시오.</p>
      </div>
      {Object.keys(weather).length !== 0 ? (
        <WeatherWidget data={weather} />
      ) : (
        <div className={styles.weather}>Loading...</div>
      )}
    </div>
  );
};

export default TopBarWidget;
