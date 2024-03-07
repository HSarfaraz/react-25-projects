import React, { useEffect, useState } from "react";
import "./styles.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleRandomHexColor();
    else handleRandomRGBColor();
  }, [typeOfColor]);

  // const randomColorChecker = typeOfColor === 'hex' ? () => handleRandomHexColor() : ()=>handleRandomRGBColor();
  return (
    <div className="wrapper-container" style={{ background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => handleRandomHexColor()
            : () => handleRandomRGBColor()
        }
      >
        Generate Random Color
      </button>
      <div className="value-container">
        <h4>
          {typeOfColor === "hex" ? "Hex Color :" : "RGB Color"} : {color}
        </h4>
      </div>
    </div>
  );
};

export default RandomColor;
