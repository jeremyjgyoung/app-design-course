import React, { useState } from "react";
import { css } from "emotion";

const FlexRatio = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  const [alignItemsValue, setAlignItemsValue] = useState("center");
  const [justifyContentValue, setJustifyContentValue] = useState("center");

  const setDropDownDirection = (event) => {
    setFlexDirection(event.target.value);
  };

  const setDropDownAlign = (event) => {
    setAlignItemsValue(event.target.value);
  };

  const setDropDownJustify = (event) => {
    setJustifyContentValue(event.target.value);
  };

  const dropDown = css`
    font-size: 20px;
    color: #333333;
    margin-bottom: 10px;
    width: 200px;
    height: 50px;
  `;

  const boxContainer = css`
    border: 10px solid;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContentValue};
    align-items: ${alignItemsValue};
  `;

  const leftBox = css`
    background-color: #00ffff;
    height: 100px;
    width: 100px;
  `;

  const rightBox = css`
    background-color: #000000;
    height: 100px;
    width: 100px;
  `;

  return (
    <div>
      <select
        className={dropDown}
        value={flexDirection}
        onChange={setDropDownDirection}
      >
        <option value="column">column</option>
        <option value="row">row</option>
      </select>
      <select
        className={dropDown}
        value={justifyContentValue}
        onChange={setDropDownJustify}
      >
        <option value="center">center</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
      </select>
      <select
        className={dropDown}
        value={alignItemsValue}
        onChange={setDropDownAlign}
      >
        <option value="center">center</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
      </select>
      <div className={boxContainer}>
        <div className={leftBox}></div>
        <div className={rightBox}></div>
      </div>
    </div>
  );
};

export default FlexRatio;
