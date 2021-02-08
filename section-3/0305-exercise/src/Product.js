import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Product = () => {
  const { data } = useContext(GlobalContext);

  return (
    data && (
      <>
        <h1>Produtos:</h1>
        <ul>
          {data.map((product) => {
            return <li key={product.id}>{product.nome}</li>;
          })}
        </ul>
      </>
    )
  );
};

export default Product;
