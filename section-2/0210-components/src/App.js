import React from 'react';

import Header from './Header';
import Form from './Form/Form';
import Footer from './Footer';

const Test = () => {
  const active = false;

  if (active) {
    return <p>Teste</p>;
  }

  return null;
};

const App = () => {
  return (
    <section>
      <Test />
      <Header />
      <Form />
      <Footer />
    </section>
  );
}

export default App;
