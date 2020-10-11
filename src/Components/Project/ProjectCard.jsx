import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	/* border-radius: 2px; */
	cursor: pointer;
	overflow: hidden;
	outline: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	/* border-bottom: 2px solid white; */
`;

const StyledCard = styled.div`
	opacity: 0.9;
	grid-row: 1;
	grid-column: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const Title = styled.h2`
	font-size: calc((0.4em + 0.5vmin) + (0.4em + 0.5vmax));
	margin-top: 0.2em;
	margin-bottom: 0;
	color: black;
	font-family: 'Roboto Mono';
	text-align: left;
`;

const Subtitle = styled.p`
	color: black;
	font-family: 'Roboto Mono';
	font-size: 1em;
	text-align: left;
`;

const Thumbnail = styled.img`
	width: 100%;
	grid-row: 1;
	grid-column: 1;
	/* user-select: none; */
`;
const Logo = styled.img`
	width: 2.5em;
	/* margin-right: 0.5vw; */
	padding: 0.5em;
`;

const Header = styled.div`
	flex-direction: row;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	align-content: stretch;
	background-color: ${(props) => props.color};
`;
const Subheader = styled.div`
	flex-direction: column;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	align-content: stretch;
	padding: 5px;
	margin-left: 0.5em;
	/* user-select: none; */
`;

const ProjectCard = ({ title, subtitle, color, icon, thumbnail, clicker }) => {
	const [show, setShow] = useState(false);
	return (
		<Container
			onClick={clicker}
			onTouchStart={() => setShow(true)}
			onTouchEnd={() => setShow(false)}
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			<Thumbnail src={thumbnail} />
			<StyledCard>
				<Header color={color}>
					<Subheader>
						<Title>{title}</Title>
						{show && <Subtitle>{subtitle}</Subtitle>}
					</Subheader>
					<Logo src={icon} />
				</Header>
			</StyledCard>
		</Container>
	);
};

export default ProjectCard;
