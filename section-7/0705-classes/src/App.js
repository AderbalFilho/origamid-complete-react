import React, { useState } from "react";
import Products from "./Products";

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      {active && <Products title="Esses são os produtos" />}
      <button onClick={() => setActive(!active)}>Toggle</button>
    </div>
  );
};

export default App;
