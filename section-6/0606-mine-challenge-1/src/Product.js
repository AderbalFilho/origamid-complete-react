import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  const { request } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
      console.log(json);
      setProduct(json);
    }
    fetchData();
  }, [params.id, request]);

  return (
    <>
      {product && (
        <section className="product">
          <div className="product-img-wrapper">
            {product.fotos &&
              product.fotos.map((foto) => (
                <img
                  key={foto.titulo}
                  className="product-img"
                  src={foto.src}
                  alt={foto.titulo}
                />
              ))}
          </div>
          <div>
            <h3>{product.nome}</h3>
            <div className="tag">R$ {product.preco}</div>
            <p>{product.descricao}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
