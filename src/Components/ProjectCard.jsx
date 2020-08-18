import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	/* max-width: 17em; */
	/* height: 40vh; */
	/* max-width: 60%; */
	/* height: calc(400px + 2vh); */
	background-color: ${(props) => props.color};
	border-radius: 2px;
	cursor: pointer;
	overflow: hidden;
	/* max-width: 40vw; */
`;

const Title = styled.h1`
	/* font-size: calc(1vw + 1vh + 0.5vmin); */
	/* font-size: 20px; */
	font-size: 3vmax;
	margin-top: 0.2em;
	margin-bottom: 0;
	/* margin-left: 0.5em; */
	color: black;
	font-family: 'Courier';
	font-weight: 150;
	text-align: left;
`;

const Divider = styled.hr`
	background-color: black;
	height: 2px;
	border: 0;
	margin-left: 1vw;
	margin-right: 1vw;
`;

const Subtitle = styled.p`
	color: black;
	font-family: 'Courier';
	font-size: 1em;
	text-align: left;
	/* margin-left: 0.5em; */
	/* margin-right: 1vw; */
	/* padding-top: 1vw; */
	/* white-space: nowrap; */
`;

const Thumbnail = styled.img`
	width: 100%;
	/* max-height: 20rem; */
	object-fit: fill;
`;
const Logo = styled.img`
	width: 3em;
	/* height: 3rem; */
	/* margin-right: 1vw;
	margin-top: 0.5vw;
	margin-left: 0.5vw; */
	padding: 5px;
`;

const Header = styled.div`
	flex-direction: row;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	align-content: stretch;
	/* min-height: 2.5rem; */
	/* padding-top: 5px; */
	/* margin-bottom: 1rem; */
	/* min-width: 90%; */
`;
const Subheader = styled.div`
	flex-direction: column;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	align-content: stretch;
	padding: 5px;
	margin-left: 0.5em;
	/* max-width: 80%;
	overflow: hidden; */
`;
const ProjectCard = (props) => {
	const {
		title,
		subtitle,
		color,
		description,
		icon,
		thumbnail,
		link,
		clicker,
	} = props;

	return (
		<React.Fragment>
			<StyledCard onClick={clicker} color={color}>
				<Thumbnail src={thumbnail} />
				<Header>
					<Subheader>
						<Title>{title}</Title>
						<Subtitle>{subtitle}</Subtitle>
					</Subheader>
					<Logo src={icon} />
				</Header>
				{/* <Description>{subtitle}</Description> */}
			</StyledCard>
		</React.Fragment>
	);
};

export default ProjectCard;
