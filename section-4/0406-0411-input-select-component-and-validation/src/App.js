import React from 'react';

// import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
// import Radio from './Form/Radio';
// import Select from './Form/Select';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const name = useForm();
  const surname = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (cep.validate() && email.validate() && name.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="name" type="text" {...name} />
      <Input label="Sobrenome" id="surname" type="text" {...surname} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
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
