import React, { useState } from "react";
import { css } from "emotion"

const ColorfulHexBox = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [redHex, setRedHex] = useState("00");
  const [greenHex, setGreenHex] = useState("00");
  const [blueHex, setBlueHex] = useState("00");

  const setNewRed = () => {
    let newRedNum = document.getElementById("redHexInput").value;
    setRedValue(newRedNum);
    let newRedHex =
      newRedNum < 16
        ? `0${Number(newRedNum).toString(16)}`
        : Number(newRedNum).toString(16);
    setRedHex(newRedHex);
  };

  const setNewGreen = () => {
    let newGreenNum = document.getElementById("greenHexInput").value;
    setGreenValue(newGreenNum);
    let newGreenHex =
      newGreenNum < 16
        ? `0${Number(newGreenNum).toString(16)}`
        : Number(newGreenNum).toString(16);
    setGreenHex(newGreenHex);
  };

  const setNewBlue = () => {
    let newBlueNum = document.getElementById("blueHexInput").value;
    setBlueValue(newBlueNum);
    let newBlueHex =
      newBlueNum < 16
        ? `0${Number(newBlueNum).toString(16)}`
        : Number(newBlueNum).toString(16);
    setBlueHex(newBlueHex);
  };

  const slider = css`
    width: 600px;
    padding-top: 0px;
  `;

  const colorfulBox = css`
    width: 400px;
    height: 400px;
    background-color: ${`#${redHex}${greenHex}${blueHex}`};
  `;

  const redHeader = css`
    color: #cc0000;
    margin-right: 10px;
    margin-top: 16px;
  `;

  const greenHeader = css`
    color: #007700;
    margin-right: 10px;
    margin-top: 16px;
  `;

  const blueHeader = css`
    color: #0000aa;
    margin-right: 3px;
    margin-top: 16px;
  `;

  const sliderDiv = css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
  `;

  return (
    <div>
      <div className={sliderDiv}>
        <h3 className={redHeader}>Red: &nbsp; &nbsp; </h3>
        <input
          type="range"
          className={slider}
          id="redHexInput"
          min="0"
          max="255"
          value={redValue}
          onChange={() => setNewRed()}
        ></input>
      </div>
      <div className={sliderDiv}>
        <h3 className={greenHeader}>Green: </h3>
        <input
          type="range"
          className={slider}
          id="greenHexInput"
          min="0"
          max="255"
          value={greenValue}
          onChange={() => setNewGreen()}
        ></input>
      </div>
      <div className={sliderDiv}>
        <h3 className={blueHeader}>Blue: &nbsp; &nbsp;</h3>
        <input
          type="range"
          className={slider}
          id="blueHexInput"
          min="0"
          max="255"
          value={blueValue}
          onChange={() => setNewBlue()}
        ></input>
      </div>
      <h1>
        Hex Code: #{redHex}
        {greenHex}
        {blueHex}
      </h1>
      <div className={colorfulBox}></div>
    </div>
  );
};

export default ColorfulHexBox;
