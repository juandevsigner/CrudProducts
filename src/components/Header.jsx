import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link className="text-light" to="/">
            CRUD - React, Redux
          </Link>
        </h1>
      </div>
      <Link
        to="/productos/nuevos"
        className="btn btn-danger nuevo-post d-block d-mb-inline-block"
      >
        Agregar Producto &#43;
      </Link>
    </nav>
  );
};
