import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return state.filter((item) => item !== action.content);
    case "add":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Example = () => {
  const [state, dispatch] = useReducer(reducer, ["Banana", "Uva"]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "remove", content: "Banana" })}>
        Remover Banana
      </button>
      <button onClick={() => dispatch({ type: "add", content: "Limão" })}>
        Adicionar Limão
      </button>
      {state}
    </div>
  );
};

export default Example;
