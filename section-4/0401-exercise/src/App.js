import React, { useState } from 'react';

import { useFetch } from './customHooks';

const App = () => {
  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Número',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ];

  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {})
  );
  const [isSent, setIsSent] = useState(null);
  const { request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSent(false);

    const { response } = await request(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    );

    if (response && response.ok) {
      setIsSent(true);
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}

        {isSent && <p>Formulário Enviado</p>}

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default App;
