import React, { Fragment, useState } from "react";
import BackgroundLeft from "./BackgroundLeft";
import BackgroundRight from "./BackgroundRight";
import styles from "./Background.module.css";
import { useDrag } from "react-use-gesture";

const Background = () => {
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const bindLogoPos = useDrag((params) => {
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
  const tempStyle = {
    position: "relative",
    top: logoPos.y,
    left: logoPos.x,
  };

  const onClick = () => {
    setVisible(false);
  };
  return (
    <Fragment>
      {visible && (
        <div className={styles.background} style={tempStyle} {...bindLogoPos()}>
          <div className={styles.bar}>
            <div
              className={`${styles.circle} ${styles.red}`}
              onClick={onClick}
            />
            <div className={`${styles.circle} ${styles.yellow}`} />
            <div className={`${styles.circle} ${styles.green}`} />
          </div>
          <div className={styles.main}>
            <BackgroundLeft />
            <BackgroundRight />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Background;
