import classes from "./GameStructure.module.css";
import { useState, useEffect } from "react";
import EmptyStructure from "./EmptyStructure";

function GameStructure() {
  //Variable declarations
  const [counter, setCounter] = useState(0); //to count the number of moves
  const [gameOver, setGameOver] = useState(false); //to identify if the game is over without a win
  const [win, setWin] = useState(false); //to store win status
  const [player, setPlayer] = useState("X"); //to store the current player
  const [possibleWinner, setPossibleWinner] = useState(""); //to store the possible winner/winner
  const [winningSquare, setWinningSquare] = useState([]); //to store winning combination indices
  const [winningStrike, setWinningStrike] = useState([]); //to store fractions for empty grid layout
  //to store the moves
  const [buttonText, setbuttonText] = useState([
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
      (buttonText[0] === "X" || buttonText[0] === "O") &&
      buttonText[0] === buttonText[1] &&
      buttonText[1] === buttonText[2]
    ) {
      setWin(true); //set win status
      setWinningSquare([0, 1, 2]); //store postion of the winning combination
    } else if (
      (buttonText[0] === "X" || buttonText[0] === "O") &&
      buttonText[0] === buttonText[3] &&
      buttonText[3] === buttonText[6]
    ) {
      setWin(true); //set win status
      setWinningSquare([0, 3, 6]); //store postion of the winning combination
    } else if (
      (buttonText[0] === "X" || buttonText[0] === "O") &&
      buttonText[0] === buttonText[4] &&
      buttonText[4] === buttonText[8]
    ) {
      setWin(true); //set win status
      setWinningSquare([0, 4, 8]); //store postion of the winning combination
    } else if (
      (buttonText[1] === "X" || buttonText[1] === "O") &&
      buttonText[1] === buttonText[4] &&
      buttonText[4] === buttonText[7]
    ) {
      setWin(true); //set win status
      setWinningSquare([1, 4, 7]); //store postion of the winning combination
    } else if (
      (buttonText[2] === "X" || buttonText[2] === "O") &&
      buttonText[2] === buttonText[5] &&
      buttonText[5] === buttonText[8]
    ) {
      setWin(true); //set win status
      setWinningSquare([2, 5, 8]); //store postion of the winning combination
    } else if (
      (buttonText[3] === "X" || buttonText[3] === "O") &&
      buttonText[3] === buttonText[4] &&
      buttonText[4] === buttonText[5]
    ) {
      setWin(true); //set win status
      setWinningSquare([3, 4, 5]); //store postion of the winning combination
    } else if (
      (buttonText[6] === "X" || buttonText[6] === "O") &&
      buttonText[6] === buttonText[7] &&
      buttonText[7] === buttonText[8]
    ) {
      setWin(true); //set win status
      setWinningSquare([6, 7, 8]); //store postion of the winning combination
    } else if (
      (buttonText[2] === "X" || buttonText[2] === "O") &&
      buttonText[2] === buttonText[4] &&
      buttonText[4] === buttonText[6]
    ) {
      setWin(true); //set win status
      setWinningSquare([2, 4, 6]); //store postion of the winning combination
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
    setWinningSquare(["", "", ""]);
  }

  return (
    <>
      {/* <div className={classes.page}> */}
      <div>
        <div className={classes.overlap}>
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
                style={{
                  backgroundColor:
                    index === winningSquare[0] ||
                    index === winningSquare[1] ||
                    index === winningSquare[2]
                      ? "green" //colour the winning combination green
                      : "rgb(214, 218, 37)", //else retain the existing colour
                }}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
        <div className={classes.message}>
          {/* Congratulations message for a win */}
          {win && <h2>Congratulations {possibleWinner}! You have won!</h2>}
          {/* Game Over message when all moves have been used up and no win found */}
          {!win && gameOver && (
            <h2>
              Game Over!Game Over!Game Over!Game Over!Game Over!Game Over!
            </h2>
          )}
          {/* To enable a button to restart the game if the game is over or a win has been found */}
          {(win || gameOver) && (
            <button className={classes.playagain} onClick={playAgainHandler}>
              Play Again
            </button>
          )}
        </div>
      </div>

      {win && <EmptyStructure winningList={winningSquare} />}

      {/* </div> */}
    </>
  );
}

export default GameStructure;
