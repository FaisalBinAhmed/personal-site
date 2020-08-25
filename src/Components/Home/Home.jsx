import React, { useEffect, useState } from 'react';
// import Typography from '../Typography';
import github from '../../Assets/github.png';
import twitter from '../../Assets/twitter.png';
import linkedin from '../../Assets/linkedin.png';
import medium from '../../Assets/medium.png';
// import faisal from '../../Assets/faisal.jpeg';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Home = styled.div`
	margin-top: ${(props) => (props.isPortrait ? '0px' : '10vh')};
	margin-bottom: ${(props) => (props.isPortrait ? '0px' : '15vh')};
`;
const Social = styled.div`
	margin-top: calc(5px + 0.4vh);
	float: left;
	img {
		filter: grayscale(100%);
		max-width: 2.5rem;
		margin-right: 1em;
		&:hover {
			filter: none;
		}
	}
`;

const Typography = styled.p`
	font-size: calc(15px + 0.4vmax);
	text-align: left;
	/* line-height: 1.3; */
	user-select: none;
`;

// const fontbulger = keyframes`
//   0%, 100% {
//     font-size: calc(15px + 0.4vmax);
//   }
//   50% {
//     font-size: calc(35px + 0.4vmax);
// }`;
const colorChanger = keyframes` 
  0%, 100% {
    /* font-size: calc(15px + 0.4vmax); */
  }
  20% {
    
		content: 'hey';
}`;

const Header = styled(Typography)`
	/* animation: ${colorChanger} 3s 1; */
`;

function AboutMe(props) {
	const { isPortrait } = props;
	const [index, setIndex] = useState(0);
	const emojis = ['👋', '👋🏿', '👋🏾', '👋🏽', '👋🏼', '👋🏻', '👋'];

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		if (index < 6) {
	// 			let i = index + 1;
	// 			setIndex(i);
	// 		}
	// 	}, 250);
	// 	console.log(index);
	// }, [index]);

	return (
		<Home isPortrait={isPortrait}>
			{/* {isPortrait && <StyledImage src={faisal} alt="profile pic" />} */}
			{/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
			<Header>Hello, there! {emojis[index]}</Header>
			<Typography>Welcome to my personal website.</Typography>
			<Typography>
				I'm currently studying Master's of Informatics at Technical
				University of Munich. I'm also working part-time as a front-end
				developer at Joyn GmbH. If you want to know more about me, head
				over to my <Link to="/about">"About Me"</Link> page.
			</Typography>
			<Typography>Don't forget to follow me on social sites:</Typography>
			<Social>
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
			</Social>
		</Home>
	);
}

export default AboutMe;
