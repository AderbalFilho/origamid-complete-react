import React, { useState } from "react";
// import Contact from "./Contact";
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      {active && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contact />
        </React.Suspense>
      )}
      <button onClick={() => setActive(true)}>Ativar</button>
    </div>
  );
};

export default App;
