import React from "react";
import "./Home.module.scss";
import Typography from "../Typography";

let styles = {
	backgroundColor: "#FFF"
};

function AboutMe(props) {
	return (
		<div style={styles}>
			<Typography fs={"4rem"}>Hi, my name is Faisal. 👋</Typography>
		</div>
	);
}

export default AboutMe;
