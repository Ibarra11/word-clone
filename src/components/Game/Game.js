import React from "react";
import GameInput from "../GameInput";
import GuessList from "../GuessList";
import GameResult from "../GameResult";
import Keyboard from "../Keyboard";
import { checkWinner, checkGuess } from "../../utils";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [result, setResult] = React.useState(null);
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  console.info(answer);

  function handleGuess(guess) {
    const guessResult = checkGuess(guess, answer);
    const nextGuessList = [
      ...guessList,
      { id: crypto.randomUUID(), guess: guessResult },
    ];
    if (checkWinner(guessResult)) {
      setResult("winner");
    } else if (
      nextGuessList.length === NUM_OF_GUESSES_ALLOWED &&
      !checkWinner(guessResult)
    ) {
      setResult("loser");
    }
    setGuessList(nextGuessList);
  }
  function resetGame() {
    setGuessList([]);
    setResult(null);
    setAnswer(sample(WORDS));
  }
  return (
    <>
      <GuessList setResult={setResult} answer={answer} guessList={guessList} />
      <GameInput disabled={!!result} handleGuess={handleGuess} />
      <Keyboard guessList={guessList} />
      {result && (
        <GameResult
          result={result}
          answer={answer}
          numOfGuesses={guessList.length}
          handleGameReset={resetGame}
        />
      )}
    </>
  );
}

export default Game;
