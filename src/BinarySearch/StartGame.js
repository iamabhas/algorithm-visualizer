import React from "react";
import { Button } from "@mui/material";

export const StartGame = ({ start, end, startGame }) => {
  return (
    <>
      <div>
        <h1 style={{ color: "#d11212" }}>
          Think of any number between {start} to {end} for me to guess .
          (Decimals not allowed )
        </h1>
        <Button variant="contained" onClick={startGame}>
          Start Game
        </Button>
      </div>
    </>
  );
};
