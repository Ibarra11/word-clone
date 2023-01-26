import React from "react";

function GameInput({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    handleGuess(guess);
    setGuess("");
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        pattern="^[A-Z]{5}$"
        minLength={5}
        maxLength={5}
        required
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        value={guess}
        id="guess-input"
        disabled={disabled}
      />
    </form>
  );
}

export default GameInput;
