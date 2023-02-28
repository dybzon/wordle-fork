import React from "react";
import { GuessInput } from "./GuessInput";
import { PreviousGuesses } from "./PreviousGuesses";
import { ResultBanner } from "./ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput
        setGuesses={setGuesses}
        isGameOver={isGameOver(guesses, answer)}
      />
      <ResultBanner guesses={guesses} answer={answer} />
    </>
  );
}

function isGameOver(guesses, answer) {
  if (!guesses || guesses.length === 0) return false;
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) return true;
  if (guesses[guesses.length - 1] === answer) return true;
}

export default Game;
