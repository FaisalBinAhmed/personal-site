import React from 'react';
import Buttons from '../Common/Button';
import Profile from '../Profile/Profile';
import './NavBar.scss';
const Navbar = (props) => {

    let styles = {
        display: 'block',
        backgroundColor:  '#F7F7F7',
        color: '#c9d1d3',
        height: '100vh',
        
        
    };

if(props.orient==='portrait'){
    styles.height='60vh';
    styles.width= '100vw';

}

    return (
        <div style={styles}>
                
                <div className='menu'>
                        <Buttons 
                        title="Home"/>
                        <Buttons 
                        title="About Me"/>
                        <hr/>
        
                </div>
        </div>
    
    );


};

export default Navbar;