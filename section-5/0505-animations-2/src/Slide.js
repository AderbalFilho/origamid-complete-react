import React, { useEffect, useRef, useState } from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-1 * width * active);
  }, [active]);

  function slidePrev() {
    setActive(active - 1);
  }

  function slideNext() {
    setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev} disabled={active <= 0}>
          Anterior
        </button>
        <button onClick={slideNext} disabled={active === slides.length - 1}>
          Próximo
        </button>
      </nav>
    </section>
  );
};

export default Slide;
