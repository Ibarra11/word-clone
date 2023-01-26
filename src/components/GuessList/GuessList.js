import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row, rowIndex) => {
        const hasGuess = guessList[rowIndex];
        return (
          <p
            key={hasGuess ? guessList[rowIndex]["id"] : rowIndex}
            className="guess"
          >
            <Guess guess={hasGuess && guessList[rowIndex]["guess"]} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
