import React from "react";
import faisal from "../../Assets/faisal.jpeg";
import styles from "./About.module.scss";

const About = (props) => {
	return <img src={faisal} className={styles.profileImage} alt="profile pic" />;
};

export default About;
