import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	font-size: 1.6em;
	font-family: Roboto !important;
	background-color: transparent;
	font-weight: bold;
	display: block;
	color: $text-color;
	border: none;
	text-align: right;
	width: 100%;
	&:focus {
		outline: 0;
	}
`;

const Button = (props) => {
	return <StyledButton>{props.title}</StyledButton>;
};
export default Button;
