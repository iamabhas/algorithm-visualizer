import React from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export const About = () => {
  let navigate = useNavigate();
  return (
    <>
      <main className="main-container">
        <div className="navbar">
          <h1>About this project</h1>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </div>
        <div className="sub-container">
          <h2 style={{ textAlign: "center", color: "#1976D2" }}>
            Made by Abhas K
          </h2>
          <h3 style={{ textAlign: "center" }}>
            - Algorithms used : Bubble Sort , Binary Search , Backtracking
          </h3>
          <h3 style={{ textAlign: "center" }}>
            - This project was inspired by{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/TamimEhsan/AlgorithmVisualizer"
            >
              TamimEhsan
            </a>
          </h3>
          <Alert severity="info">
            This Website isn't very responsive so algorithm visualization might
            not look good on mobile !
          </Alert>
        </div>
      </main>
    </>
  );
};
