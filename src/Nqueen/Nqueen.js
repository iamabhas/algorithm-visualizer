import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Nqueen.css";
export const Nqueen = () => {
  const [boardArray, setBoardArray] = useState([]);
  const boardPiece = document.getElementsByClassName("board-piece");
  const size = 8;
  const iterationSize = size * size;
  let navigate = useNavigate();

  const generateBoard = (size) => {
    let newArray = new Array(size).fill("").map(() => new Array(size).fill(""));
    setBoardArray(newArray);
  };

  useEffect(() => {
    generateBoard(size);
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <h1>Nqueen Visualizer</h1>
          <h3 style={{ color: "red" }}>
            Click on the board to place , double click to remove
          </h3>
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                for (let i = 0; i < iterationSize; i++) {
                  boardPiece[i].textContent = "";
                }
              }}
            >
              Clear Board
            </Button>
          </div>
        </div>
        <div className="chessboard-container"></div>
        <div
          className="chessboard"
          style={{
            gridTemplateColumns: `repeat(${size}, 70px)`,
            gridTemplateRows: `repeat(${size}, 70px)`,
          }}
        >
          {boardArray.map((row, rindex) =>
            row.map((column, cindex) => (
              <div
                className="board-piece"
                key={cindex}
                onClick={(e) => {
                  return (e.currentTarget.textContent = "Q");
                }}
                onDoubleClick={(e) => {
                  return (e.currentTarget.textContent = "");
                }}
                style={{
                  backgroundColor: `${
                    rindex % 2 === 0
                      ? cindex % 2 === 0
                        ? `white`
                        : `black`
                      : cindex % 2 === 0
                      ? `black`
                      : `white`
                  }`,
                }}
              ></div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
