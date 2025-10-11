import React from 'react'
import "./App.css"
import  clsx  from 'clsx';
import "@fontsource/hanken-grotesk";
import languages from "./language"
import Confetti from 'react-confetti';
import randomWord from "./words"


const AssemblyEndGame = () => {
    // STATES
    const [currentWord, setCurrentWord] = React.useState(() => randomWord())
    const [guessedLetters, setGuessedLetters] = React.useState([]);
  



  // ====== FUNCTION to handle user guesses ======
  function guess(letter) {
  if (isGameOver || guessedLetters.includes(letter)) return;

  const updatedGuesses = [...guessedLetters, letter];
  setGuessedLetters(updatedGuesses);
  }
//   Number of wrong guesses
const wrongGuessCount = guessedLetters.filter( (letter) =>
    !currentWord.includes(letter)
).length
  



const maxWrongGuesses = languages.length - 1;
const isGameLost = wrongGuessCount >=  maxWrongGuesses;
const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
const isGameOver = isGameWon || isGameLost
const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
const numGessesLeft = languages.length - 1

const missedCount = currentWord.split("").filter(
  letter => !guessedLetters.includes(letter)
).length;

//   Farewell text logic
let farewellMessage = "";
if (wrongGuessCount > 0 && wrongGuessCount < maxWrongGuesses) {
  farewellMessage = languages[wrongGuessCount - 1].farewell;
}
// Map through the word to be guessed to display a span of individual letters
  // const wordArray = currentWord.split("")
const gameWord = currentWord.split("").map((letter, index) => {
  const isGuessed = guessedLetters.includes(letter);

  let displayLetter = "";
  if (isGuessed) {
    displayLetter = letter; // guessed letters
  } else if (isGameOver) {
    displayLetter = letter; // reveal missed letters at game over
  } // else leave displayLetter as ""

  const className = clsx("guessWordSpan", {
    display: isGuessed,                 // style for guessed letters
    gameOver: isGameOver && !isGuessed, // highlight missed letters
  });

  return (
    <span key={index} className={className}>
      {displayLetter}
    </span>
  );
});


  // Display keyboard letters as buttons
  const letters = "abcdefghijklmnopqrstuvwxyz"
  const displayLetters = letters.split('').map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
        btn: true,
        correct: isCorrect,
        wrong: isWrong
    })
    return (
      <button
        onClick={() => guess(letter)}
        key={index}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`letter ${letter}`}
        className={className}
      >
        {letter}
      </button>
    )
  })
 
  // Render language chips (from imported data)
  const languageChips = languages.map((chip, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const className = clsx(isLanguageLost && "lost");
    const styles = {
      backgroundColor: chip.backgroundColor,
      color: chip.color
    }
    return (
      <h4 key={index}
      className={className}
      style={styles}>
        {chip.language}
        
      </h4>
    )
  })

const gameOverClass = clsx({
    neutral: true,
    status: true,
    statusWon: isGameWon,
    statusLost: isGameLost
})
// Cleanup functions

function resetGame() {
    const newWord = randomWord();
    setCurrentWord(newWord);
    setGuessedLetters([]);
}
  return (
    <main>
         {isGameWon && <Confetti 
         recycle={false}
         numberOfPieces={1000}
         width={window.innerWidth} height={window.innerHeight} />}
      <header className="header">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 7 attempts to keep the
          programming world safe from Assembly!
        </p>
      </header>

  <section className={gameOverClass}>
  {isGameOver ? (
    isGameWon ? (
      <>
        <h2>You Win!</h2>
        <p>
          {wrongGuessCount === 0
            ? "You're on fire! 🔥"   
            : "Well done! 🏆"}       
        </p>
      </>
    ) : (
      <>
        <h2>Game Over!</h2>
        <p>
          {missedCount === 1
            ? "That was so close! 😅" 
            : "You lose! Better start learning Assembly!!!"} 
        </p>
      </>
    )
  ) : (
    farewellMessage && (
      <p aria-live="polite" role="status" className="farewell">
        {farewellMessage}
      </p>
    )
  )}
</section>


{isGameLost && (
  <section className="overlay">
  </section>
)}


      <section className='chips-section'>
        <ul className='chips'>
          {languageChips}
        </ul>
      </section>

      <section className="gameLetters">
        {gameWord}
      </section>
      
       <section className="sr-only" aria-live="polite" role="status">
        <p>{currentWord.includes(lastGuessedLetter) ? 
            `Correct! The letter ${lastGuessedLetter} is in the word` :
            `Sorry, The letter ${lastGuessedLetter} is not in the word  `
        } You have {numGessesLeft} attempts left
        </p>
      <p>
        Current word:{" "}
        {currentWord
          .split("")
          .map((letter) =>
            guessedLetters.includes(letter)
              ? letter
              : "blank."
          )
          .join(" ")}
      </p>
    </section>

      <section className='letters'>
        <div className="letterButtons">
          {displayLetters}
        </div>
      </section>

      <section className="guessCounter">
        <p>Wrong guesses: {wrongGuessCount} / 7 </p>
      </section>

      <section className={`newGameButton ${!isGameOver ? "hidden" : ""}`}>
  <button
    onClick={resetGame}
    className="newGameBtn"
  >
    New Game
  </button>
</section>

    </main>    
  )
}

export default AssemblyEndGame
