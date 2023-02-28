import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export function ResultBanner({ guesses, answer }) {
  if (!guesses || guesses.length === 0) return null;
  if (guesses[guesses.length - 1] === answer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  }

  if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null;
}
