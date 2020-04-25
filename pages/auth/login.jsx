import React, { Component } from 'react'
import '../styles.global.scss'
import Axios from 'axios'
import { theme, ThemeProvider, ColorModeProvider, LightMode } from "@chakra-ui/core";
import FormLogin from './components/form_login';
import _firebaseLoginWithEmail, { _firebaseLoginWithGoogle } from '../../helpers/__firebase_login';

class Login extends Component {

    _login = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        _firebaseLoginWithEmail(email, password)
            .then(res => {
                (async () => localStorage.setItem('idToken', res.credential))()
                    .then(() => {
                        Axios.get('/api/auth/pass/login', { headers: {
                            "Authorization": res.credential
                        }})
                        .then(data => {
                            switch(data.data.class) {
                                case "001":
                                    document.location.replace('http://localhost:3000/dashboard?token=' + res.credential)
                                    break;
                                case "002":
                                    document.location.replace('http://localhost:3000/app?token=' + res.credential)
                                    break;
                                default:
                                    break;
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    })
            })
            .catch(err=> {
                console.log(err)
            })
        
    }

    _loginWithGoogle = () => {
        _firebaseLoginWithGoogle()
            .then(res => {
                (async () => localStorage.setItem('idToken', res.credential))()
                    .then(() => {
                        Axios.get('/api/auth/pass/login', { headers: {
                            "Authorization": res.credential
                        }})
                        .then(data => {
                            switch(data.data.class) {
                                case "001":
                                    document.location.replace('http://localhost:3000/dashboard?token=' + res.credential)
                                    break;
                                case "002":
                                    document.location.replace('http://localhost:3000/app?token=' + res.credential)
                                    break;
                                default:
                                    break;
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    })
            })
            .catch(err=> {
                console.log(err)
            })
    }

    componentDidMount () {
 
    }

    render() {
        return(
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <LightMode>
                        <FormLogin _login={this._login} _googleLogin={this._loginWithGoogle} />
                    </LightMode>
                </ColorModeProvider>
            </ThemeProvider>
        )
    }
}


export default Login