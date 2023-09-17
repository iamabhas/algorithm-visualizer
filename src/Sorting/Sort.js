import React, { useState, useEffect } from "react";
import "./Sort.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { bubbleSort } from "./BubbleSort";
import { selectionSort } from "./SelectionSort";
import { insertionSort } from "./InsertionSort";
import { bogoSort } from "./BogoSort";
export const Sort = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [resetStatus, setResetStatus] = useState(true);

  const arraySize = 65;
  let navigate = useNavigate();
  let speed = 14;
  let bars = document.getElementsByClassName("bar");
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const generateRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
  };

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(generateRandomNumber(10, 500));
    }
    setRandomArray(newArray);
    setResetStatus(false);
    for (let i = 0; i < randomArray.length; i++) {
      bars[i].style.backgroundColor = "black";
    }
  };

  useEffect(() => {
    if (resetStatus) {
      resetArray();
    }
  }, [resetStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <h1>Sorting Visualizer</h1>
          <h3 style={{ textAlign: "center", color: "red" }}>
            Click on "Stop Sorting to Exit Sort"
          </h3>
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home Page
            </Button>
          </div>
        </div>
        <h4 style={{ color: "red", textAlign: "center", margin: "1.3rem" }}>
          ! The time complexity of bogo sort is O((n+1)!) which is unsolvable
          and will run on a loop ! Check bogo stats :{" "}
          <Link to="/bogo">Stats</Link>
        </h4>
        <div className="sort-body">
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
              disabled={!isRunning}
            >
              Stop Sorting
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setResetStatus(true);
              }}
              color="secondary"
              disabled={isRunning}
            >
              Reset Array
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                bubbleSort(randomArray, setIsRunning, speed, delay, bars);
              }}
              disabled={isRunning}
            >
              Bubble Sort !
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                insertionSort(randomArray, setIsRunning, delay, speed, bars);
              }}
              disabled={isRunning}
            >
              Insertion Sort !
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                selectionSort(randomArray, bars, delay, speed, setIsRunning);
              }}
              disabled={isRunning}
            >
              Selection Sort !
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                bogoSort(randomArray, setIsRunning, speed, delay, bars);
              }}
              disabled={isRunning}
            >
              Bogo Sort!
            </Button>
          </div>
          <div className="array-container">
            {randomArray.map((array, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "30px",
                    height: `${array}px`,
                    backgroundColor: "black",
                    margin: "1px",
                    color: "white",
                  }}
                  className="bar"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
