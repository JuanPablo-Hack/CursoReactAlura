import React from 'react'
import '../styles/Colaborardor.css';
export const Colaborador = (props) => {
    const { nombre, puesto, foto } = props.datos
    const { colorPrimario } = props
    const obj = {
        backgroundColor: colorPrimario
    }
    return (
        <div className="colaborador">
            <div className="encabezado" style={obj}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}
