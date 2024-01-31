import React from "react";
import { useNavigate } from "react-router-dom";
const Algorithm = ({ name, img, path }) => {
  let navigate = useNavigate();
  let newPath = path;
  return (
    <>
      <div
        className="algorithm-container"
        onClick={() => {
          navigate(newPath);
        }}
      >
        <div className="img-div">
          <img src={img} alt={name} />
        </div>

        <div>
          <h3>{name}</h3>
        </div>
      </div>
    </>
  );
};

export default Algorithm;
