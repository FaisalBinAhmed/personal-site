import React from 'react';
import styled from 'styled-components';
// import faisal from '../Assets/faisal.jpeg';
// import github from '../Assets/github.png';
// import twitter from '../Assets/twitter.png';
// import linkedin from '../Assets/linkedin.png';
// import medium from '../Assets/medium.png';

import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

// const StyledImage = styled.img`
// 	width: calc(50px + 0.4vw);
// 	height: auto;
// 	border-radius: 50%;
// 	display: block;
// 	margin: auto;
// 	margin-top: calc(25px + 0.4vw);
// 	display: inline-block;
// `;

const BigText = styled.h1`
	font-family: 'Bebas Neue';
	font-weight: bold;
	/* font-size: 5rem !important; */
	text-align: right;
	margin-top: 0;
	margin-bottom: 0;
`;

const TextContainer = styled.div`
	margin-right: ${(props) => (props.isPortrait ? '0' : 'calc(20px + 0.4vw)')};
	position: ${(props) => (props.isPortrait ? 'relative' : 'sticky')};
	top: 50%;
	transform: translateY(-45%);
	h1 {
		display: ${(props) => (props.isPortrait ? 'inline-block' : 'block')};
		padding: 3px;
		font-size: ${(props) =>
			props.isPortrait ? 'calc(20px + 3vw)' : 'calc(4rem + 0.4vmin)'};
	}
`;

const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: #fff !important;
	/* font-size: 10rem; */

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const SideBarContent = (props) => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	return (
		<React.Fragment>
			<TextContainer isPortrait={isPortrait}>
				<StyledLink to="/">
					<BigText>THIS</BigText>
				</StyledLink>

				<StyledLink to="/">
					<BigText> IS</BigText>
				</StyledLink>
				<StyledLink to="/">
					<BigText> FAISAL</BigText>
				</StyledLink>
				<StyledLink to="/">
					<BigText> AHMED</BigText>
				</StyledLink>
			</TextContainer>
		</React.Fragment>
	);
};

export default SideBarContent;
