import React, { useRef, useState } from 'react';

const App = () => {
  const [cart, setCart] = useState(0);
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>Adicionar Carrinho</button>
    </div>
  );
};

export default App;
