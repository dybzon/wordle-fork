import React from "react";

export function GuessInput({ setGuesses, isGameOver }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) return;
        setGuesses((g) => [...g, guess]);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        disabled={isGameOver}
      />
    </form>
  );
}
