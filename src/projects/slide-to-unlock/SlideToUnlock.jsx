import React, { useState } from "react";
import "./css-lock-slider/LockSlider.css";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/moon.jpg";
import HomeScreenImg from "./img/home.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover`,
  });

  const [showLockSlider, setShowLockSlider] = useState(true);

  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    if (e.target.value === "100") {
      setShowLockSlider(false);
      uiProps.uiBg = `url(${HomeScreenImg}) center/cover`;
      uiProps.uiText = "Lock Screen";
    }
  };

  // Css
  let mainDivStyle = {
    display: "flex",
    justifyContent: "center",
  };

  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    marginTop: "10vh",
    width: 340,
    border: "4px solid #000",
    borderRadius: "25px",
    background: uiProps.uiBg,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  let titleStyle = {
    color: uiProps.uiColor,
    fontSize: "40px",
  };

  return (
    <div style={mainDivStyle}>
      <div className="container" style={containerStyle}>
        <h1 className="title" style={titleStyle}>
          {uiProps.uiText}
        </h1>
        {showLockSlider ? (
          <LockSlider
            width={"250px"}
            handleInput={handleLockSliderInput}
            sliderValue={lockSliderValue}
          />
        ) : (
          <AiFillUnlock
            className="unlockIcon"
            onClick={() => {
              setShowLockSlider(true);
              setLockSliderValue(0);
              uiProps.uiBg = `url(${LockScreenImg}) center/cover`;
              uiProps.uiText = "Unlock Screen";
            }}
          />
        )}
      </div>
    </div>
  );
}
