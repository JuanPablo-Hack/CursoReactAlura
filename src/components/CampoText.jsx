import React from 'react'
import '../styles/CampoTexto.css'

const CampoText = (props) => {
    const cambiarValor = (e) => props.actualizarValor(e.target.value);
    return (
        <div className='campo-texto'>
            <label htmlFor="">{props.titulo}</label>
            <input
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={cambiarValor}
            />
        </div>
    )
}

export default CampoText
