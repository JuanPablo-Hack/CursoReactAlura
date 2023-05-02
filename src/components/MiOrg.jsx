import '../styles/MiOrg.css'
import addboton from '../img/add.png'
const MiOrg = (props) => {
    return (
        <section className='orgSection'>
            <h3 className='title'>Mi organización</h3>
            <img className='orgFormImg' src={addboton} alt="Boton de formulario" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg
