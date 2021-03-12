import React from 'react';

import styles from './Product.module.css';

const Product = () => {
  return (
    <div>
      <h1 className={styles.title}>Notebook</h1>
      <p className={styles.price}>R$ 20000</p>
      <button className={styles.buy}>Comprar</button>
    </div>
  );
};

export default Product;
