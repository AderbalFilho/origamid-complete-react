import React, { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [product, setProduct] = useLocalStorage('product', '');
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
      console.log(response, json);
    }

    fetchData();
  }, [request]);
  console.log(data);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <>
      {error && <p>{error.message}</p>}
      {loading && <p>Carregando...</p>}
      {data && (
        <div>
          <p>Produto preferido: {product}</p>
          <button onClick={handleClick}>notebook</button>
          <button onClick={handleClick}>smartphone</button>

          {data.map((product) => (
            <div key={product.id}>
              <h1>{product.nome}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
