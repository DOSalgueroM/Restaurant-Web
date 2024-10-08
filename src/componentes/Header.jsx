import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoText from '../assets/logoText.svg';
import logo from '../assets/logo.svg';
import carrito from '../assets/menu/carrito.svg';
import iniciarSesion from '../assets/menu/iniciarSesion.svg';
import salirS from '../assets/menu/salirSesion.svg';
import logoHam from '../assets/menuHam.svg';

// interface HeaderProps {
//     setLoggedIn: (loggedIn: boolean) => void;
//     ruta: string;
//     image: string;
//     nombre: string;
//     countProducts: number;
//     loggedIn: boolean;
// }

export function Header(props) {
    // Cambia el estado de loggedIn a false si se hace clic.
    const onCerrarSesion = () => {
        props.setLoggedIn(false);
    };

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="header">
            <a className="logo" href="/"><img src={logo} alt="Logo Aroma Gourmet" /></a>
            <a href="#root"><img className='logoTexto' src={logoText} alt="Texto" /></a>
            <div className="menu">
                <img
                    className={`ham${toggleMenu ? ' hamAnim' : ''}`}
                    src={logoHam}
                    alt="MenuHamburguesa"
                    onClick={() => setToggleMenu((open) => !open)}
                />
                <ul className={`menuPagina${toggleMenu ? ' mostrarMenu' : ''}`}>
                    <Link to={props.ruta}>
                        <img src={props.image} alt={props.nombre} />
                        <li>{props.nombre}</li>
                    </Link>
                    <Link to="/carrito">
                        <img src={carrito} alt="Carrito" />
                        <span className='cantidadProductos'>{props.countProducts}</span>
                        <li>Card</li>
                    </Link>
                    {!props.loggedIn ? (
                        <Link to="/login">
                            <img src={iniciarSesion} alt="Iniciar Sesión" />
                            <li>Login</li>
                        </Link>
                    ) : (
                        <a style={{ cursor: 'pointer' }} onClick={onCerrarSesion}>
                            <img src={salirS} alt="Cerrar Sesión" />
                            <li>Log out</li>
                        </a>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Header;

// import '../styles/Header.css'
// import logoText from '../assets/logoText.svg'
// import logo from '../assets/logo.svg'
// import carrito from '../assets/menu/carrito.svg'
// import iniciarSesion from '../assets/menu/iniciarSesion.svg'
// import salirS from '../assets/menu/salirSesion.svg'
// import logoHam from '../assets/menuHam.svg'

// import {Link} from 'react-router-dom'
// import { useState } from 'react'


// export function Header(props){
//     //Change the state of loggedIn to false, if is clicked.
//     const onCerrarSesion = () =>{
//         props.setLoggedIn(false)
//     }

//     const [toggleMenu, setToggleMenu] = useState(false)

//     return (
//         <div className="header">
//             <a className="logo" href='/'><img src={logo} alt="Logo Aroma Gourmet"/></a>
//             <a href="#root"><img className='logoTexto' src={logoText} alt="Texto" /></a>
//             <div className="menu">
//                 <img className={`ham${toggleMenu ? ' hamAnim':''}`} src={logoHam} alt="MenuHamburguesa" onClick={() => setToggleMenu((open)=> !open)}/>
//                 <ul className={`menuPagina${toggleMenu ? ' mostrarMenu':''}`}>
//                     <Link to={props.ruta}><img src={props.image}/><li>{props.nombre}</li></Link>
//                     <Link to="/carrito"><img src={carrito}/><span className='cantidadProductos'>{props.countProducts}</span><li>Carrito</li></Link>
//                     {!props.loggedIn ? <Link to="/login"><img src={iniciarSesion}/><li>Iniciar<br />Sesion</li></Link> 
//                     : <a style={{cursor: 'pointer'}} onClick={onCerrarSesion}><img src={salirS} alt="Cerrar Sesion" /><li>Cerrar<br />Sesion</li></a>}
//                 </ul>
                
//             </div>
//         </div>
//     )
// }
