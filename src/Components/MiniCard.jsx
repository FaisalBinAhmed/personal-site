import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	height: calc(100px + 2vh);
	background-color: ${(props) => props.color};
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	&:hover {
		filter: brightness(1.25);
		:after {
			content: 'Click to learn more ➜';
			color: black;
			position: absolute;
			right: 1rem;
			bottom: 5px;
		}
	}
`;

const Title = styled.h1`
	font-size: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-left: 1rem;
	color: black;
	font-family: 'Courier';
	font-weight: 350;
	text-align: left;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 4fr 1fr;
	margin-right: 0.5rem;
	margin-left: 1rem;
`;

const IconContainer = styled.div`
	text-align: center;
`;
const StyledImage = styled.img`
	width: 40px;
	height: 40px;
	top: 50%;
	transform: translateY(-50%);
`;

const Description = styled.span`
	color: black;
	font-family: 'Courier';
	font-size: 1.25em;
	text-align: left;
	/* margin-left: 1rem;
	margin-right: 1rem; */
	max-height: 100px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
`;

const MiniCard = ({ title, color, desc, clicker, icon }) => {
	return (
		<React.Fragment>
			<StyledCard onClick={clicker} color={color}>
				<Title>{title}</Title>
				<GridContainer>
					<Description>{desc}</Description>
					<IconContainer>
						<StyledImage src={icon} />
					</IconContainer>
				</GridContainer>
			</StyledCard>
		</React.Fragment>
	);
};

export default MiniCard;
