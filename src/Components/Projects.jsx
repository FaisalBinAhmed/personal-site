import React from 'react';
import { NavLink } from 'react-router-dom';
// import Typography from './Typography';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

import projects from '../Assets/projects';

import { useMediaQuery } from 'react-responsive';

const GoBack = styled.p`
	font-size: calc(18px + 0.4vw);
	text-align: left;
	padding-left: 2vmin;
`;
const PageTitle = styled.h1`
	font-size: calc(25px + 0.4vw);
	text-align: left;
	padding-left: 2vmin;
`;
const Container = styled.div`
	margin: 5vmin;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columnString};
	justify-items: center;
`;

const GridItem = styled.div`
	padding: 2vmin;
`;

const Projects = () => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	const isTablet = useMediaQuery({
		query: '(min-width: 768px) and (max-width: 1024px)',
	});

	const isTabletLandscape = useMediaQuery({
		query:
			'(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
	});
	const isPhoneLandscape = useMediaQuery({
		query: '(min-width: 481px) and (max-width: 961px)',
	});

	const columnString = isPortrait
		? isTablet
			? '1fr 1fr'
			: '1fr'
		: isPhoneLandscape
		? '1fr 1fr'
		: isTabletLandscape
		? '1fr 1fr'
		: '1fr 1fr 1fr';

	return (
		<Container>
			<NavLink exact to="/">
				<GoBack> ← Go back to Home</GoBack>
			</NavLink>
			<PageTitle> Projects</PageTitle>
			<GridContainer columnString={columnString}>
				{projects.map((project, index) => (
					<GridItem key={index}>
						<NavLink to={`/project/${project.title}/${index}`}>
							<ProjectCard
								title={project.title}
								subtitle={project.subtitle}
								color={project.color}
								thumbnail={project.thumbnail}
								icon={project.icon}
							/>
						</NavLink>
					</GridItem>
				))}
			</GridContainer>
		</Container>
	);
};
export default Projects;
