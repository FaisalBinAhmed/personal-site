import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	height: calc(100px + 2vh);
	background-color: ${(props) => props.color};
	/* border-radius: 5px; */
	cursor: pointer;
	overflow: hidden;
	user-select: none;
	border-bottom: 2px solid #f7f7f7;
	&:hover {
		filter: brightness(1.5);
		/* transform: scale(0.98); */
		/* filter: grayscale(100%); */

		/* :after {
			content: 'Learn more ➜';
			color: black;
			position: absolute;
			right: 1rem;
			bottom: 5px;
		} */
	}
`;

const Title = styled.h1`
	font-size: 1.7em;
	margin-top: 0.5em;
	/* margin-bottom: .5em; */
	margin-left: 0.5em;
	color: black;
	text-align: left;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 4fr 1fr;
	/* margin-right: 0.5rem; */
	margin-left: 0.8em;
`;

const IconContainer = styled.div`
	/* text-align: center; */
	top: 50%;
	transform: translateY(-50%);
`;
const StyledImage = styled.img`
	width: 2.5em;
	height: 2.5em;
	margin-right: 0.3em;
`;

const Description = styled.span`
	color: black;
	font-size: 1.25em;
	text-align: left;
	max-height: 100px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
`;

const MiniCard = ({ title, color, desc, clicker, icon }) => {
	return (
		<StyledCard onClick={clicker} color={color}>
			<Title>{title}</Title>
			<GridContainer>
				<Description>{desc}</Description>
				<IconContainer>
					<StyledImage src={icon} />
				</IconContainer>
			</GridContainer>
		</StyledCard>
	);
};

export default MiniCard;
