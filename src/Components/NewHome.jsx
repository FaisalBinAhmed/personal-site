import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';

import useTheme from './Hooks/useTheming';
import nightModeIcon from '../Assets/nightmode.png';
import lightModeIcon from '../Assets/lightmode.png';

import { useMediaQuery } from 'react-responsive';
import SideBarContent from './SideBarContent';
import { FloatingButton } from './FloatingButton';

import Main from './Main';
import About from './About/About';
import BadLink from './BadLink';
import Projects from './Projects';
import Projectview from './Projectview';

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

const LandScapeLayout = styled.div`
	display: grid;
	width: 100vw;
	grid-template-columns: 1fr 4fr;
`;

const PortraitLayout = styled.div`
	display: inline-grid;
	overflow: auto;
	width: 100vw;
`;
const anime = keyframes`
	20% {
    background-position: 100% 100%;
  }
`;
const Sidebar = styled.div`
	display: block;
	box-shadow: ${(props) =>
		props.isPortrait
			? 'inset 0px -5px 5px -5px #121212'
			: 'inset -10px 0px 10px -10px #121212'};
	height: ${(props) => (props.isPortrait ? '10vh' : '100%')};
	min-height: ${(props) => (props.isPortrait ? '50px' : '100vh')};
	background: repeating-linear-gradient(
		-45deg,
		#222831 0 10px,
		#393e46 10px 20px
	);
	background-size: 200% 200%;
	animation: ${anime} 1s linear 1;
`;

const MainContainer = styled.div`
	background-color: ${(props) =>
		props.theme === 'light' ? '#f7f7f7' : '#121212'};
	color: ${(props) => (props.theme === 'light' ? '#121212' : '#F7F7F7')};
	height: 100%;
	min-height: 100vh;
	overflow: visible;
`;

const NewHome = (props) => {
	// const { device, orient } = props;

	const [theme, changeTheme] = useTheme();
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	// const columnString = isPortrait ? '1fr' : '1fr 1fr 1fr 1fr';

	let iconText, iconSource;

	if (theme === 'light') {
		iconSource = nightModeIcon;
		iconText = 'Switch to dark theme';
	} else if (theme === 'dark') {
		iconSource = lightModeIcon;
		iconText = 'Switch to light theme';
	}

	const Layout = isPortrait ? PortraitLayout : LandScapeLayout;

	return (
		<HashRouter>
			<Layout>
				<Sidebar theme={theme} isPortrait={isPortrait}>
					<SideBarContent />
				</Sidebar>
				<MainContainer theme={theme}>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
						<Route
							exact
							path="/project/:title/:index"
							component={Projectview}
						/>

						<Route component={BadLink} />
					</Switch>
				</MainContainer>
				{!isPortrait && (
					<ThemeSwitch
						onClick={changeTheme}
						src={iconSource}
						title={iconText}
						alt="theme switcher"
					/>
				)}

				{isPortrait && <FloatingButton changeTheme={changeTheme} />}
			</Layout>
		</HashRouter>
	);
};

export default NewHome;
