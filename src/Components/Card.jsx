import React from 'react';
import styled from 'styled-components';
import noise from '../Assets/noise.png';

const StyledCard = styled.div`
	height: calc(280px + 0.4vh);
	background-color: ${(props) => props.color};
	border-radius: 5px;
	box-shadow: 1px 1px 5px ${(props) => props.color},
		-1px -1px 5px ${(props) => props.color};
	background-url: ${noise};
	cursor: pointer;
	overflow: hidden;
	/* text-overflow: ellipsis; */
	&:hover {
		filter: brightness(1.25);
		:after {
			content: 'Click to learn more ➜';
			color: black;
			position: absolute;
			right: 5px;
			bottom: 5px;
		}
	}
`;

const Title = styled.h1`
	font-size: calc(30px + 0.4vw);
	margin-top: 0.33vw;
	margin-bottom: 0;
	margin-left: 1vw;
	color: black;
	font-family: 'Courier';
	font-weight: 350;
	text-align: left;
`;

const Divider = styled.hr`
	background-color: black;
	height: 2px;
	border: 0;
	margin-left: 1vw;
	margin-right: 1vw;
`;

const Description = styled.p`
	color: black;
	font-family: 'Courier';
	font-size: calc(20px + 0.4vw);
	text-align: left;
	margin-left: 1vw;
	margin-right: 1vw;
	padding-top: 1vw;
	/* white-space: nowrap; */
`;

const Card = (props) => {
	const { title, color, desc, clicker } = props;

	return (
		<React.Fragment>
			<StyledCard onClick={clicker} color={color}>
				<Title>{title}</Title>

				<Divider />
				<Description>{desc}</Description>
			</StyledCard>
		</React.Fragment>
	);
};

export default Card;
