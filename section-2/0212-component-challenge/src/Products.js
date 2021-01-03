import React from 'react';

import Title from './Title';
import Product from './Product';

const Products = () => {
  const products = [
    { name: 'Notebook', properties: ['16gb ram', '512gb'] },
    { name: 'Smartphone', properties: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Title title="Produtos" />
      <div>
        {products.map((product) => {
          return (
            <Product key={product.name} {...product} />
          );
        })}
      </div>
    </section>
  )
}

export default Products
