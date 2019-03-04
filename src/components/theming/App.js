
import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;


Button.defaultProps = {
    theme: {
        main: "palevioletred"
    }
}

// Define what props.theme will look like
const theme = {
    main: "mediumseagreen"
};


export default class App extends Component{
    render(){
        return(
            <div>
                <Button>Normal</Button>

                <ThemeProvider theme={theme}>
                    <Button>Themed</Button>
                </ThemeProvider>
            </div>
        )
    }
}