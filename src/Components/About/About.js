import React from 'react';
import faisal from '../../Assets/faisal.jpeg';
import styles from './About.module.scss'

const About = (props) => {
    // <h1>Welcome to my website</h1>
    return(<img 
        src={faisal} 
        className={styles.profileImage}
        alt='profile pic'
        />
        
        
        
        
        
        );
}

export default About;