import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { crearNuevoProductoAction } from "../actions/productoActions";

export const NuevoProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const agregarProductos = producto =>
    dispatch(crearNuevoProductoAction(producto));

  const { loading, error } = useSelector(state => state.productos);

  const handleSubmit = async e => {
    e.preventDefault();
    if ([nombre, precio].includes("")) {
      console.log("ahorita no mi rey");
      return;
    }
    await agregarProductos({ nombre, precio });
    setNombre("");
    setPrecio("");
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              NuevoProductos{" "}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                {loading ? (
                  <p className="mb-0">Cargando...</p>
                ) : (
                  <p className="mb-0">Agregar</p>
                )}
              </button>
            </form>
            {error ? (
              <p className="alert alert-danger p-2 mt-3 text-center">
                Hubo un error pa!
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
