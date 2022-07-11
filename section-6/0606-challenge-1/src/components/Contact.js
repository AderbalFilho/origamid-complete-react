import React from "react";
import photo from "../assets/img/contato.jpg";
import Head from "../Head";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={photo} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.data}>
          <li>andre@origamid.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
