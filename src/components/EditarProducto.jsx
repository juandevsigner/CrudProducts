import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

export const EditarProducto = () => {
  const navigate = useNavigate();
  const { productEditar } = useSelector(state => state.productos);
  const [productoGuardar, setProductoGuardar] = useState({
    nombre: "",
    precio: "",
    id: "",
  });

  const { nombre, precio } = productoGuardar;

  useEffect(() => {
    setProductoGuardar(productEditar);
  }, [productEditar]);

  const onChangeForm = e => {
    setProductoGuardar({
      ...productoGuardar,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmitEditar = async e => {
    e.preventDefault();
    await dispatch(editarProductoAction(productoGuardar));
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={handleSubmitEditar}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeForm}
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
                  onChange={onChangeForm}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
