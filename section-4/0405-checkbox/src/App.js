import React, { useState } from 'react';

const App = () => {
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
      <label>
        <input
          type="checkbox"
          value="blue"
          checked={colors.includes('blue')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="red"
          checked={colors.includes('red')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
