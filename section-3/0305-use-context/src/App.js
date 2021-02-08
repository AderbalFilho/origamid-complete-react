import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Product from './Product';

const App = () => {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
};

export default App;
