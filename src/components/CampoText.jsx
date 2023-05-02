import React from 'react'
import '../styles/CampoTexto.css'

const CampoText = (props) => {
    return (
        <div className='campo-texto'>
            <label htmlFor="">{props.titulo}</label>
            <input placeholder={props.placeholder} required={props.required} />
        </div>
    )
}

export default CampoText
