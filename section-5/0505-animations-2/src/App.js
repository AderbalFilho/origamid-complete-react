import React from "react";
import Slide from "./Slide";

const App = () => {
  const slides = [
    { id: "Slide 1", text: "Slide 1" },
    { id: "Slide 2", text: "Slide 2" },
    { id: "Slide 3", text: "Slide 3" },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
