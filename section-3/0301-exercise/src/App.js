import React, { useState } from 'react';
import Product from './Product';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(type) {
    const route = `https://ranekapi.origamid.dev/json/api/produto/${type}`;
    setIsLoading(true);
    
    fetch(route)
      .then(dataResult => {
        dataResult.json()
          .then(result => {
            setData(result);
            setIsLoading(false);
          });
      });
  }

  return (
    <>
      <button style={{margin: '0.5em'}} onClick={() => handleClick('tablet')}>Tablet</button>
      <button style={{margin: '0.5em'}} onClick={() => handleClick('smartphone')}>Smartphone</button>
      <button style={{margin: '0.5em'}} onClick={() => handleClick('notebook')}>Notebook</button>
      {isLoading ?
        <p>Carregando...</p> :
        <Product product={data} />
      }
    </>
  );
};

export default App;
