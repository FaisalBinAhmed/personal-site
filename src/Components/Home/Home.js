import React from 'react';
import './Home.module.scss';
import Typography from '../Typography';
import github from '../../Assets/github.png';
import twitter from '../../Assets/twitter.png';
import linkedin from '../../Assets/linkedin.png';
import medium from '../../Assets/medium.png';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
const mainstyles = {
	// marginLeft: '5%',
	// marginRight: '5%',
	marginTop: '3%',
};
const socialStyles = styles.social;

function AboutMe(props) {
	return (
		<div style={mainstyles}>
			<Typography fs={'3rem'} ff={'monospace'} ta={'left'}>
				Hi, my name is Faisal. 👋
			</Typography>
			<Typography fs={'1.5rem'} ta={'justify'}>
				Welcome to my personal website.
			</Typography>
			<Typography fs={'1.5rem'} ta={'justify'}>
				I'm currently studying Master's of Informatics at Technical
				University of Munich. I'm also working part-time as a front-end
				developer at Joyn GmbH. If you want to know more about me, head
				over to my <Link to="/about">"About Me"</Link> page.
			</Typography>
			{/* <Typography fs={"1.5rem"} ta={"justify"}>
				Don't forget to follow me on social sites:
			</Typography>
			<div className={socialStyles}>
				<a href="https://twitter.com/FaisalBAhmed" target="_blank">
					<img src={twitter} title="Twitter" />
				</a>
				<a href="https://medium.com/@Faisalbin" target="_blank">
					<img src={medium} title="Medium" />
				</a>
				<a href="https://github.com/FaisalBinAhmed" target="_blank">
					<img src={github} title="Github" />
				</a>
				<a href="https://linkedin.com/in/faisalbin/" target="_blank">
					<img src={linkedin} title="LinkedIn" />
				</a>
			</div> */}
		</div>
	);
}

export default AboutMe;
