import React, { Component } from 'react'
import '../styles.global.scss'
import { theme, ThemeProvider, ColorModeProvider, LightMode } from "@chakra-ui/core";
import FormRegister from './components/form_register';
import NavbarLoggedOut from '../../views/navbars/navbar_logged_out'

class Register extends Component {

    render() {
        
        return(
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <LightMode>
                        <FormRegister />
                    </LightMode>
                </ColorModeProvider>
            </ThemeProvider>
        )
    }
}


export default Register