function GameResult({ result, answer, numOfGuesses, handleGameReset }) {
  if (result === "winner") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
        <button onClick={handleGameReset}>Reset Game</button>
      </div>
    );
  }
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={handleGameReset}>Reset Game</button>
    </div>
  );
}

export default GameResult;
