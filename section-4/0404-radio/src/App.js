import React, { useState } from 'react';

const App = () => {
  const [product, setProduct] = useState('');
  const [color, setColor] = useState('');

  function handleChange({ target }) {
    setProduct(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          checked={color === 'blue'}
          value="blue"
          onChange={({ target }) => setColor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          checked={color === 'red'}
          value="red"
          onChange={({ target }) => setColor(target.value)}
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          checked={product === 'smartphone'}
          value="smartphone"
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          checked={product === 'notebook'}
          value="notebook"
          onChange={handleChange}
        />
        Notebook
      </label>
    </form>
  );
};

export default App;
