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
	font-size: 3vw;
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 20px;
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	font-family: 'Roboto';
	text-align: left;
`;

const ModalContent = styled.div`
	background-color: ${(props) =>
		props.theme === 'light' ? '#fefefa' : 'black'};
	/* display: block; */
	width: 60%;
	height: 90%;
	margin: auto;
	padding: 20px;
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
	font-size: 3vw;
	float: right;
	/* border-radius: 100px; */
	:hover {
		text-shadow: 1px 1px 5px red, -1px -1px 5px red;
		/* :before {
			content: 'close';
		} */
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
