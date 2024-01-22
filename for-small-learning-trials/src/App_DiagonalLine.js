import React, { useRef, useEffect } from "react";
import classes from "./App.module.css";

function App() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gridElement = document.querySelector(`.${classes.myGrid}`);
    console.log("gridelement", gridElement);
    const gridRect = gridElement.getBoundingClientRect();
    console.log("gridrect", gridRect);

    // Calculate the center of the grid
    const centerX = gridRect.left + gridRect.width / 2;
    const centerY = gridRect.top + gridRect.height / 2;

    console.log("centerx", "centery", centerX, centerY);
    // Set canvas size to cover the entire grid area
    canvas.width = gridRect.width;
    canvas.height = gridRect.height;
    console.log("canvas width", "canvas height", canvas.width, canvas.height);

    // Draw diagonal line relative to the center of the grid
    ctx.beginPath();
    ctx.moveTo(-centerX, -centerY);
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "red";
    ctx.stroke();
  }, [num]);

  return (
    <>
      <div className={classes.myGridContainer}>
        <div className={classes.myGrid}>
          {num.map((num, index) => (
            <h1 key={index} className={classes.myGridItem}>
              {num}
            </h1>
          ))}
        </div>
        <canvas ref={canvasRef} className={classes.diagonalLineCanvas}></canvas>
      </div>
    </>
  );
}

export default App;
