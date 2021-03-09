import React, { useState } from 'react';

const App = () => {
  const [textarea, setTextarea] = useState('');
  return (
    <textarea
      value={textarea}
      onChange={({ target }) => setTextarea(target.value)}
      rows="5"
    />
  );
};

export default App;
