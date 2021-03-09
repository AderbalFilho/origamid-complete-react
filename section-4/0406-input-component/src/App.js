import React, { useState } from 'react';

import Input from './Form/Input';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <Input id="nome" label="Nome" value={name} setValue={setName} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
