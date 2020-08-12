import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

import useTheme from './Hooks/useTheming';
import nightModeIcon from '../Assets/nightmode.png';
import lightModeIcon from '../Assets/lightmode.png';

import { useMediaQuery } from 'react-responsive';
import SideBarContent from './SideBarContent';
import { FloatingButton } from './FloatingButton';

import Main from './Main';
import About from './About/About';
import BadLink from './BadLink';

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
		background-color: ${theme === 'light' ? '#3c415e' : '#3c415e'};
		color: #c9d1d3;
		/* position: ${(props) => (props.isPortrait ? 'fixed' : 'inherit')}; */
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

	return (
		<HashRouter>
			<Layout>
				<Sidebar>
					<SideBarContent />
				</Sidebar>
				<MainContainer>
					<Switch>
						<Route exact path="/" component={() => <Main />} />
						<Route
							exact
							path="/about"
							component={() => <About />}
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
