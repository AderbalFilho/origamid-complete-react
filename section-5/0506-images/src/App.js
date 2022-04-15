import React from "react";
import photo from "./assets/img/photo.jpg";
import { ReactComponent as Dog } from "./assets/img/dog.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <p className="background"></p>
      <Dog />
      <img src={photo} alt="landscape" />
    </div>
  );
};

export default App;
