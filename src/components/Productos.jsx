import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductos } from "../actions/productoActions";
import { Producto } from "./";

export const Productos = () => {
  const dispatch = useDispatch();
  const { productos, error, loading } = useSelector(state => state.productos);

  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductos());
    cargarProductos();
  }, []);

  if (loading) return <p className="text-center">Cargando...</p>;

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? (
        <p className="font-wight-bold alert alert-danger text-center mt-4">
          {" "}
          Hubo un error
        </p>
      ) : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <th scope="col">No hay Productos</th>
            </tr>
          ) : (
            productos.map(producto => (
              <Producto key={producto.id} producto={producto} />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};
