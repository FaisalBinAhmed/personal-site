import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import projects from '../Assets/projects';
import { useMediaQuery } from 'react-responsive';

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

const Icon = styled.img`
	width: calc(50px + 0.4vw);
	/* height: auto; */
	float: left;
	margin: 0;
	/* margin-right: 20px;
	margin-bottom: 20px;
	display: block; */
`;
const Description = styled.p`
	font-size: calc(20px + 0.4vw);
	text-align: left;
`;
const Thumbnail = styled.img`
	width: 99.9%;
	/* margin-right: 2vmin; */
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columnString};
	justify-items: center;
	margin-top: 2vmin;
	row-gap: 2vmin;
	column-gap: 2vmin;
`;

const GridItem = styled.div`
	/* padding-top: ${(props) => (props.isPortrait ? '20px' : '0')};
	padding-right: ${(props) => (props.isPortrait ? '0' : '2vmin')}; */
`;
const ButtonContainer = styled.div`
	text-align: left;
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

const Projectview = (props) => {
	const { index } = useParams();

	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	const columnString = isPortrait ? '1fr' : '1fr 1fr';

	if (!projects[index]) return <GoBack>Bad Link</GoBack>;
	const { title, description, color, icon, thumbnail, link } = {
		...projects[index],
	};
	return (
		<Container>
			<NavLink exact to="/projects">
				<GoBack> ← Go back to Projects</GoBack>
			</NavLink>
			<Title color={color}>{title}</Title>
			{/* <Icon src={icon} /> */}
			<Description>{description}</Description>
			<ButtonContainer>
				<Button
					onClick={() => window.open(link, '_blank')}
					color={color}>
					View Project
				</Button>
			</ButtonContainer>
			<GridContainer columnString={columnString}>
				<GridItem isPortrait={isPortrait}>
					<Thumbnail src={thumbnail} />
				</GridItem>
				<GridItem>
					<Thumbnail src={thumbnail} />
				</GridItem>
			</GridContainer>
		</Container>
	);
};

export default Projectview;
