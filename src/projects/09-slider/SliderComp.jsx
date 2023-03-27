import React from "react";

export default function SliderComp({
  setValue,
  handleInput,
  bgColor,
  textColor,
}) {
  //css
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 100,
    width: "100%",
  };

  let circleStyle = {
    color: !textColor ? "black" : textColor,
    background: !bgColor ? "lightgray" : bgColor,
    height: `${setValue * 3}px`,
    width: `${setValue * 3}px`,
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  let sliderStyle = {
    appearance: "none",
    width: "100% ",
    height: 25,
    background: !bgColor ? "lightgray" : bgColor,
    cursor: "pointer",
    opacity: 0.7,
  };

  return (
    <div style={containerStyle}>
      <input
        type="range"
        min="0"
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div style={circleStyle}>
        <span>{setValue}</span>
      </div>
    </div>
  );
}
