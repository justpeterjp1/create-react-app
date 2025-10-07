import React from "react";
import "./App.css";
import Dice from "./Dice";
import { nanoid } from "nanoid"; 
import Confetti from "react-confetti";
export default function App() {
    //  State to hold current dice array
  const [diceNum, setDiceNum] = React.useState(generateAllNewDice());
  const buttonRef = React.useRef(null)
  const [count, setCount] = React.useState(0)
  //  Generate a new array of 10 dice
  function generateAllNewDice() {
    const diceNumbers = [];
    for (let i = 0; i < 10; i++) {
      const diceNumber = Math.floor(Math.random() * 6) + 1;
      const id = nanoid();
      const isHeld = false;
      diceNumbers.push({ diceNumber, isHeld, id });
    }
    return diceNumbers;
  }
//   Check if game is won
  const gameWon = diceNum.every(die => die.isHeld) && 
      diceNum.every(die => die.diceNumber === diceNum[0].diceNumber)
  React.useEffect(() => {
    if (gameWon && buttonRef.current) {
     setTimeout(() => buttonRef.current.focus(), 0);
    }
  }, [gameWon])
  //  Function to toggle a single die’s held state
  function holdOneDice(id) {
    setDiceNum((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  }

  //  Function to roll (regenerate) new dice
  function newRandNumbers() {
    if (gameWon) {
      setDiceNum(generateAllNewDice());
      setCount(0);
    } else {
      setDiceNum((prevDice) =>
        prevDice.map((dice) =>
          dice.isHeld
            ? dice
            : { ...dice, diceNumber: Math.floor(Math.random() * 6) + 1 }
        )
      );
      setCount(prev => prev + 1);
    }
  }

  // 5 Map dice array to Dice components
  const diceElements = diceNum.map((obj) => (
    <Dice
      key={obj.id}
      number={obj.diceNumber}
      isHeld={obj.isHeld}
      id={obj.id}
      holdOneDice={holdOneDice}
    />
  ));

  return (
    <main className="container">
        {gameWon && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same to win. Click each die to freeze at 
            its current value before you roll again. Try to complete with as less moves as possible and when you do, yell Tenzies!!!
        </p>
      <div className="dice-container">{diceElements}</div>
      <div>
        <button 
        ref={buttonRef}
        onClick={newRandNumbers} className="roll-btn">
         {gameWon ? "New Game" : "Roll"}
        </button>
        <p className="counter">Rolls: <span>{count}</span></p>
      </div>
    </main>
  );
}
