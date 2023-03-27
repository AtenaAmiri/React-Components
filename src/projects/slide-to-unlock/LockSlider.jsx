import React from "react";
import "./css-lock-slider/LockSlider.css";
export default function LockSlider({ handleInput, sliderValue, width }) {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    backgroundColor: "rgba(188, 190, 188, 0.5)",
    outline: "none",
    marginBottom: "2px",
    border: "5px solid rgba(235, 239, 235, 0.5)",
    borderRadius: "25px",
  };
  return (
    <input
      type="range"
      className="slider"
      style={sliderStyle}
      onInput={handleInput}
      value={sliderValue}
    />
  );
}
