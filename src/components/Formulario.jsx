import React from 'react'
import '../styles/Formulario.css'
import CampoText from './CampoText'
import ListaOpciones from './ListaOpciones'
import Boton from './Boton'

const Formulario = () => {
    const mandarDatos = (e) => {
        e.preventDefault()

    }
    return (
        <section className='formulario'>
            <form onSubmit={mandarDatos}>
                <h2>Rellena el formulario con tu información</h2>
                <CampoText titulo="Nombre" placeholder="Ingresar nombre" required />
                <CampoText titulo="Puesto" placeholder="Ingresar puesto" required />
                <CampoText titulo="Foto" placeholder="Ingresa enlace de foto" required />
                <ListaOpciones />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}

export default Formulario
