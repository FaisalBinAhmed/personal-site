import React from 'react';
// import logo from './logo.svg';
// import { useMediaQuery } from 'react-responsive';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NewHome from './Components/NewHome';
import BadLink from './Components/BadLink';
import styled, { createGlobalStyle } from 'styled-components';

const Main = styled.div`
	text-align: center;
	font-family: 'Courier', 'Trebuchet MS', 'Lucida Sans Unicode',
		'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	html,
	body {
		overscroll-behavior: none;
	}
	a {
		text-decoration: none;
		color: #7986cb;
	}
	button {
		border: none;
		outline: none;
		cursor: pointer;
	}
`;

function App() {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: '(min-device-width: 1224px)',
	// });
	// const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
	// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	// const isTabletOrMobileDevice = useMediaQuery({
	// 	query: '(max-device-width: 1224px)',
	// });
	// const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	// const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

	// let device,
	// 	orient = '';

	// if (isDesktopOrLaptop) {
	// 	device = 'desktop';
	// } else if (isTabletOrMobileDevice) {
	// 	device = 'mobile';
	// 	if (isPortrait) {
	// 		orient = 'portrait';
	// 	} else orient = 'landscape';
	// }

	return (
		<Main>
			<HashRouter>
				<Switch>
					{/* <Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} /> */}
					<Route
						exact
						path="/"
						component={() => (
							<NewHome
							// device={device}
							// orient={orient}
							// theme={theme}
							/>
						)}
					/>

					<Route component={BadLink} />
				</Switch>
			</HashRouter>
		</Main>
	);
}

export default App;
