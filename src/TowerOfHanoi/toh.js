import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, MenuItem } from "@mui/material";
import "./toh.css";
const Toh = () => {
  const [towers, setTowers] = useState([[], [], []]);
  const [diskCount, setDiskCount] = useState(7);

  useEffect(() => {
    const handleFirstTowerDisks = () => {
      const diskArray = [];
      for (let i = 1; i <= diskCount; i++) {
        diskArray.push(i);
      }
      setTowers([[...diskArray], [], []]);
    };

    handleFirstTowerDisks();
  }, [diskCount]);

  const handleChangeDiskCount = (event) => {
    setDiskCount(event.target.value);
  };

  let navigate = useNavigate();
  return (
    <main className="main-container">
      <div className="nav">
        <h1>Tower of Hanoi Visualizer</h1>
        <h1 style={{ color: "red" }}>Not Completed !</h1>
        <Button onClick={() => navigate("/")} variant="contained">
          Go to Home Page
        </Button>
      </div>
      <div className="toh-body">
        <div className="toh">
          {towers.map((tower, index) => (
            <div key={index} className="towers">
              <div></div>
              {tower.map((disk, diskIndex) => (
                <div
                  className="disks"
                  key={diskIndex}
                  style={{ width: `${disk * 10}%` }}
                >
                  {disk}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Select
          value={diskCount}
          onChange={handleChangeDiskCount}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          variant="outlined"
          style={{ margin: "1rem", textAlign: "left" }}
        >
          <MenuItem value={3}>3 Disks</MenuItem>
          <MenuItem value={5}>5 Disks</MenuItem>
          <MenuItem value={7}>7 Disks</MenuItem>
        </Select>
        <Button variant="contained" style={{ margin: "1rem" }}>
          Start Visualization
        </Button>
      </div>
    </main>
  );
};

export default Toh;
