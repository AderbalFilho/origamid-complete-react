import React, { useReducer } from "react";
import Example from "./Example";

function reducer(state, action) {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("increase")}>+</button>
      <button onClick={() => dispatch("decrease")}>-</button>
      <p>{state}</p>
      <Example />
    </div>
  );
};

export default App;
