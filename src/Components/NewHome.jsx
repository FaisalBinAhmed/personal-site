import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const NewHome = (props) => {
	const GridContainer = styled.div`
		display: grid;
		grid-template-columns: auto auto;
		padding: 30px;
	`;

	const GridItem = styled.div`
		padding: 10px;
	`;

	const shortAbout = 'Hi, I am Faisal and welcome to my website';

	return (
		<React.Fragment>
			<GridContainer>
				<GridItem>
					<Card
						title="❝ About Me"
						color="#82C65F"
						desc={shortAbout}
					/>
				</GridItem>
				<GridItem>
					<Card
						title="Experience"
						color="#E5DB49"
						desc={shortAbout}
					/>
				</GridItem>
				<GridItem>
					<Card title="Writings" color="#5D8EC9" desc={shortAbout} />
				</GridItem>
				<GridItem>
					<Card title="Projects" color="#D7473F" desc={shortAbout} />
				</GridItem>
			</GridContainer>
			<p>Hello</p>
		</React.Fragment>
	);
};

export default NewHome;
