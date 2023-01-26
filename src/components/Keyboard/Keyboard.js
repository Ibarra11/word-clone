import { KEYBOARD_CHARS } from "../../constants";
function Keyboard({ guessList }) {
  return (
    <div className="keyboard-wrapper">
      {KEYBOARD_CHARS.map((row, rowIndex) => {
        return (
          <p key={rowIndex} className="keyboard-row">
            {row.map((char) => {
              let result = "";
              if (guessList.length > 0) {
                guessList.forEach(({ guess }) => {
                  const guessIndex = guess.findIndex(
                    ({ letter }) => letter === char
                  );
                  if (guessIndex !== -1) {
                    result += " " + guess[guessIndex].status;
                  }
                });
              }
              return (
                <span key={char} className={`keyboard-cell${result}`}>
                  {char}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Keyboard;
