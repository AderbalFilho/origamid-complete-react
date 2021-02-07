import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
      <h1>{product.nome}</h1>
      <p>R$ {product.preco}</p>
    </div>
  )
}

export default Product
