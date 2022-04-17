import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "./useFetch";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { request } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      console.log(json);
      setProducts(json);
    }
    fetchData();
  }, [request]);

  return (
    <div className="products-wrapper">
      {products.length > 0 &&
        products.map((product) => {
          const productUrl = `/produto/${product.id}`;

          return (
            <div key={product.id}>
              <NavLink to={productUrl}>
                <img
                  src={product.fotos[0].src}
                  alt={product.nome}
                  className="products-img"
                />
              </NavLink>
              <NavLink to={productUrl}>
                <p className="products-name">
                  <strong>{product.nome}</strong>
                </p>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
