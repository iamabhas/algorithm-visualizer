import React from "react";
import "./Cipher.css";
import CipherTable from "./Table";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";

const generateKeyStream = (text, key) => {
  let keyStream = "";
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      while (key[keyIndex % key.length] === " ") {
        keyIndex++;
      }
      keyStream += key[keyIndex % key.length].toUpperCase();
      keyIndex++;
    }
  }

  return keyStream;
};

const Cipher = () => {
  const [running, setRunning] = useState(false);
  const [userInput, setUserInput] = useState({
    text: "",
    key: "",
  });
  const [keystream, setKeyStream] = useState("");
  const [cryptographyMethod, setCryptographyMethod] = useState("");

  const handleSubmit = (e, method) => {
    e.preventDefault();
    setCryptographyMethod(method);
    if (!userInput.text || !userInput.key) {
      alert("Empty Field !");
    }
    const key = generateKeyStream(userInput.text, userInput.key);
    // console.log(key);
    setKeyStream(key);

    setRunning(true);
  };

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  return (
    <main className="main-container">
      <nav className="navbar">
        <h1>Vigenère Cipher Visualizer</h1>
        <div>
          Example you can use : text- "attackatdawn", key- "lemon" and encrypt
          it then take the encrypted text and use same key to decrypt
        </div>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back Home
        </Button>
      </nav>
      <div className="cipher">
        <form>
          <label>Enter Text you want to Encrypt/Decrypt</label>
          <input
            type="text"
            name="text"
            value={userInput.text}
            onChange={handleChange}
          />
          <label>Enter Key</label>
          <input
            type="text"
            name="key"
            value={userInput.key}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            style={{ margin: "0.5rem", fontSize: "1.1rem" }}
            type="submit"
            disabled={running}
            onClick={(e) => {
              handleSubmit(e, "encrypt");
            }}
          >
            Encrypt Text
          </Button>

          <Button
            variant="contained"
            style={{ margin: "0.5rem", fontSize: "1.1rem" }}
            type="submit"
            disabled={running}
            onClick={(e) => {
              handleSubmit(e, "decrypt");
            }}
          >
            Decrypt Text
          </Button>
        </form>
        <CipherTable
          userInput={userInput}
          keyStream={keystream}
          isRunning={running}
          setIsRunning={setRunning}
          method={cryptographyMethod}
          setUserInput={setUserInput}
        />
      </div>
    </main>
  );
};

export default Cipher;
