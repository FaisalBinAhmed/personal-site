import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Dialog from './Dialog';

const NewHome = (props) => {
	const { device, orient } = props;

	const [dialogOpen, setDialogOpen] = useState(false);

	const columnString = orient === 'portrait' ? 'auto' : 'auto auto';

	const GridContainer = styled.div`
		display: grid;
		grid-template-columns: ${columnString};
		padding: 30px;
	`;

	const GridItem = styled.div`
		padding: 10px;
	`;

	const shortAbout =
		'Hi, I am Faisal and welcome to my website. I am a Munich based...';

	const cardClicker = () => {
		setDialogOpen(true);
	};

	const closeDialog = (e) => {
		setDialogOpen(false);
	};

	return (
		<React.Fragment>
			<GridContainer>
				<GridItem>
					<Card
						title="❝ About Me"
						color="#82C65F"
						desc={shortAbout}
						clicker={cardClicker}
					/>
				</GridItem>
				<GridItem>
					<Card
						title="＊ Experience"
						color="#E5DB49"
						desc={shortAbout}
					/>
				</GridItem>
				<GridItem>
					<Card
						title="✎ Writings"
						color="#5D8EC9"
						desc={shortAbout}
					/>
				</GridItem>
				<GridItem>
					<Card
						title="❖ Projects"
						color="#D7473F"
						desc={shortAbout}
					/>
				</GridItem>
			</GridContainer>
			{dialogOpen && <Dialog title={shortAbout} close={closeDialog} />}
		</React.Fragment>
	);
};

export default NewHome;
