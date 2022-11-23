import { clienteAxios } from "../config/axios"
import {AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
}from "../types"
import Swal from "sweetalert2"

export const crearNuevoProductoAction = (producto)=>{
    return async(dispatch) =>{
       dispatch(agregarProducto())
       try {
           await clienteAxios.post("/productos", producto)
            dispatch(agregarProductoExito(producto))
            Swal.fire("Correcto", "El Productos se agrego correctamente", "success")
       } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Hubo un error",
                text: "Intenta de nuevo"
            })
       }
    }
}

const agregarProducto =() =>({
    type: AGREGAR_PRODUCTO
})

const agregarProductoExito =producto=>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

export const obtenerProductos=()=>{
    return async (dispatch) =>{
        dispatch(descargarProductos())

        try {
            const {data} = await clienteAxios("/productos")
            dispatch(descargaProductosExitosa(data))
        } catch (error) {
            console.log(error)
            dispatch(descargaProductosError())
        }
    }
}

const descargarProductos = () =>({
    type:  DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos =>({
    type:DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = ()=>({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

export const borrarProducto = id =>{
    return async (dispatch) =>{
        dispatch(obtenerProductoEliminar(id))
        try {
            await  clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
        } catch (error) {
            console.log(error)
            dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar =id=>({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito =() =>({
    type:PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError =() =>({
    type:PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

export const obtenerProductoEditar = producto => {
    return (dispatch) =>{
        dispatch(obtenerProductoAction(producto))
    }
}

const obtenerProductoAction = producto =>({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

export const editarProductoAction = producto =>{
    return async(dispatch) =>{
        dispatch(editarProducto())
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(editarProductoExito(producto))
        } catch (error) {
            console.log(error)
            dispatch(editarProductoError())
        }
    }
}

const editarProducto = () => ({
    type:COMENZAR_EDICION_PRODUCTO,
})

const editarProductoExito = producto => ({
    type:PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type:PRODUCTO_EDITADO_ERROR
})
