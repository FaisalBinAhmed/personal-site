import React from "react";
import "./Button.scss";

const Button = (props) => {
	return <button className="buttons">{props.title}</button>;
};
export default Button;
