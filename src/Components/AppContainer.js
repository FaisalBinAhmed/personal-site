import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom';
import styles from './AppContainer.module.scss';
import Buttons from './Common/Button';
import BadLink from './BadLink';
import useTheme from './Hooks/useTheming';

const AppContainer = (props) => {

const[theme, changeTheme] = useTheme();

    let style=styles;
    
    if (props.device==='desktop'){

        //desktop style
        
        style= styles.desktopView;
        

    }
    if(props.device==='mobile' && props.orient==='landscape'){
        //mobile style in landscape
        
        style=styles.desktopView;
    }
    if(props.device==='mobile'&& props.orient==='portrait'){
        //mobile style in portrait
        
        style=styles.mobileView;

    }

    let navstyles = {
        display: 'block',
        backgroundColor:  theme==='light'? '#F7F7F7': 'Black' ,
        color: '#c9d1d3',
        height: '100vh',
        
        
    };
    let menustyles = {

        marginTop: '20rem',
        marginRight: '2rem',
        marginLeft: '2rem',
    };
    const linkstyles = styles.navlinks;
    const activelinkstyles = styles.active;
    if(props.orient==='portrait'){
            navstyles.height='10vh';
            navstyles.width= '100vw';
            menustyles.marginLeft= null;
            menustyles.marginRight= null;
            menustyles.marginTop= null;

}


    

return(
    <HashRouter>
    <div className={style}>
        {/* Menubar on the left */}
        
        <div style={navstyles}>
            <button onClick={changeTheme}>change</button> 
            {/* actual menus */}
            <div style={menustyles}> 

                <NavLink className={linkstyles} activeClassName={activelinkstyles} exact to={'/'}>Home</NavLink>
                <NavLink className={linkstyles} activeClassName={activelinkstyles} exact to={'/about'}>About Me</NavLink>
                <hr/>
            </div>
        </div>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />

        <Route component={BadLink} />

    </Switch>

    </div>
    </HashRouter>
    
    );

}

export default AppContainer;