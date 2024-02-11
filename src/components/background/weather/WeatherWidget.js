import React from "react";
import styles from "./WeatherWidget.module.css";

const WeatherWidget = ({ data }) => {
    console.log(data.weather[0].icon)
  const w_data = {
    name: data.name,
    temp: Math.floor(data.main.temp - 273.15),
    description: data.weather[0].description,
    city: data.sys.country,
  };
  return (
    <div className={styles.weather}>
      <div className={styles.weatherImage}></div>
      <div className={styles.weatherDiscription}>
        <span className={styles.temp}>{w_data.temp}°C</span>
        <span className={styles.description}>{w_data.description}</span>
        <span className={styles.city}>
          {w_data.name}, {w_data.city}
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;
