import '../styles/Login.css'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export function Register(){
    const navigate = useNavigate();

    const retornar = () =>{
        let path=`/`
        navigate(path)
    }
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUsuario(event) {
        setUsername(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }
    return (
        <>
            <div className='login'>
                <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Back" /></button>
                <img className='logoConTexto' src={logoTexto} alt="Aroma Gourmet" />
                <div className="loginContenedor">
                    <div id='loginInteractivo' className='loginTitulo'>
                        <h2>CUSTOMER REGISTRATION</h2>
                        <p></p>
                    </div>
                    <div className="inputLogin">
                        <label >Username</label>
                        <input onChange={handleChangeUsuario} value={username} type="text" placeholder='Enter your username'/>
                    </div>
                    <div className="inputLogin">
                        <label >Address </label>
                        <input type="text" placeholder='Enter your address'/>
                    </div>
                    <div className="inputLogin">
                    <div className="inputLogin">
                        <label >Email </label>
                        <input  type="email" placeholder='Enter your email'/>
                    </div>
                        <label >Password</label>
                        <input onChange={handleChangePassword} value={password} type="password" placeholder='Enter your password'/>
                    </div>
                    <button>REGISTER</button>
                    <p></p>
                    <span>¿Already registered?  <Link to="/login">Login here</Link></span>
                    
                </div>
            </div>
        </>
    )
}