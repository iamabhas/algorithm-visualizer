import React from "react";
import { Button } from "@mui/material";
export const GameOptions = ({
  start,
  end,
  choiceYes,
  choiceNo,
  restartGame,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {end !== start && (
        <ToogleGuess
          start={start}
          end={end}
          choiceYes={choiceYes}
          choiceNo={choiceNo}
        />
      )}

      {end === start && (
        <RestartGame finalGuess={end} restartGame={restartGame} />
      )}
    </div>
  );
};

const ToogleGuess = ({ start, end, choiceYes, choiceNo }) => {
  return (
    <>
      <h1 style={{ color: "#d11212" }}>
        Your number is greater than {Math.floor((end + start) / 2)}
      </h1>
      <div className="button-container">
        <Button variant="contained" color="success" onClick={choiceYes}>
          Yes
        </Button>
        <Button variant="contained" color="warning" onClick={choiceNo}>
          No
        </Button>
      </div>
    </>
  );
};

const RestartGame = ({ finalGuess, restartGame }) => {
  return (
    <>
      <h1 style={{ color: "#d11212" }}>
        The number you chose was {finalGuess} . Am i correct ?
      </h1>
      <Button variant="contained" onClick={restartGame}>
        Yes you are ! Restart Game{" "}
      </Button>
    </>
  );
};
