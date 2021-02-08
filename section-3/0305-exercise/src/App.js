import React from 'react';
import { GlobalStorage } from './GlobalContext';
import ClearData from './ClearData';
import Product from './Product';

const App = () => {
  return (
    <GlobalStorage>
      <Product />
      <ClearData />
    </GlobalStorage>
  );
};

export default App;
