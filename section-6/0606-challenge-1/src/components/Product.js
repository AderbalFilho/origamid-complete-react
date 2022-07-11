import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../Head";
import styles from "./Product.module.css";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (err) {
        setError("Um erro acorreu");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;

  return (
    <section className={styles.product + " animeLeft"}>
      <Head
        title={`Ranek | ${product.nome}`}
        description={`Ranek | Esse é um produto: ${product.nome}`}
      />
      <div>
        {product.fotos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.titulo} />
        ))}
      </div>
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
