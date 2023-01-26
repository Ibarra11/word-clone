import { range } from "../../utils";
function Guess({ guess }) {
  if (!guess) {
    return (
      <>
        {range(0, 5).map((_, index) => (
          <span key={index} className="cell"></span>
        ))}
      </>
    );
  }
  return (
    <>
      {guess.map(({ letter, status }, index) => {
        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
