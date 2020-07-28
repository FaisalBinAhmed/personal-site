import React from 'react';
import styled from 'styled-components';
import faisal from '../Assets/faisal.jpeg';
import github from '../Assets/github.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import medium from '../Assets/medium.png';

import { useMediaQuery } from 'react-responsive';

const StyledImage = styled.img`
	width: calc(50px + 0.4vw);
	height: auto;
	border-radius: 50%;
	display: block;
	margin: auto;
	margin-top: calc(25px + 0.4vw);
	display: inline-block;
`;

// const Social = styled.div`
// 	margin-top: calc(50px + 0.4vh);
// 	img {
// 		max-width: 3.5rem;
// 		margin-right: 12px;
// 	}
// `;

// const Resume = styled.button`
// 	background-color: transparent;
// 	color: #fff;
// 	font-size: 30px;
// 	margin-top: 30px;
// 	font-family: 'Courier';
// `;
const BigText = styled.h1`
	font-family: 'Bebas Neue';
	font-weight: bold;
	font-size: 80px;
	text-align: right;
	margin-top: 0;
	margin-bottom: 0;
`;

const TextContainer = styled.div`
	/* display: ${(props) => (props.isPortrait ? 'inline-block' : 'inherit')}; */
	margin-right: ${(props) => (props.isPortrait ? '0' : 'calc(20px + 0.4vw)')};
    /* margin-top: ${(props) =>
		props.isPortrait ? '10px' : 'calc(300px + 0.4vw)'}; */
    position: relative;
    top: 50%;
    transform: translateY(-50%);
	h1 {
		display: ${(props) => (props.isPortrait ? 'inline-block' : 'inherit')};
		padding: 3px;
		font-size: ${(props) =>
			props.isPortrait ? 'calc(20px + 3vw)' : 'calc(80px + 0.4vmin)'};
	}
`;

const SideBarContent = (props) => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	return (
		<React.Fragment>
			{/* {isPortrait && <StyledImage src={faisal} alt="profile pic" />} */}
			<TextContainer isPortrait={isPortrait}>
				<BigText>THIS</BigText>
				<BigText> IS</BigText>
				<BigText> FAISAL</BigText>
				<BigText> AHMED</BigText>
			</TextContainer>

			{/* <Resume>Resume</Resume> */}
		</React.Fragment>
	);
};

export default SideBarContent;
