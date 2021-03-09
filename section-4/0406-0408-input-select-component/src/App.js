import React, { useState } from 'react';

import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [color, setColor] = useState('');
  const [fruits, setFruits] = useState('');

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={color} setValue={setColor} />
      <h2>Frutas</h2>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={fruits}
        setValue={setFruits}
      />

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
