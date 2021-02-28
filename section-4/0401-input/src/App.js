import React, { useState } from 'react';

const App = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
