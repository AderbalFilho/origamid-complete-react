import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/';
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  function clearData() {
    setData(null);
  }

  return (
    <GlobalContext.Provider value={{ data, clearData }}>
      {children}
    </GlobalContext.Provider>
  );
};
