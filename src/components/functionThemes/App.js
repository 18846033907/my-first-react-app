import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ButtonApp  from './Button';

const theme = {
    fg: "palevioletred",
    bg: "white"
};


export default class App extends Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <div>            
                    <ButtonApp/>
                </div>
            </ThemeProvider>
        )
    }
}