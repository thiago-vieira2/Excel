import { useState } from 'react';
import Fundologin from '../../assets/img/fundo-login.svg'
import './index.scss'
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

export default function Login() {

    const [mostrar, setMostrar] = useState(true)

    function MostrarSenha () {
        setMostrar((prevState) => !prevState)
    }


    return (
       
            <div className="login-container">


                <div className="login-form">

                    <h1 className='Login'>Faça seu login.</h1>


                    <div className="login-inputs">

                        <p className='email-txt'>Email</p>

                        <input className="email-input" type="email" name="" id="" />

                        <div className="password">

                             <p className='password-txt'>Senha</p>

                             <input className="password-input" type={mostrar ?  "password": 'text'} name="" id="" />

                            
                             <button className='Mostrar-senha' onClick={MostrarSenha}>{mostrar? "Mostrar Senha" : "Esconder Senha"}</button>
                        

                        </div>
                   

                    </div>


                    <button className="login-button" >Entrar</button>

                </div>

                <div className="image-container">
                    <img src={Fundologin} alt="" />
                </div>
            </div>

    );
}
