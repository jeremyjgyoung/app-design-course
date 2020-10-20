import React, { useState } from "react";
import { css } from "emotion"

const HexSlider = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [hexSliderNum, setHexSliderNum] = useState(0);

  const setNewNum = () => {
    let newNum = document.getElementById("hexRangeId").value;
    setSliderNum(newNum);
    setHexSliderNum(Number(newNum).toString(16));
  };

  const slider = css`
    width: 600px;
  `;

  const container = css`
    margin: 25px 0;
  `;

  const hexHeader = css`
    color: #333333;
    margin: 0 0 5px 0;
    font-weight: bold;
  `;

  return (
    <div className={container}>
      <input
        type="range"
        className={slider}
        id="hexRangeId"
        min="0"
        max="255"
        onChange={() => setNewNum()}
      ></input>
      <div>
        <h3 className={hexHeader}>Normal Numbers: {sliderNum}</h3>
        <h3 className={hexHeader}>Hexadeximal: {hexSliderNum}</h3>
      </div>
    </div>
  );
};

export default HexSlider;
