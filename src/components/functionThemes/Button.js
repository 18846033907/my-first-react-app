import React, { Component } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

const Button = styled.button`
 color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

 font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
})


class ButtonApp extends Component {
    render() {
        console.log(this.props.theme)
        return (
                <div>
                    <Button>Default Theme</Button>
                    <ThemeProvider theme={invertTheme}>
                        <Button>Inverted Theme</Button>
                    </ThemeProvider>
                </div>
        )
    }
}

export default withTheme(ButtonApp);