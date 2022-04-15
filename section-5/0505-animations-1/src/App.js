import React, { useState } from "react";
import Produto from "./Produto";
import "./App.css";

const App = () => {
  const [activate, setActivate] = useState(false);

  return (
    <div>
      <button onClick={() => setActivate(!activate)}>Ativar</button>
      {activate && <Produto />}
    </div>
  );
};

export default App;
