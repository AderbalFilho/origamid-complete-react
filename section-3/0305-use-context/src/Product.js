import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Product = () => {
  const global = useContext(GlobalContext);

  return (
    <div>
      Produto: {global.counter}{' '}
      <button onClick={() => global.addTwo()}>Adicionar</button>
    </div>
  );
};

export default Product;
