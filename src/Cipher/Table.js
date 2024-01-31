import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Table = ({
  userInput,
  keyStream,
  isRunning,
  setIsRunning,
  method,
  setUserInput,
}) => {
  const plainText = userInput.text;
  const [cipherText, setCipherText] = useState("");
  const [vigenereTable, setVigenereTable] = useState([]);
  const [highlightedCells, setHighlightedCells] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    renderTable();
  }, []);

  async function encryptText(str, key) {
    setHighlightedCells([]);
    let cipher_text = "";
    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        let row = alphabet.indexOf(str[i]);
        let col = alphabet.indexOf(key[i % key.length]);

        let x = (row + col) % 26;
        cipher_text += alphabet[x];

        setHighlightedCells((prev) => [...prev, { row, col }]);
      } else {
        cipher_text += str[i];
      }
      setCipherText(cipher_text);
      await delay(1000);
    }
    setIsRunning(false);
  }

  async function decryptText(str, key) {
    setHighlightedCells([]);
    let decrypted_text = "";
    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        let myrow = alphabet.indexOf(str[i]);
        let mycol = alphabet.indexOf(key[i % key.length]);
        let x = (myrow - mycol + 26) % 26;
        decrypted_text += alphabet[x];
        setHighlightedCells((prev) => [...prev, { row: mycol, col: x }]);
        console.log(
          `For iteration ${i} -- row is : ${myrow} -- column is : ${mycol} --- x is ${x} and decrypted Text is ${decrypted_text}`
        );
      } else {
        decrypted_text += str[i];
      }
      setCipherText(decrypted_text);
      await delay(1000);
    }
    setIsRunning(false);
  }

  useEffect(() => {
    if (isRunning && plainText && keyStream) {
      if (method === "encrypt") {
        encryptText(plainText, keyStream);
      }
      if (method === "decrypt") {
        decryptText(plainText, keyStream);
      }
    }
  }, [isRunning]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderTable = () => {
    const table = [];

    for (let i = 0; i < 26; i++) {
      const row = [];

      for (let j = 0; j < 26; j++) {
        const index = (i + j) % 26;
        row.push(alphabet[index]);
      }

      table.push(row);
    }

    setVigenereTable(table);
  };

  const handleCellHighlight = (rowIndex, cellIndex) => {
    return highlightedCells.some(
      (cell) => cell.row === rowIndex && cell.col === cellIndex
    );
  };

  const handleColumnHighlight = (colIndex) => {
    return (
      method === "decrypt" &&
      highlightedCells.some((cell) => cell.col === colIndex)
    );
  };

  if (vigenereTable.length === 0) {
    return null;
  }

  return (
    <main className="myTable">
      <h3>
        Old Text :{" "}
        <span style={{ color: "red" }}>{plainText.toUpperCase()}</span>{" "}
      </h3>
      <h3>
        New Text : <span style={{ color: "red" }}>{cipherText}</span>{" "}
      </h3>
      <Button
        onClick={() => {
          setHighlightedCells([]);
          setCipherText("");
          setUserInput({ text: "", key: "" });
        }}
        variant="contained"
        disabled={isRunning}
        style={{ margin: "0.5rem" }}
      >
        Reset
      </Button>
      <table className="vigenere-table">
        <thead>
          <tr>
            <th></th>
            {vigenereTable[0].map((letter, index) => (
              <th
                key={index}
                className={
                  handleColumnHighlight(index) ? "highlightedColumn" : ""
                }
              >
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vigenereTable.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{alphabet[rowIndex]}</th>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={
                    handleCellHighlight(rowIndex, cellIndex)
                      ? "highlighted"
                      : ""
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
