import React from "react";
import { Button } from "@mui/material";
import { algorithms } from "../data";
import { useNavigate } from "react-router-dom";
import Algorithm from "./Algorithm";
export const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <main className="main-container">
        <div className="navbar">
          <h1>Algorithm Visualizer by Abhas Khanal</h1>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Button>
        </div>
        <div className="subContainer">
          {algorithms.map((algorithm) => {
            return <Algorithm {...algorithm} key={algorithm.id} />;
          })}
        </div>
      </main>
    </>
  );
};
