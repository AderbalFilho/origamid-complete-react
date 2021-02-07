import React, { useEffect, useState } from 'react';
import Product from './Product';

const App = () => {
  const [product, setProduct] = useState(null);

  function getProduct(type) {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${type}`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        setProduct(result)
        localStorage.setItem('product', type);
      });
  }

  useEffect(() => {
    const type = localStorage.getItem('product');

    type && getProduct(type);
  }, [])

  function handleClick({ target }) {
    const type = target.innerText;

    getProduct(type);
  }

  return (
    <div>
      <h1>Preferência: {product && product.nome}</h1>
      <button onClick={handleClick} style={{margin: '.5em'}}>notebook</button>
      <button onClick={handleClick} style={{margin: '.5em'}}>smartphone</button>
      {product && <Product product={product} />}
    </div>
  );
};

export default App;
