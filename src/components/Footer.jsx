import React from 'react'
import '../styles/Footer.css';
import footer from '../img/footer.png';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png'
import Logo from '../img/Logo.png'


export const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: `url(${footer})` }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src={facebook} alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={twitter} alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={instagram} alt='instagram' />
            </a>
        </div>
        <img src={Logo} alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}
