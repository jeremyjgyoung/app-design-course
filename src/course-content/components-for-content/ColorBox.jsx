import React, { useState } from "react";
import { css } from "emotion"

const ColorBox = () => {
  const [background, setBackground] = useState("#fdfdfd");

  const [font, setFont] = useState("#000000");

  const [colorHex, setColorHex] = useState("Color Hex");

  const setStyle = (background, font, colHex) => {
    setBackground(background);
    setFont(font);
    setColorHex(colHex);
  };

  const card = css`
    max-width: 500px;
    padding: 40px 40px 20px 40px;
    background-color: ${background};
    border: solid;
    h1 {
      font-weight: 500;
      font-size: 80px;
      margin-bottom: 10px;
      color: ${font};
    }
    p {
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 20px;
      color: ${font};
    }
  `;

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;

    div {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 12px;
      padding: 10px 30px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: solid;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const redButton = css`
    color: #fdfdfd;
    background-color: #ff0000;
  `;

  const greenButton = css`
    color: #000000;
    background-color: #00ff00;
  `;

  const blueButton = css`
    color: #fdfdfd;
    background-color: #0000ff;
  `;

  const yellowButton = css`
    color: #000000;
    background-color: #ffff00;
  `;

  const cyanButton = css`
    color: #000000;
    background-color: #00ffff;
  `;

  const magentaButton = css`
    color: #000000;
    background-color: #ff00ff;
  `;

  const blackButton = css`
    color: #fdfdfd;
    background-color: #000000;
  `;

  const whiteButton = css`
    color: #000000;
    background-color: #ffffff;
  `;

  const greyButton = css`
    color: #000000;
    background-color: #bbbbbb;
  `;

  return (
    <div className={card}>
      <h1>{colorHex}</h1>
      <div className={cardButtons}>
        <div
          onMouseEnter={() => setStyle("#ff0000", "#fdfdfd", "#ff0000")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={redButton}
        >
          Red
        </div>
        <div
          onMouseEnter={() => setStyle("#00ff00", "#000000", "#00ff00")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={greenButton}
        >
          Green
        </div>
        <div
          onMouseEnter={() => setStyle("#0000ff", "#fdfdfd", "#0000ff")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={blueButton}
        >
          Blue
        </div>
        <div
          onMouseEnter={() => setStyle("#ffff00", "#000000", "#ffff00")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={yellowButton}
        >
          Yellow
        </div>
        <div
          onMouseEnter={() => setStyle("#00ffff", "#000000", "#00ffff")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={cyanButton}
        >
          Cyan
        </div>
        <div
          onMouseEnter={() => setStyle("#ff00ff", "#fdfdfd", "#ff00ff")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={magentaButton}
        >
          Magenta
        </div>

        <div
          onMouseEnter={() => setStyle("#000000", "#fdfdfd", "#000000")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={blackButton}
        >
          Black
        </div>
        <div
          onMouseEnter={() => setStyle("#ffffff", "#000000", "#ffffff")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={whiteButton}
        >
          White
        </div>
        <div
          onMouseEnter={() => setStyle("#bbbbbb", "#fdfdfd", "#bbbbbb")}
          onMouseLeave={() => setStyle("#fdfdfd", "#000000", "Color Hex")}
          className={greyButton}
        >
          Grey
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
