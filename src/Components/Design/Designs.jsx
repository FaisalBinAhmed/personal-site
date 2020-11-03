import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import DesignCard from './DesignCard';
import Dialog from "./../Dialog";

import designs from '../../Assets/designs';

import { useMediaQuery } from 'react-responsive';

const GoBack = styled.p`
	font-size: calc(18px + 0.4vw);
	text-align: left;
	padding-left: 2vmin;
`;
const PageTitle = styled.h1`
	font-size: calc(25px + 0.4vw);
	text-align: left;
	padding-left: 2vmin;
`;
const Container = styled.div`
	margin: 5vmin;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columnString};
	justify-items: center;
`;

const GridItem = styled.div`
	padding: 2vmin;
`;

const Designs = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const cardClicker = (index) => {
		setIndex(index);
		setDialogOpen(true);
	};

	const closeDialog = (e) => {
		setDialogOpen(false);
	};
    
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	const isTablet = useMediaQuery({
		query: '(min-width: 768px) and (max-width: 1024px)',
	});

	const isTabletLandscape = useMediaQuery({
		query:
			'(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
	});
	const isPhoneLandscape = useMediaQuery({
		query: '(min-width: 481px) and (max-width: 961px)',
	});

	const columnString = isPortrait
		? isTablet
			? '1fr 1fr'
			: '1fr'
		: isPhoneLandscape
		? '1fr 1fr'
		: isTabletLandscape
		? '1fr 1fr'
		: '1fr 1fr 1fr';

	return (
		<Container>
			<NavLink exact to="/">
				<GoBack> ← Go back to Home</GoBack>
			</NavLink>
			<PageTitle> Designs</PageTitle>
			<GridContainer columnString={columnString}>
				{designs.map((design, index) => (
					<GridItem key={index}
                    onClick={() => cardClicker(index)}
                    >
							<DesignCard
								subtitle={design.title}
                                color={design.color}
                                thumbnail={design.src}
                                
							/>
					</GridItem>
				))}
			</GridContainer>
            {dialogOpen && (
				<Dialog
					title={designs[index].title}
					close={closeDialog}
					index={index}
					color={designs[index].color}>
					{designs[index].src}
				</Dialog>
			)}
		</Container>
	);
};
export default Designs;
