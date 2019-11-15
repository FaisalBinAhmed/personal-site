import React from 'react';
import faisal from '../../Assets/faisal.jpeg';
import styles from './Profile.module.scss'

const Profile = (props) => {
    // <h1>Welcome to my website</h1>
    return(<img 
        src={faisal} 
        className={styles.profileImage}
        alt='profile pic'
        />
        
        
        
        
        
        );
}

export default Profile;