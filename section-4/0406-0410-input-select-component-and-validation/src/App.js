import React, { useState } from 'react';

// import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
// import Radio from './Form/Radio';
// import Select from './Form/Select';

const App = () => {
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    }

    if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    }

    setError(null);
    return true;
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) {
      validateCep(target.value);
    }

    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [product, setProduct] = useState('');
  // const [color, setColor] = useState('');
  // const [fruits, setFruits] = useState('');
  // const [languages, setLanguages] = useState([]);
  // const [terms, setTerms] = useState([]);

  // return (
  //   <form>
  //     <h2>Termos</h2>
  //     <Checkbox
  //       options={['Li e aceito os termos.']}
  //       value={terms}
  //       setValue={setTerms}
  //     />
  //     <h2>Checkbox</h2>
  //     <Checkbox
  //       options={['JavaScript', 'PHP', 'Ruby']}
  //       value={languages}
  //       setValue={setLanguages}
  //     />

  //     <h2>Cores</h2>
  //     <Radio options={['Azul', 'Vermelho']} value={color} setValue={setColor} />
  //     <h2>Frutas</h2>
  //     <Radio
  //       options={['Limão', 'Laranja', 'Uva']}
  //       value={fruits}
  //       setValue={setFruits}
  //     />

  //     <Select
  //       options={['Smartphone', 'Tablet']}
  //       value={product}
  //       setValue={setProduct}
  //     />
  //     <Input id="nome" label="Nome" value={name} setValue={setName} required />
  //     <Input id="email" label="Email" value={email} setValue={setEmail} />
  //     <button>Enviar</button>
  //   </form>
  // );
};

export default App;
