import React from 'react';
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
	background-color: ${(props) => props.color};
	&:hover {
		filter: brightness(1.5);
	}
`;

const Title = styled.h2`
	font-size: calc((0.4em + 0.5vmin) + (0.4em + 0.5vmax));
	margin-top: 0.2em;
	margin-bottom: 0;
	color: black;
	font-family: 'Roboto Mono';
	text-align: justify;
	padding: 10px;
`;

const Subheader = styled.div`
	flex-direction: row-reverse;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	align-content: stretch;
	margin-top: 0.9em;
	/* margin-bottom: 0.2em; */
	/* user-select: none; */
	/* background-color: ${(props) => '#e5' + props.color.substring(1)}; */
    background-color: white;
	/* opacity: 0.6; */
	padding: 10px;
`;
const Publisher = styled.div`
	color: black;
	font-family: 'Roboto Mono';
	font-size: calc((0.2em + 0.5vmin) + (0.2em + 0.5vmax));
`;
const Type = styled.div`
	color: black;
	font-family: 'Roboto Mono';
	font-size: calc((0.2em + 0.5vmin) + (0.2em + 0.5vmax));
`;

const PaperCard = ({ title, color, type, publisher, year }) => {
	return (
		<Container>
			<StyledCard color={color}>
				<Title>{title}</Title>
				<Subheader color={color}>
					<Publisher>
						{year} • {publisher}
					</Publisher>
					<Type>❝ {type}</Type>
				</Subheader>
			</StyledCard>
		</Container>
	);
};

export default PaperCard;
