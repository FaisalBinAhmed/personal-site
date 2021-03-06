import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

const BigText = styled.h1`
	font-family: 'Bebas Neue';
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
			props.isPortrait ? 'calc(20px + 3vw)' : 'calc(4vw + 0.4vmin)'};
	}
	:hover {
		h1 {
			/* color: #222831; */
			text-shadow: 2px 2px #fbd46d;
			/* border-bottom: 2px solid #f7f7f7; */
		}
	}
`;

const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: #f7f7f7 !important;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const SideBarContent = () => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	return (
		<TextContainer isPortrait={isPortrait}>
			<StyledLink to="/">
				<BigText> FAISAL</BigText>
			</StyledLink>
			<StyledLink to="/">
				<BigText> AHMED</BigText>
			</StyledLink>
		</TextContainer>
	);
};

export default SideBarContent;
