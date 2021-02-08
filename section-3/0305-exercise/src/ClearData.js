import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const ClearData = () => {
  const { clearData } = useContext(GlobalContext);

  return <button onClick={clearData}>Limpar</button>;
};

export default ClearData;
