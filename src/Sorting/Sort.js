import React, { useState, useEffect } from "react";
import "./Sort.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { bubbleSort } from "./BubbleSort";
import { selectionSort } from "./SelectionSort";
import { insertionSort } from "./InsertionSort";
import { bogoSort } from "./BogoSort";
export const Sort = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [resetStatus, setResetStatus] = useState(true);

  const arraySize = 70;
  let navigate = useNavigate();
  let speed = 15;
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
          <h3 style={{ color: "red" }}>
            ! The time complexity of bogo sort is O((n+1)!) which is unsolvable
            and will run on a loop . Press Home button to stop !
          </h3>
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back / Stop
            </Button>
          </div>
        </div>
        <div className="sort-body">
          <div className="button-container">
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
