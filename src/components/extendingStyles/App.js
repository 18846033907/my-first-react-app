import React,{Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button) `
  color: tomato;
  border-color: tomato;
`;

export default class App extends Component{
    render(){
        return(
            <div>
                <Button>Normal Button</Button>
                <TomatoButton>Tomato Button</TomatoButton>
            </div>
        )
    }
}