import { combineReducers } from "redux"
import { productosReducer } from "./productosReducer"
import { alertaReducer } from "./alertaReduces"

export default combineReducers({
    productos: productosReducer,
    alertas: alertaReducer
})