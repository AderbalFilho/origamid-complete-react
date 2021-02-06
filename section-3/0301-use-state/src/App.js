import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [items, setItems] = useState(['Item 1']);

  function handleClick() {
    setCounter(counter => counter + 1);
    setItems([...items, `Item ${counter + 1}`]);
  }

  return (
    <div>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={handleClick}>{counter}</button>
    </div>
  );
};

export default App;
