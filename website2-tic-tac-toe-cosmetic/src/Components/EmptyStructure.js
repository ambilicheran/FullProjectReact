import { useState } from "react";
import classes from "./GameStructure.module.css";

function EmptyStructure(props) {
  const dummyText = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const nameOfClass =
    classes[
      `emptyGridContainer${props.winningList[0]}${props.winningList[1]}${props.winningList[2]}`
    ];

  return (
    <>
      {!(
        (props.winningList[0] === 0 &&
          props.winningList[1] === 4 &&
          props.winningList[2] === 8) ||
        (props.winningList[0] === 2 &&
          props.winningList[1] === 4 &&
          props.winningList[2] === 6)
      ) && (
        <div className={classes.overlap}>
          <header>
            <h1>TIC-TAC-TOE</h1>
          </header>
          <div className={nameOfClass}>
            {dummyText.map((text, index) => (
              <button key={index} id={index} className={classes.emptyGridItem}>
                {text}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default EmptyStructure;
