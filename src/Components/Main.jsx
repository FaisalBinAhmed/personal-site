import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

import MiniCard from './MiniCard';
import Dialog from './Dialog';
import AboutMe from './Home/Home';
import About from './About/About';
import PDFViewer from './PDFViewer';

import personIcon from '../Assets/person.svg';
import gearIcon from '../Assets/gear.svg';
import portfolioIcon from '../Assets/portfolio.svg';
import studyIcon from '../Assets/study.svg';
import pdfIcon from '../Assets/pdf.svg';

import { useMediaQuery } from 'react-responsive';

const asset = [
	{
		title: 'About Me',
		desc: "I'm a 25 years old engineer from Munich I'd like to... ",
		color: '#a2de96',
		icon: personIcon,
		Component: <About />,
		route: '/about',
	},
	{
		title: 'Experience',
		desc: "I'm a 25 years old engineer from ... ",
		color: '#fbd46d',
		icon: portfolioIcon,
		Component: <About />,
		route: '/about',
	},
	{
		title: 'Writings',
		desc: "I'm a 25 years old engineer from ... ",
		color: '#64c4ed',
		icon: studyIcon,
		Component: <About />,
		route: '/about',
	},
	{
		title: 'Projects',
		desc: "I'm a 25 years old engineer from ... ",
		color: '#FF8A80',
		icon: gearIcon,
		Component: <About />,
		route: '/about',
	},
	{
		title: 'Resume',
		color: '#e1ccec',
		desc: 'Download ➝ ',
		icon: pdfIcon,
		Component: <PDFViewer />,
		route: '/about',
	},
];

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
	/* background-color: black;
		margin: calc(10px + 0.8vmin);
		border-radius: 10px; */
`;

const GridItem = styled.div`
	padding: 10px;
`;

const Main = (props) => {
	// const [dialogOpen, setDialogOpen] = useState(false);
	// const [index, setIndex] = useState(0);
	// const [theme, changeTheme] = useTheme();
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	// const cardClicker = (index) => {
	// 	setIndex(index);
	// 	setDialogOpen(true);
	// };

	// const closeDialog = (e) => {
	// 	setDialogOpen(false);
	// };

	const columnString = isPortrait ? '1fr' : '1fr 1fr 1fr 1fr';

	return (
		<>
			<GridContainerFull>
				<GridItem>
					<AboutMe isPortrait={isPortrait} />
				</GridItem>
			</GridContainerFull>
			<GridContainer columnString={columnString}>
				{asset.map((item, index) => (
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
