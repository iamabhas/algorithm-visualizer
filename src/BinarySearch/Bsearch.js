import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Bsearch.css";
import { StartGame } from "./StartGame";
import { GameOptions } from "./GameOption";
import "./Bsearch.css";
export const Bsearch = () => {
  const [controls, setControls] = useState({
    start: 0,
    end: 500,
    isRunning: false,
  });
  const { start, end, isRunning } = controls;
  let navigate = useNavigate();

  //Game controls and option states

  const midValue = (e, s) => {
    const mid = Math.floor((e + s) / 2);
    return mid;
  };

  const startGame = () => {
    setControls({ ...controls, isRunning: true });
  };

  const restartGame = () => {
    setControls({ start: 0, end: 500, isRunning: false });
  };

  const choiceYes = () => {
    const mid = midValue(end, start);
    setControls({ ...controls, start: mid + 1 });
  };

  const choiceNo = () => {
    const mid = midValue(end, start);
    setControls({ ...controls, end: mid });
  };

  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <h1 style={{ color: "black" }}>
            Number Guessing using Binary Search
          </h1>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </div>
        <div className="body-container">
          {!isRunning && <StartGame {...controls} startGame={startGame} />}
          {isRunning && (
            <GameOptions
              {...controls}
              choiceYes={choiceYes}
              choiceNo={choiceNo}
              restartGame={restartGame}
            />
          )}
        </div>
      </div>
    </>
  );
};
