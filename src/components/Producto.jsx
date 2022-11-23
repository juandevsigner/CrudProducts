import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  borrarProducto,
  obtenerProductoEditar,
} from "../actions/productoActions";
import Swal from "sweetalert2";

export const Producto = ({ producto }) => {
  const { id, nombre, precio } = producto;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEliminarConfirm = id => {
    Swal.fire({
      title: "Esta seguro de eliminarlo?",
      icon: "warning",
      text: "No hay vuelta atras papu",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar pa",
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Eliminado",
          "El productos se elimino correctamente",
          "success"
        );
        dispatch(borrarProducto(id));
      }
    });
  };

  const redirecionarEdicion = id => {
    dispatch(obtenerProductoEditar(producto));
    navigate(`/productos/editar/${id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redirecionarEdicion(id)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => handleEliminarConfirm(id)}
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
