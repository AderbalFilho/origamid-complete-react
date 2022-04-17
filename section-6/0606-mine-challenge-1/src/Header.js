import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">
          <button className="button">Produtos</button>
        </NavLink>
        <NavLink to="/contato">
          <button className="button">Contato</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
