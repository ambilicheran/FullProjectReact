import { useEffect } from "react";
import { useState } from "react";
import classes from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [isPlayerX, setPlayerX] = useState(true);
  const [squareArrayValues, setSquareArrayValue] = useState(Array(9).fill(""));
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [winner, setWinner] = useState("");
  const [status, setStatus] = useState("");

  const handleGameMove = (val) => {
    let array = [...squareArrayValues];
    !array[val] && (isPlayerX ? (array[val] = "X") : (array[val] = "O"));
    setPlayerX(!isPlayerX);
    setSquareArrayValue(array);
  };

  const Square = ({ value, onClick }) => {
    return (
      <button
        disabled={winner !== ""}
        onClick={onClick}
        className={classes.square}
      >
        {value}
      </button>
    );
  };

  const checkWin = () => {
    for (let i = 0; i <= 7; i++) {
      if (
        squareArrayValues[winningCombo[i][0]] &&
        squareArrayValues[winningCombo[i][1]] &&
        squareArrayValues[winningCombo[i][2]] &&
        squareArrayValues[winningCombo[i][0]] ===
          squareArrayValues[winningCombo[i][1]] &&
        squareArrayValues[winningCombo[i][0]] ===
          squareArrayValues[winningCombo[i][2]]
      ) {
        if (!winner) {
          setWinner(squareArrayValues[winningCombo[i][0]]);
          setStatus(`${squareArrayValues[winningCombo[i][0]]} is the winner!!`);
          return;
        }
      }
    }
    if (squareArrayValues.every((item) => item !== "")) {
      setStatus("Game draw! Restart!");
    }
  };

  useEffect(() => {
    checkWin();
  }, [isPlayerX]);

  return (
    <div className={classes.tictactoeContainer}>
      <div>
        <div style={{ display: "flex" }}>
          <Square
            value={squareArrayValues[0]}
            onClick={() => handleGameMove(0)}
          />
          <Square
            value={squareArrayValues[1]}
            onClick={() => handleGameMove(1)}
          />
          <Square
            value={squareArrayValues[2]}
            onClick={() => handleGameMove(2)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Square
            value={squareArrayValues[3]}
            onClick={() => handleGameMove(3)}
          />
          <Square
            value={squareArrayValues[4]}
            onClick={() => handleGameMove(4)}
          />
          <Square
            value={squareArrayValues[5]}
            onClick={() => handleGameMove(5)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Square
            value={squareArrayValues[6]}
            onClick={() => handleGameMove(6)}
          />
          <Square
            value={squareArrayValues[7]}
            onClick={() => handleGameMove(7)}
          />
          <Square
            value={squareArrayValues[8]}
            onClick={() => handleGameMove(8)}
          />
        </div>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default TicTacToe;
