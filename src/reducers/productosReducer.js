import {AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    GUARDAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
}from "../types"


const initialState ={
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null
}

export const productosReducer =(state = initialState, action) =>{
    switch(action.type){
        case AGREGAR_PRODUCTO:
        case DESCARGA_PRODUCTOS:
            return{
                ...state,
                loading: true,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload ]
            }
        case GUARDAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoEliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos: state.productos.filter(product => product.id !== state.productoEliminar),
                productoEliminar: null
            }

        default:
            return state;
    }
}