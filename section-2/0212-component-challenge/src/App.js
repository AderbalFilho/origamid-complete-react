import React from 'react';

import Header from './Header';
import Home from './Home';
import Products from './Products';

const App = () => {
  const { pathname } = window.location;

  return (
    <>
      <Header />
      {pathname === '/produtos' ? <Products /> : <Home />}
    </>
  );
}

export default App;
