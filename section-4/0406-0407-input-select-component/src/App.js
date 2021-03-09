import React, { useState } from 'react';

import Input from './Form/Input';
import Select from './Form/Select';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');

  return (
    <form>
      <Select
        options={['Smartphone', 'Tablet']}
        value={product}
        setValue={setProduct}
      />
      <Input id="nome" label="Nome" value={name} setValue={setName} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
