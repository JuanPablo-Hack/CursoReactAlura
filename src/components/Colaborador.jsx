import React from 'react'
import '../styles/Colaborardor.css';
import { AiFillCloseCircle } from 'react-icons/ai'
export const Colaborador = (props) => {
    const { nombre, puesto, foto } = props.datos
    const { colorPrimario, eliminarColaborador } = props
    const obj = {
        backgroundColor: colorPrimario
    }
    return (
        <div className="colaborador">
            <AiFillCloseCircle className='eliminar' onClick={eliminarColaborador} />
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
