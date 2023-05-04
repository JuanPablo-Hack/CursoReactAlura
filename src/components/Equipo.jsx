import React from 'react'
import '../styles/Equipo.css';
import { Colaborador } from './Colaborador';
export const Equipo = (props) => {
    const { colorSecundario, colorPrimario, titulo } = props.datos
    const { colaboradores } = props
    const obj = { backgroundColor: colorSecundario }
    const obj2 = { borderColor: colorPrimario }
    return (
        <>
            {
                colaboradores.length > 0 &&
                <section className='equipo' style={obj}>
                    <h3 style={obj2}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador, index) =>
                                <Colaborador
                                    datos={colaborador}
                                    key={index}
                                    colorPrimario={colorPrimario}
                                />)
                        }
                    </div>
                </section>
            }
        </>
    )
}
