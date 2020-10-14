import React, { useState } from "react";
import { css } from "emotion"

const BoxModel = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  const [leftFlex, setLeftFlex] = useState(1);
  const [rightFlex, setRightFlex] = useState(1);

  const setDropDown = (event) => {
    setFlexDirection(event.target.value);
  };

  const setNewRed = () => {
    let newRedNum = document.getElementById("redHexInput").value;
    setLeftFlex(newRedNum);
  };

  const setNewGreen = () => {
    let newGreenNum = document.getElementById("greenHexInput").value;
    setRightFlex(newGreenNum);
  };

  const slider = css`
    width: 800px;
  `;

  const outerBox = css`
    background-color: #000000;
    display: flex;
    flex: 1;
  `;

  const innerBox = css`
    width: 400px;
    height: 400px;
    border: 8px solid red;
    margin: 30px;
    background-color: #00ffff;
  `;

  return (
    <div className={outerBox}>
      <div className={innerBox}></div>
    </div>
  );
};

export default BoxModel;
