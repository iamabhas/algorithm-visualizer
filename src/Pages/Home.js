import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { algorithms } from "../data";
import { FcAdvance } from "react-icons/fc";

export const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <main className="main-container">
        <div className="navbar">
          <h1>Algorithm Visualizer by Abhas K</h1>
          <h4 style={{ textAlign: "center", margin: "1rem" }}>
            Source Code :{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/iamabhas/algorithm-visualizer"
            >
              github.com/iamabhas/algorithm-visualizer
            </a>
          </h4>
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
          <Paper>
            <List aria-label="algorithms list">
              {algorithms.map((algorithm) => (
                <ListItem
                  key={algorithm.id}
                  secondaryAction={
                    <Button
                      onClick={() => navigate(algorithm.path)}
                      endIcon={<FcAdvance />}
                    >
                      View
                    </Button>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={algorithm.name}
                      src={algorithm.img}
                      variant="square"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={algorithm.name}
                    primaryTypographyProps={{ style: { fontWeight: "bold" } }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
      </main>
    </>
  );
};
