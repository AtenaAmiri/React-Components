import React, { useState } from "react";
import SliderComp from "./SliderComp";

export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
    console.log(slideValue);
  };

  let bgColor;
  let textColor;

  //Css
  let mainContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  let titleStyle = {
    fontSize: "80px",
  };

  if (slideValue === 0) {
    bgColor = "lightgray";
  } else if (slideValue < 25) {
    bgColor = "red";
  } else if (slideValue > 25 && slideValue <= 50) {
    bgColor = "blue";
  } else if (slideValue > 50 && slideValue <= 75) {
    bgColor = "pink";
  } else if (slideValue > 75 && slideValue <= 90) {
    bgColor = "green";
    textColor = "#4290f5";
  } else if (slideValue > 90 && slideValue <= 100) {
    bgColor = "orange";
    textColor = "#fff";
  }

  return (
    <div style={mainContainerStyle}>
      <h1 style={titleStyle}>Slide to grow</h1>
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}
