import React, { Component } from 'react';
import "./CardLogin.css";
import BtnPadrao from '../../utils/components/btns/BtnPadrao';
import cogoToast from 'cogo-toast';
class CardLogin extends Component {
    constructor(props) {
        super(props);
        this.api = props.api;
        this._login = this._login.bind(this);
        this._createUser = this._createUser.bind(this);
    }
    async _login() {

        var login = document.querySelector("#login").value;
        var password = document.querySelector("#password").value;
        await this.api.post("/user/login", {
            email: login,
            password: password
        }).then((result) => {
            cogoToast.success(result.data);
        }).catch((err) => {
            cogoToast.error(err.response.data);
        })
    }
    async _createUser() {

        var login = document.querySelector("#login").value;
        var password = document.querySelector("#password").value;
        await this.api.post("/user/register", {
            email: login,
            password: password
        }).then((result) => {
            cogoToast.success(result.data);
        }).catch((err) => {
            cogoToast.error(err.response.data);
        })
    }
    render() {
        return (
            <div id="form-cadastro" className='card-login'>
                <div className='login-label'>
                    <h1>Login</h1>
                </div>
                <label>Email</label>
                <div className='aria-input'>
                    <input type="text" name="login" id="login" placeholder='Login' />
                </div>
                <br />
                <label>Password</label>
                <div className='aria-input'>
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <br />
                <div className='forgot-password'><a className='forgot-password-text'>Forgot Password?</a></div>
                <BtnPadrao fnct={this._login} btnNome={"LOGIN"} />
                <BtnPadrao fnct={this._createUser} onClick={() => console.log('teste')} btnNome={"REGISTER"} />
            </div >
        );
    }
}

export default CardLogin;
