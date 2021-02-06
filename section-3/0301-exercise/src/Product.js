import React from "react";

const Product = ({ product }) => {
  return product && (
    <ul>
      <li>id: {product.id}</li>
      {product.fotos.map(foto => {
        return <li key={foto.titulo}><img src={foto.src} alt={foto.titulo} title={foto.titulo} /></li>
      })}
      <li>Nome: {product.nome}</li>
      <li>Preço: R$ {product.preco}</li>
      <li>Descrição: {product.descricao}</li>
      <li>Vendido: {product.vendido ? 'Sim' : 'Não'}</li>
      <li>Id do usuário: {product.usuario_id}</li>
    </ul>
  );
};

export default Product;
