import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import MiOrg from './components/MiOrg'
import { useState } from 'react'

const App = () => {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }
  return (
    <>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </>
  )
}

export default App
