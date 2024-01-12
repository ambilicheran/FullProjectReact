import classes from "./GameStructure.module.css";
import { useState, useEffect } from "react";

function GameStructure() {
  //Variable declarations
  const [counter, setCounter] = useState(0); //to count the number of moves
  const [gameOver, setGameOver] = useState(false); //to identify if the game is over without a win
  const [win, setWin] = useState(false); //to store win status
  const [player, setPlayer] = useState("X"); //to store the current player
  const [possibleWinner, setPossibleWinner] = useState(""); //to store the possible winner/winner
  const [buttonText, setbuttonText] = useState([
    //to store the moves
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  //Function for accepting player input
  function playHandler(event) {
    const newbuttonText = [...buttonText];
    //For player X, accept the move only if no move has already been made for the square and if the game has not already been won
    if (!win && player === "X" && newbuttonText[event.target.id] === "") {
      newbuttonText[event.target.id] = "X";
      setbuttonText(newbuttonText);
      setPlayer("O"); //set next player
      setPossibleWinner("X"); //store current player for display in case of a win
      setCounter(counter + 1);
    }
    //For player Y, accept the move only if no move has already been made for the square and if the game has not already been won
    else if (!win && player === "O" && newbuttonText[event.target.id] === "") {
      newbuttonText[event.target.id] = "O";
      setbuttonText(newbuttonText);
      setPlayer("X"); //set next player
      setPossibleWinner("O"); //store current player for display in case of a win
      setCounter(counter + 1);
    }
  }

  //Check for winning combinations
  useEffect(() => {
    if (
      ((buttonText[0] === "X" || buttonText[0] === "O") &&
        buttonText[0] === buttonText[1] &&
        buttonText[1] === buttonText[2]) ||
      ((buttonText[0] === "X" || buttonText[0] === "O") &&
        buttonText[0] === buttonText[3] &&
        buttonText[3] === buttonText[6]) ||
      ((buttonText[0] === "X" || buttonText[0] === "O") &&
        buttonText[0] === buttonText[4] &&
        buttonText[4] === buttonText[8]) ||
      ((buttonText[1] === "X" || buttonText[1] === "O") &&
        buttonText[1] === buttonText[4] &&
        buttonText[4] === buttonText[7]) ||
      ((buttonText[2] === "X" || buttonText[2] === "O") &&
        buttonText[2] === buttonText[5] &&
        buttonText[5] === buttonText[8]) ||
      ((buttonText[3] === "X" || buttonText[3] === "O") &&
        buttonText[3] === buttonText[4] &&
        buttonText[4] === buttonText[5]) ||
      ((buttonText[6] === "X" || buttonText[6] === "O") &&
        buttonText[6] === buttonText[7] &&
        buttonText[7] === buttonText[8]) ||
      ((buttonText[2] === "X" || buttonText[2] === "O") &&
        buttonText[2] === buttonText[4] &&
        buttonText[4] === buttonText[6])
    ) {
      setWin(true); //set win status
    }
    //if all sqaures have been filled and a winning combination has not been found
    if (counter === 9 && !win) {
      setGameOver(true); // set game over
    }
  }, [buttonText, counter, win]);

  //Function to cater to the button enabled for playing the game again
  function playAgainHandler() {
    let newbuttonText = ["", "", "", "", "", "", "", "", ""]; //clear existing moves
    setbuttonText(newbuttonText);
    setWin(false); //clear win status if any
    setGameOver(false); //clear game over status if any
    setCounter(0); //set the counter back to 0
    setPlayer("X"); //set the first player back to X
  }

  return (
    <>
      <div className={classes.page}>
        <header>
          <h1>TIC-TAC-TOE</h1>
        </header>
        <div className={classes.gridContainer}>
          {buttonText.map((text, index) => (
            <button
              key={index}
              id={index}
              className={classes.gridItem}
              onClick={playHandler}
            >
              {text}
            </button>
          ))}
        </div>
        {/* Congratulations message for a win */}
        {win && <h1>Congratulations {possibleWinner}! You have won!</h1>}{" "}
        {/* Game Over message when all moves have been used up and no win found */}
        {!win && gameOver && <h1>Game Over!</h1>}
        {/* To enable a button to restart the game if the game is over or a win has been found */}
        {(win || gameOver) && (
          <button className={classes.playagain} onClick={playAgainHandler}>
            Play Again
          </button>
        )}
      </div>
    </>
  );
}

export default GameStructure;
