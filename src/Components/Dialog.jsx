import React from 'react';
import styled, { keyframes } from 'styled-components';
import About from './About/About';

const ModalBackdrop = styled.div`
	width: 100%;
	height: 100%;
	/* background-color: rgba(255, 255, 255, 0.3); */
	background-color: ${(props) =>
		props.theme === 'light'
			? 'rgba(0, 0, 0, 0.5)'
			: 'rgba(255, 255, 255, 0.3)'};
	position: fixed;
	/* overflow: auto; */
	left: 0;
	top: 0;
	z-index: 20;
`;

const slide = keyframes`
	0% {
        transform:  translate(0,100vh)  ;
    }
    100% {
        transform:  translate(0,0)  ;
    }
    `;

const ModalContent = styled.div`
	background-color: ${(props) =>
		props.theme === 'light' ? '#fefefa' : 'black'};
	width: 85vmin;
	height: 95%;
	margin: auto;
	z-index: 20;
	margin-top: 2%;
	border-radius: 5px;
	overflow: auto;
	/* display: flex;
	flex-direction: column; */
	animation: ${slide} 0.2s;
`;

const HeaderContainer = styled.div`
	position: sticky;
	top: 0px;
	background-color: inherit;
	/* margin-top: 10px; */
`;

const Header = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: space-around;
	min-height: 5%;
	padding-top: 5px;
	padding-bottom: 5px;
`;
const ModalTitle = styled.span`
	font-size: calc(30px + 0.4vw);
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	font-family: 'Courier';
	font-weight: 350;
	padding-left: 10px;
	min-width: 200px;
	/* text-align: center; */
`;
const CloseButton = styled.div`
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	background-color: transparent;
	font-size: calc(30px + 0.4vw);
	float: right;
	cursor: pointer;
	font-weight: 100;
	margin-right: 10px;
	font-family: Roboto;
	:hover {
		color: red;
	}
`;
const Spacer = styled.div`
	min-width: 40px;
	width: 33%;
`;
const Dialog = (props) => {
	const { title, description, close, index, theme, isPortrait } = props;

	console.log(index);
	return (
		<React.Fragment>
			<ModalBackdrop onClick={close} theme={theme}>
				<ModalContent
					theme={theme}
					onClick={(e) => {
						e.stopPropagation();
					}}>
					<HeaderContainer>
						<Header>
							<Spacer />
							<ModalTitle theme={theme}>{title}</ModalTitle>
							<Spacer>
								<CloseButton theme={theme} onClick={close}>
									✕
								</CloseButton>
							</Spacer>
						</Header>
					</HeaderContainer>
					{index === 0 && <About />}
				</ModalContent>
			</ModalBackdrop>
		</React.Fragment>
	);
};

export default Dialog;