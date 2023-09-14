import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Nqueen.css";
export const Nqueen = () => {
  const [boardArray, setBoardArray] = useState([]);
  const size = 8;
  let navigate = useNavigate();

  const generateBoard = (size) => {
    let newArray = new Array(size).fill("").map(() => new Array(size).fill(""));
    setBoardArray(newArray);
  };

  const isSafe = (board, row, col) => {
    const size = board.length;

    // Check column
    for (let i = 0; i < size; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }

    // upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // upper right diagonal
    for (let i = row, j = col; i >= 0 && j < size; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // Lower left diagonal
    for (let i = row, j = col; i < size && j >= 0; i++, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // Lower right diagonal
    for (let i = row, j = col; i < size && j < size; i++, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // Check row
    for (let i = 0; i < size; i++) {
      if (board[row][i] === "Q") {
        return false;
      }
    }

    return true;
  };

  const handleQueenPlacement = (row, col) => {
    const newBoard = [...boardArray];
    if (isSafe(newBoard, row, col)) {
      newBoard[row][col] = "Q";
    } else {
      alert("Invalid move! Can't Place Queen !");
    }

    setBoardArray(newBoard);
  };

  useEffect(() => {
    generateBoard(size);
  }, []);

  return (
    <div className="main-container">
      <div className="navbar">
        <h1>Nqueen Visualizer</h1>
        <h3 style={{ color: "red" }}>
          Left Click to place Queen , Right click to remove Queen
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
              const newBoard = boardArray.map((row) => row.map((column) => ""));
              setBoardArray(newBoard);
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
        z
      >
        {boardArray.map((row, rindex) =>
          row.map((column, cindex) => (
            <div
              className="board-piece"
              key={cindex}
              onClick={() => {
                handleQueenPlacement(rindex, cindex);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                const newBoard = [...boardArray];
                newBoard[rindex][cindex] = ""; // Remove queen
                setBoardArray(newBoard);
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
            >
              {boardArray[rindex][cindex]}
            </div>
          ))
        )}
      </div>
      <h3 style={{ color: "red" }}>
        Rules : Two Queens should not be on same row , column or diagonal . If 8
        queens are placed then it is successful !
      </h3>
    </div>
  );
};
