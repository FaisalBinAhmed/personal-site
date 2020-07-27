import React from 'react';
import styled from 'styled-components';
import About from './About/About';

const ModalBackdrop = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
	position: fixed;
	overflow: auto;
	left: 0;
	top: 0;
	z-index: 9;
`;
const ModalTitle = styled.span`
	font-size: calc(30px + 0.4vw);
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 20px;
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	font-family: 'Courier';
	font-weight: 350;
`;

const ModalContent = styled.div`
	background-color: ${(props) =>
		props.theme === 'light' ? '#fefefa' : 'black'};
	width: 85vmin;
	height: 90%;
	margin: auto;
	padding: calc(1px + 0.4vmin);
	z-index: 20;
	margin-top: 5%;
	/* margin-bottom: 5%; */
	overflow: auto;
`;
const CloseButton = styled.button`
	display: block;
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	background-color: transparent;
	border: none;
	outline: none;
	font-size: calc(30px + 0.4vw);
	float: right;
	:hover {
		text-shadow: 1.5px 1.5px 5px red, -1.5px -1.5px 5px red;
	}
`;
const Dialog = (props) => {
	const { title, description, close, index, theme } = props;

	console.log(index);
	return (
		<React.Fragment>
			<ModalBackdrop onClick={close} className="dialogParent">
				<ModalContent
					theme={theme}
					onClick={(e) => {
						e.stopPropagation();
					}}
					className="dialogChild">
					<ModalTitle theme={theme}>{title}</ModalTitle>
					<CloseButton theme={theme} onClick={close}>
						<span>&times;</span>
					</CloseButton>
					{index === 0 && <About />}
				</ModalContent>
			</ModalBackdrop>
		</React.Fragment>
	);
};

export default Dialog;
