import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Dialog from './Dialog';
import AboutMe from './Home/Home';

const NewHome = (props) => {
	const { device, orient, theme } = props;

	const [dialogOpen, setDialogOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const columnString = orient === 'portrait' ? '1fr' : '2fr 2fr';

	const GridContainer = styled.div`
		display: grid;
		grid-template-columns: ${columnString};
		padding: calc(10px + 0.8vmin);
	`;
	const GridContainerFull = styled.div`
		display: grid;
		grid-template-columns: 1fr;
		padding: calc(10px + 0.8vmin);
		padding-bottom: 0;
	`;

	const GridItem = styled.div`
		padding: 10px;
	`;

	const asset = [
		{
			title: 'About Me',
			desc:
				"I'm a 25 years old software engineer based in Munich. I was born and raised in Dhaka, Bangladesh. I'm married to this beautiful woman named Preetha...",
			color: '#a2de96',
		},
		{
			title: 'Experience',
			desc:
				'Hi, I am Faisal and welcome to my website. I am a Munich based...',
			color: '#fbd46d',
		},
		{
			title: 'Writings',
			desc:
				'Hi, I am Faisal and welcome to my website. I am a Munich based...',
			color: '#64c4ed',
		},
		{
			title: 'Projects',
			desc:
				'Hi, I am Faisal and welcome to my website. I am a Munich based...',
			color: '#ff677d',
		},
	];

	const cardClicker = (index) => {
		setIndex(index);
		setDialogOpen(true);
	};

	const closeDialog = (e) => {
		setDialogOpen(false);
	};

	return (
		<React.Fragment>
			<GridContainerFull>
				<GridItem>
					<AboutMe />
				</GridItem>
			</GridContainerFull>
			<GridContainer>
				{asset.map((item, index) => (
					<GridItem key={index}>
						<Card
							title={item.title}
							desc={item.desc}
							color={item.color}
							clicker={(e) => cardClicker(index)}
						/>
					</GridItem>
				))}
			</GridContainer>
			{dialogOpen && (
				<Dialog
					title={asset[index].title}
					close={closeDialog}
					index={index}
					theme={theme}
				/>
			)}
		</React.Fragment>
	);
};

export default NewHome;
