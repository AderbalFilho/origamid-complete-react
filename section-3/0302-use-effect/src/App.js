import React, { useState } from 'react';
import Product from './Product';

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      {active && <Product />}
      <button onClick={() => setActive(!active)}>{active ? 'Desativar' : 'Ativar'}</button>
    </div>
  );
};

export default App;
