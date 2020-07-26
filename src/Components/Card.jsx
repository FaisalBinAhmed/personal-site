import React from 'react';
import styled from 'styled-components';
import noise from '../Assets/noise.png';

const Card = (props) => {
	const { title, color, desc, clicker } = props;

	const StyledCard = styled.div`
		height: 300px;
		background-color: ${color};
		border-radius: 5px;
		background-url: ${noise};
		max-width: 37vw;
		&:hover {
			filter: brightness(1.25);
			cursor: pointer;
		}
	`;

	const Title = styled.h1`
		font-size: 3vw;
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 20px;
		color: black;
		font-family: 'Roboto';
		text-align: left;
	`;

	const Divider = styled.hr`
		/* width: 90%; */
		background-color: black;
		height: 2px;
		border: 0;
		margin-left: 20px;
		margin-right: 20px;
	`;

	const Description = styled.p`
		color: black;
		font-family: 'Roboto';
		font-size: 1.5vw;
		/* max-width: 90em; */
	`;

	return (
		<React.Fragment>
			<StyledCard onClick={clicker}>
				<Title>{title}</Title>
				<Divider />
				<Description>{desc}</Description>
			</StyledCard>
		</React.Fragment>
	);
};

export default Card;
