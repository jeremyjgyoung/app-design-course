import React, { useState } from "react";
import { css } from "emotion"

const FlexRatio = () => {
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

  const dropDown = css`
    width: 200px;
    height: 50px;
  `;

  const boxContainer = css`
    border: 2px;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: ${flexDirection};
  `;

  const leftBox = css`
    flex: ${leftFlex};
    background-color: #00ffff;
  `;

  const rightBox = css`
    flex: ${rightFlex};
    background-color: #000000;
  `;

  const flexHeader = css`
    margin: 0 0 5px 0;
    color: #0055aa;
  `;

  return (
    <div>
      <h3 className={flexHeader}>Flex Direction: </h3>
      <select className={dropDown} value={flexDirection} onChange={setDropDown}>
        <option value="column">column</option>
        <option value="row">row</option>
      </select>
      <h3 className={flexHeader}>Cyan Flex: {leftFlex}</h3>
      <input
        type="range"
        className={slider}
        id="redHexInput"
        min="0"
        max="20"
        value={leftFlex}
        onChange={() => setNewRed()}
      ></input>
      <h3 className={flexHeader}>Black Flex: {rightFlex}</h3>
      <input
        type="range"
        className={slider}
        id="greenHexInput"
        min="0"
        max="20"
        value={rightFlex}
        onChange={() => setNewGreen()}
      ></input>
      <div className={boxContainer}>
        <div className={leftBox}></div>
        <div className={rightBox}></div>
      </div>
    </div>
  );
};

export default FlexRatio;
