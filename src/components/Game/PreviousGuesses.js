import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
export function PreviousGuesses({ guesses, answer }) {
  const rows = [];
  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    const guess = guesses[i] ?? "";
    rows.push(guess);
  }

  return (
    <div className="guess-results">
      {rows.map((r, i) => (
        <GuessRow guess={r} key={i} answer={answer} />
      ))}
    </div>
  );
}

function GuessRow({ guess, answer }) {
  if (!guess) {
    return <EmptyRow />;
  }

  const checkedGuess = checkGuess(guess, answer);
  return (
    <p className="guess">
      {[...checkedGuess].map((c, i) => (
        <span className={`cell ${c.status}`} key={i}>
          {c.letter}
        </span>
      ))}
    </p>
  );
}

function EmptyRow() {
  return (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}
