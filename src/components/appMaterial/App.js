// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button'; 
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/styles';
// import {
//     styles} 
//     from './AppStyle';




// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state={

//         }
//     }
//     render(){
//         const {classes}=this.props;
//         return (
//             <div>
//                 <Button className={classes.root}>Button</Button>
//             </div>
//         )
//     }
// }


// App.propTypes={
//     classes:PropTypes.object.isRequired,
// }
// export default  withStyles(styles)(App);


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
};

function HigherOrderComponent(props) {
    const { classes } = props;
    return <Button className={classes.root}>Higher-order component</Button>;
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);