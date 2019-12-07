import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import styles from "./AppContainer.module.scss";
import BadLink from "./BadLink";
import useTheme from "./Hooks/useTheming";
import nightModeIcon from "../Assets/nightmode.png";
import lightModeIcon from "../Assets/lightmode.png";

const AppContainer = (props) => {
	const [theme, changeTheme] = useTheme();

	let style = styles;
	let iconText, iconSource;
	const themeToggler = styles.themeToggler;

	if (props.device === "desktop") {
		// * desktop style
		style = styles.desktopView;
	}
	if (props.device === "mobile" && props.orient === "landscape") {
		// * mobile style in landscape
		style = styles.desktopView;
	}
	if (props.device === "mobile" && props.orient === "portrait") {
		// * mobile style in portrait
		style = styles.mobileView;
	}

	// * THEME DEPENDENT CONTEXT
	if (theme === "light") {
		iconSource = nightModeIcon;
		iconText = "Switch to dark theme";
	} else if (theme === "dark") {
		iconSource = lightModeIcon;
		iconText = "Switch to light theme";
	}
	// * SIDEBAR
	let navstyles = {
		display: "block",
		backgroundColor: theme === "light" ? "#F7F7F7" : "#1f1f1f",
		color: "#c9d1d3",
		height: "100vh"
	};
	//* MENU CONTAINER
	let menustyles = {
		marginTop: "20rem",
		marginRight: "2rem",
		marginLeft: "2rem",
		fontFamily: "Courier"
	};
	//* PAGE CONTAINER
	let containerStyle = {
		backgroundColor: theme === "light" ? "#FFF" : "#121212",
		color: theme === "light" ? "#121212" : "#F7F7F7",
		height: "100vh",
		overflow: "auto"
	};
	//* MENUS
	const linkstyles = {
		fontSize: "1.3em",
		backgroundColor: "transparent",
		fontWeight: "bold",
		display: "block",
		border: "none",
		textAlign: "right",
		width: "100%",
		textDecoration: "none",
		color: theme === "light" ? "#263238" : "white"
	};
	const activelinkstyles = { color: "lightcoral" };

	if (props.orient === "portrait") {
		navstyles.height = "20vh";
		navstyles.width = "100vw";
		menustyles.marginLeft = null;
		menustyles.marginRight = null;
		menustyles.marginTop = null;
	}

	return (
		<HashRouter>
			<div className={style}>
				{/* Menubar on the left */}

				<div style={navstyles}>
					<img
						className={themeToggler}
						onClick={changeTheme}
						src={iconSource}
						title={iconText}
					/>

					{/* actual menus */}
					<div style={menustyles}>
						<NavLink
							style={linkstyles}
							activeStyle={activelinkstyles}
							exact
							to={"/"}
						>
							Home
						</NavLink>
						<NavLink
							style={linkstyles}
							activeStyle={activelinkstyles}
							exact
							to={"/about"}
						>
							About Me
						</NavLink>
						<hr />
						<br />
						<NavLink
							style={linkstyles}
							activeStyle={activelinkstyles}
							exact
							to={"/resume"}
						>
							Resume
						</NavLink>
					</div>
				</div>
				<div style={containerStyle}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />

						<Route component={BadLink} />
					</Switch>
				</div>
			</div>
		</HashRouter>
	);
};

export default AppContainer;
