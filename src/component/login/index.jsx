import Fundologin from '../../assets/img/fundo-login.svg'
import './index.scss'

export default function Login() {
    return (
       
            <div className="login-container">


                <div className="login-form">

                    <h1 className='Login'>Faça seu login.</h1>


                    <div className="login-inputs">

                        <p className='email-txt'>Email</p>

                        <input className="email-input" type="email" name="" id="" />

                        <div className="password">

                        <p className='password-txt'>Senha</p>

                        <input className="password-input" type="password" name="" id="" />

                        <div className="mostrar">
                            <button className='Mostrar-senha'>olho</button>
                        </div>

                        </div>
                   

                    </div>


                    <button className="login-button">Entrar</button>

                </div>

                <div className="image-container">
                    <img src={Fundologin} alt="" />
                </div>
            </div>

    );
}
