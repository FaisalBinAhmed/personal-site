import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import projects from '../Assets/projects';

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
`;
const Projectview = (props) => {
	const { index } = useParams();

	if (!projects[index]) return <GoBack>Bad Link</GoBack>;
	const { title, description, color, icon, thumbnail, link } = {
		...projects[index],
	};
	return (
		<Container>
			<NavLink exact to="/projects">
				<GoBack> ← Go back to Projects</GoBack>
			</NavLink>
			<Title>{title}</Title>
		</Container>
	);
};

export default Projectview;
