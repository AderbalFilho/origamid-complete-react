import React, { useState } from 'react';

const App = () => {
  const colorsArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [colors, setColors] = useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setColors([...colors, target.value]);
    } else {
      setColors(colors.filter((color) => color !== target.value));
    }
  }

  return (
    <form>
      {colorsArray.map((color, index) => (
        <label key={index} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={color}
            checked={colors.includes(color)}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </form>
  );
};

export default App;
