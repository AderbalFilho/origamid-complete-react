import React, { useState } from 'react';

import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
`;

const Product = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Price = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Buy = styled.button`
  background: ${({ active }) => (active ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ active }) => (active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background: tomato;
  }
`;

const App = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div>
      <Buy active={active} onClick={handleClick}>
        Compre aqui
      </Buy>
      <ProductsContainer>
        <Product>
          <Title>Notebook</Title>
          <Paragraph>Meu texto é esse.</Paragraph>
          <Price color="#84e">R$ 2000</Price>
        </Product>
        <Product>
          <Title>Smartphone</Title>
          <Paragraph>Meu texto é esse.</Paragraph>
          <Price color="#53d956">R$ 1000</Price>
        </Product>
      </ProductsContainer>
    </div>
  );
};

export default App;
