import { OCULTAR_ALERTA, MOSTRAR_ALERTA } from "../types";

export const mostrarAlerta = alerta => {
    return(dispatch) =>{
        dispatch(mostrarAlertaError(alerta))
    }
}

const mostrarAlertaError = alerta => ({
    type:MOSTRAR_ALERTA,
    payload: alerta
})

export const ocultarAlerta =() =>{
    return(dispatch) => {
        dispatch(ocultarAlertaError())
    }
}

const ocultarAlertaError =() =>({
    type: OCULTAR_ALERTA,
    payload: null
})