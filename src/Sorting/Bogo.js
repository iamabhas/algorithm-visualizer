import React, { useState, useEffect } from "react";
import "./Sort.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const isSorted = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
};

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

export const Bogo = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [resetStatus, setResetStatus] = useState(true);
  const [probability, setProbability] = useState(0);
  const [permutations, setPermutations] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSize, setCurrentSize] = useState(5);

  const arraySize = currentSize;
  let navigate = useNavigate();

  const generateRandomNumber = (start, end, count, usedNumbers) => {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < count) {
      const randomNumber = Math.floor(
        Math.random() * (end - start + 1) + start
      );
      if (!usedNumbers.includes(randomNumber)) {
        usedNumbers.push(randomNumber);
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  };

  const resetArray = () => {
    const usedNumbers = [];
    const newArray = generateRandomNumber(20, 50, arraySize, usedNumbers);

    setRandomArray(newArray);
    setResetStatus(false);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (resetStatus) {
      resetArray();
    }

    const possiblePermutations = factorial(arraySize);
    setPermutations(possiblePermutations);
    const successfulPermutations = 1;
    const calculatedProbability =
      (successfulPermutations / possiblePermutations) * 100;
    setProbability(calculatedProbability.toFixed(20));
  }, [resetStatus, arraySize]); // eslint-disable-line react-hooks/exhaustive-deps

  const bogoSort = () => {
    setIsRunning(true);

    const tempArr = [...randomArray];

    const sortingInterval = setInterval(() => {
      if (isSorted(tempArr)) {
        clearInterval(sortingInterval);
        setIsRunning(false);
      } else {
        shuffleArray(tempArr);
        setCurrentStep((prev) => prev + 1);
        setRandomArray([...tempArr]);
      }
    }, 100);
  };

  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <h1>Bogo Sort Stats</h1>
          <div className="button-container">
            <label style={{ fontSize: "20px", margin: "0.5rem" }}>
              Enter Array Size
            </label>
            <select
              value={currentSize}
              onChange={(e) => {
                setCurrentSize(Number(e.target.value));
                setResetStatus(true);
              }}
              style={{ fontSize: "1rem" }}
            >
              <option value={3}>Three</option>
              <option value={5}>Five</option>
              <option value={10}>Ten</option>
            </select>
          </div>
        </div>
        <div className="sort-body">
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Home Page / Stop
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
              onClick={bogoSort}
              disabled={isRunning}
            >
              Start Sort !
            </Button>
          </div>

          <div className="bogo-container">
            {randomArray.map((arrayValue, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "40px",
                    height: `${arrayValue * 4}px`,
                    backgroundColor: "black",
                    margin: "1px",
                    color: "white",
                    textAlign: "center",
                  }}
                  className="bar"
                >
                  {arrayValue}
                </div>
              );
            })}
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>
          Number of Iterations : {currentStep}{" "}
        </h2>
        <h2 style={{ textAlign: "center" }}>
          Status :{" "}
          {isSorted(randomArray) ? (
            <span style={{ color: "green" }}>Sorted !</span>
          ) : (
            <span style={{ color: "red" }}>Not Sorted...!</span>
          )}
        </h2>
        <h3 style={{ textAlign: "center" }}>
          For <span style={{ color: "red" }}>{arraySize}</span> elements the
          number of permutations is{" "}
          <span style={{ color: "red" }}>{arraySize}</span>! ={" "}
          <span style={{ color: "red" }}>{permutations}</span> and probability
          of sorted shuffle is{" "}
          <span style={{ color: "red" }}>{probability}</span>{" "}
        </h3>
      </div>
    </>
  );
};
