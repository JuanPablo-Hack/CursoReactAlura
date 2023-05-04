import React, { useState } from 'react'
import '../styles/Formulario.css'
import CampoText from './CampoText'
import ListaOpciones from './ListaOpciones'
import Boton from './Boton'

const Formulario = (props) => {
    const mandarDatos = (e) => {
        e.preventDefault()
        let datos = { nombre, puesto, foto, equipo }
        props.registrarColaborador(datos)
    }
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    return (
        <section className='formulario'>
            <form onSubmit={mandarDatos}>
                <h2>Rellena el formulario con tu información</h2>
                <CampoText
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <CampoText
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <CampoText
                    titulo="Foto"
                    placeholder="Ingresa enlace de foto"
                    required valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}

export default Formulario
