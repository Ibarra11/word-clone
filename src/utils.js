export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const checkGuess = (guess, answer) => {
  const result = [];
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      result.push({ letter: guess[i], status: "correct" });
    } else if (answer.indexOf(guess[i]) !== -1) {
      result.push({ letter: guess[i], status: "misplaced" });
    } else {
      result.push({ letter: guess[i], status: "incorrect" });
    }
  }
  return result;
};

export const checkWinner = (guess) => {
  for (let i = 0; i < guess.length; i++) {
    if (guess[i].status !== "correct") {
      return false;
    }
  }
  return true;
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
