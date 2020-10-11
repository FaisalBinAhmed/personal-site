import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import papers from '../Assets/papers';

const GoBack = styled.p`
	font-size: calc(18px + 0.4vw);
	text-align: left;
	/* padding-left: 2vmin; */
`;
const Container = styled.div`
	margin: 5vmin;
	margin-left: 7vmin;
`;

const Title = styled.p`
	font-size: calc(35px + 0.4vw);
	text-align: left;
	color: ${(props) => props.color};
	text-shadow: 0.5px 0.5px black;
`;
const Subtitle = styled.p`
	font-size: calc(12px + 0.4vw);
	text-align: left;
`;

const Description = styled.p`
	font-size: calc(20px + 0.4vw);
	text-align: left;
`;

const ButtonContainer = styled.div`
	text-align: left;
	margin-top: 5vh;
`;
const Button = styled.button`
	background-color: ${(props) => props.color};
	font-family: 'Roboto Mono';
	border: none;
	border-radius: 0;
	font-size: calc(15px + 0.4vw);
	padding: 10px;
	margin-bottom: 1vmin;
`;

const PaperView = () => {
	const { index } = useParams();
	if (!papers[index]) return <GoBack>Bad Link</GoBack>;
	const { title, color, type, abstract, publisher, year, link } = {
		...papers[index],
	};
	return (
		<Container>
			<NavLink exact to="/papers">
				<GoBack> ← Go back to Papers</GoBack>
			</NavLink>
			<Title color={color}>{title}</Title>
			<Subtitle>
				{' '}
				{publisher} • {type} • {year}
			</Subtitle>
			<Description>{abstract}</Description>
			<ButtonContainer>
				<Button
					onClick={() => window.open(link, '_blank')}
					color={color}>
					View Paper
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default PaperView;
