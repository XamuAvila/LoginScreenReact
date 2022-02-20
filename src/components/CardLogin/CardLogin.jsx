import React, { Component } from 'react';
import "./CardLogin.css";
import BtnPadrao from '../../utils/components/btns/BtnPadrao';

class CardLogin extends Component {
    render() {
        return (
            <div className='card-login'>
                <div className='login-label'>
                    <h1>Login</h1>
                </div>
                <label>Username</label>
                <div className='aria-input'>
                    <input type="text" name="login" id="login" placeholder='Login' />
                </div>
                <br />
                <label>Password</label>
                <div className='aria-input'>
                    <input type="password" name="password" id="password" placeholder='Senha' />
                </div>
                <br />
                <div className='forgot-password'><a href="" className='forgot-password-text'>Forgot Password?</a></div>
                <BtnPadrao btnNome={"LOGIN"} />
                <BtnPadrao btnNome={"REGISTER"} />
            </div >
        );
    }
}

export default CardLogin;
