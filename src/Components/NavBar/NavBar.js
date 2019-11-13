import React from 'react';
import Buttons from './Button';
import './NavBar.css';
const Navbar = (props) => {

    let styles = {
        display: 'block',
        backgroundColor:  '#42A5F5',
        // color: 'blue',
        height: '100vh',
        width: '',
    };

if(props.orient==='portrait'){
    styles.height='60vh';
    styles.width= '100vw';

}

    return (
        <div style={styles}>
                <h1>
                    This is Faisal Ahmed.
                </h1>
            <Buttons 
            
            title="About me"
            
            
            
            />
            </div>
    
    );


};

export default Navbar;