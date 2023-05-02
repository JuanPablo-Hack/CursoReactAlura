import React from 'react'
import '../styles/ListaOpciones.css'

const ListaOpciones = () => {
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    return (
        <div className='lista-opciones'>
            <label htmlFor="">Equipos</label>
            <select name="" id="">
                {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones