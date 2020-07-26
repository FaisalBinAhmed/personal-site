import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Dialog from './Dialog';

const NewHome = (props) => {
	const { device, orient, theme } = props;

	const [dialogOpen, setDialogOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const columnString = orient === 'portrait' ? 'auto' : 'auto auto';

	const GridContainer = styled.div`
		display: grid;
		grid-template-columns: ${columnString};
		padding: 30px;
	`;

	const GridItem = styled.div`
		padding: 10px;
	`;

	const asset = [
		{
			title: '❝ About Me',
			desc:
				"I'm a 25 years old software engineer based in Munich. I was born and raised in Dhaka, Bangladesh. I'm married to this beautiful woman named Preetha.",
			color: '#82C65F',
		},
		{
			title: '＊ Experience',
			desc:
				'Hi, I am Faisal and welcome to my website. I am a Munich based...',
			color: '#E5DB49',
		},
		{
			title: '✎ Writings',
			desc:
				'Hi, I am Faisal and welcome to my website. I am a Munich based...',
			color: '#5D8EC9',
		},
		{
			title: '❖ Projects',
			desc:
				'Hi, I am Faisal and welcome to my website. I am a Munich based...',
			color: '#D7473F',
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
