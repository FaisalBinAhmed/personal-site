import React from 'react';
// import logo from './logo.svg';
import './App.scss';
// import { useMediaQuery } from 'react-responsive';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NewHome from './Components/NewHome';
import BadLink from './Components/BadLink';

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
		<div className="App">
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
		</div>
	);
}

export default App;
