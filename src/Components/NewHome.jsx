import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Dialog from './Dialog';
import AboutMe from './Home/Home';
import useTheme from './Hooks/useTheming';
import nightModeIcon from '../Assets/nightmode.png';
import lightModeIcon from '../Assets/lightmode.png';

import { useMediaQuery } from 'react-responsive';
import SideBarContent from './SideBarContent';
import { FloatingButton } from './FloatingButton';

const NewHome = (props) => {
	// const { device, orient } = props;

	const [dialogOpen, setDialogOpen] = useState(false);
	const [index, setIndex] = useState(0);
	const [theme, changeTheme] = useTheme();
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	const columnString = isPortrait ? '1fr' : '2fr 2fr';

	let iconText, iconSource;

	if (theme === 'light') {
		iconSource = nightModeIcon;
		iconText = 'Switch to dark theme';
	} else if (theme === 'dark') {
		iconSource = lightModeIcon;
		iconText = 'Switch to light theme';
	}

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

	const LandScapeLayout = styled.div`
		display: grid;
		grid-template-columns: 1fr 4fr;
	`;

	const PortraitLayout = styled.div`
		display: inline-grid;
		overflow: auto;
	`;

	const Sidebar = styled.div`
		display: block;
		background-color: ${theme === 'light' ? '#353b48' : '#2c2c54'};
		color: #c9d1d3;
		height: ${isPortrait ? '10vh' : '100%'};
		min-height: ${isPortrait ? '50px' : '100vh'};
	`;

	const ThemeSwitch = styled.img`
		max-width: 30px;
		margin-top: 5px;
		margin-left: 5px;
		position: absolute;
		top: 5px;
		right: 5px;
		opacity: 0.5;
		z-index: 10;
		cursor: pointer;
	`;

	const Layout = isPortrait ? PortraitLayout : LandScapeLayout;

	const MainContainer = styled.div`
		background-color: ${theme === 'light' ? '#fefefa' : '#121212'};
		color: ${theme === 'light' ? '#121212' : '#F7F7F7'};
		height: 100%;
		overflow: visible;
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
			color: '#FF8A80',
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
			<Layout>
				<Sidebar>
					<ThemeSwitch
						onClick={changeTheme}
						src={iconSource}
						title={iconText}
						alt="theme switcher"
					/>
					<SideBarContent />
				</Sidebar>
				<MainContainer>
					<GridContainerFull>
						<GridItem>
							<AboutMe isPortrait={isPortrait} />
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
				</MainContainer>
				<FloatingButton />
			</Layout>
		</React.Fragment>
	);
};

export default NewHome;
