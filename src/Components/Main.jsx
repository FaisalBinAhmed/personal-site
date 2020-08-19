import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import MiniCard from './MiniCard';
// import Dialog from './Dialog';
import AboutMe from './Home/Home';

import { useMediaQuery } from 'react-responsive';
import categories from '../Assets/categories';

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columnString};
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

const Main = (props) => {
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

	// const cardClicker = (index) => {
	// 	setIndex(index);
	// 	setDialogOpen(true);
	// };

	// const closeDialog = (e) => {
	// 	setDialogOpen(false);
	// };

	const columnString = isPortrait
		? isTablet
			? '1fr 1fr'
			: '1fr'
		: isPhoneLandscape
		? '1fr 1fr'
		: isTabletLandscape
		? '1fr 1fr 1fr'
		: '1fr 1fr 1fr 1fr';

	return (
		<>
			<GridContainerFull>
				<GridItem>
					<AboutMe isPortrait={isPortrait} />
				</GridItem>
			</GridContainerFull>
			<GridContainer columnString={columnString}>
				{categories.map((item, index) => (
					<GridItem key={index}>
						<NavLink exact to={item.route}>
							<MiniCard
								title={item.title}
								desc={item.desc}
								color={item.color}
								// clicker={(e) => cardClicker(index)}
								icon={item.icon}
							/>
						</NavLink>
					</GridItem>
				))}
			</GridContainer>
			{/* {dialogOpen && (
				<Dialog
					title={asset[index].title}
					// close={closeDialog}
					index={index}
					theme={theme}
					color={asset[index].color}>
					{asset[index].Component}
				</Dialog>
			)} */}
		</>
	);
};
export default Main;
