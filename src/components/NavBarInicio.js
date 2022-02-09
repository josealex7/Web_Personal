import React, {useState} from 'react';
import { Typography } from '@mui/material'
import '../styles/navbarinicio.css'
import { Link } from 'react-router-dom';

const NavBarInicio = () => {

    const [isMobile, setIsMobile] = useState(false);

  return (
        <nav className='NavbarPrincipal'>
            <ul className={isMobile ? 'nav-links-mobile':'navLinks'}
            onClick={()=>setIsMobile(false)}
            >
                <a className='Links' href="#miperfil">
                    <label>
                        <Typography variant='h6' sx={{mr:2, ml:2}}>Perfil</Typography>
                    </label>
                </a>
                <a className='Links' href="#miskill">
                    <label>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Habilidades</Typography>
                    </label>
                </a>
                <a className='Links' href="#misCertificaciones">
                    <label>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Certificaciones</Typography>
                    </label>
                </a>
                <a className='Links' href="#misProyectos">
                    <label>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Proyectos</Typography>
                    </label>
                </a>
                <a className='Links' href="#contactame">
                    <label>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Contactame</Typography>
                    </label>
                </a>
                <a className='Links' href="https://res.cloudinary.com/dtdopreaf/image/upload/v1644385288/Desarrollador_Front-End_HV_Alexander_l6xo9c.pdf" target="_blank">
                    <label>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Mi CV</Typography>
                    </label>
                </a>
                
            </ul>
            <button className={isMobile?'mobile-menu-icon mobile-fixed':'mobile-menu-icon'}
                onClick={()=>setIsMobile(!isMobile)}
                >
                    {isMobile ? <img src="https://img.icons8.com/material-rounded/40/FFFFFF/close-window.png"/>:<img src="https://img.icons8.com/ios-filled/40/FFFFFF/menu--v1.png"/>}
                </button>
        </nav>
  );
};

export default NavBarInicio;
