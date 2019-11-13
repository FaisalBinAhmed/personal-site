import React from 'react';
import NavBar from './NavBar/NavBar';
import AboutMe from './AboutMe/AboutMe';
// import { getOuterBindingIdentifiers } from '@babel/types';
import styles from './AppContainer.module.css';
const AppContainer = (props) => {

    console.log(styles);

    let style=styles;
    let text = '';
    if (props.device==='desktop'){

        //desktop style
        text='desktop';
        style= styles.desktopView;
        

    }
    if(props.device==='mobile' && props.orient==='landscape'){
        //mobile style in landscape
        text='mobile landscape';
        style=styles.desktopView;
    }
    if(props.device==='mobile'&& props.orient==='portrait'){
        //mobile style in portrait
        text='mobile portrait';
        style=styles.mobileView;

    }

return(
    <div className={style}>

    <NavBar text={text} orient={props.orient}/>
    <AboutMe text={text} orient={props.orient}/>
    
    </div>
    
    );

}

export default AppContainer;