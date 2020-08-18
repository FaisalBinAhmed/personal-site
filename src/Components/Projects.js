import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from './Typography';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

import diblocert from '../Assets/diblocert.png';
import diblocertLogo from '../Assets/diblo_logo.png';
import pryntableLogo from '../Assets/pryntable_logo.png';

import { useMediaQuery } from 'react-responsive';

const asset = [
	{
		title: 'DiBloCert 2',
		subtitle:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		description:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		color: '#c9b6e4',
		icon: diblocertLogo,
		thumbnail: diblocert,
		images: [],
		link: '',
	},
	{
		title: 'Pryntable',
		subtitle:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		description:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		color: '#a2de96',
		icon: pryntableLogo,
		thumbnail: diblocert,
		images: [],
		link: '',
	},
	{
		title: 'This Site',
		subtitle:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		description:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		color: '#a2de96',
		icon: pryntableLogo,
		thumbnail: diblocert,
		images: [],
		link: '',
	},
	{
		title: 'MetroAppSauce',
		subtitle:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		description:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		color: '#a2de96',
		icon: pryntableLogo,
		thumbnail: diblocert,
		images: [],
		link: '',
	},
];

const Container = styled.div`
	margin: 5vmin;
	/* width: 100%; */
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columnString};
	/* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
	/* padding: calc(5px + 0.8vmin); */
	justify-items: center;
`;

const GridItem = styled.div`
	padding: 2vmin;
	/* min-width: 100%; */
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
		: '1fr 1fr';

	return (
		<Container>
			<NavLink exact to="/">
				<Typography fs={'1.5rem'} ta={'left'}>
					{' '}
					← Go back to Home
				</Typography>
			</NavLink>
			<GridContainer columnString={columnString}>
				{asset.map((project, index) => (
					<GridItem key={index}>
						<ProjectCard
							title={project.title}
							subtitle={project.subtitle}
							color={project.color}
							thumbnail={project.thumbnail}
							icon={project.icon}
						/>
					</GridItem>
				))}
			</GridContainer>
		</Container>
	);
};
export default Projects;
