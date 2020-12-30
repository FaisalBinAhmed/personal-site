import React from 'react';
import styled, { keyframes } from 'styled-components';

const ModalBackdrop = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${(props) =>
		props.theme !== 'light'
			? 'rgba(0, 0, 0, 0.5)'
			: 'rgba(255, 255, 255, 0.9)'};
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
		props.theme === 'light'
			? 'rgba(255,255,255,0.9)'
			: 'rgba(0, 0, 0, 0.9)'};
	width: 85vmin;
	max-height: 95%;
	margin: auto;
	z-index: 20;
	margin-top: 2%;
	border-radius: 5px;
	overflow: scroll;
	animation: ${slide} 0.2s;
`;

const HeaderContainer = styled.div`
	position: sticky;
	top: 0px;
	background-color: ${(props) => props.color};
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
	color: black;
	font-family: 'Roboto Mono';
	font-weight: 350;
	padding-left: 10px;
	min-width: 200px;
`;
const CloseButton = styled.div`
	color: black;
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
const Thumbnail = styled.img`
	width: 100%;
	grid-row: 1;
	grid-column: 1;
	/* overflow: scroll; */
	/* object-fit: fill; */
`;
const Dialog = (props) => {
	const { title, children, close, theme, color } = props;

	return (
		<React.Fragment>
			<ModalBackdrop onClick={close} theme={theme}>
				<ModalContent
					theme={theme}
					onClick={(e) => {
						e.stopPropagation();
					}}>
					<HeaderContainer color={color}>
						<Header>
							<Spacer />
							<ModalTitle>{title}</ModalTitle>
							<Spacer>
								<CloseButton onClick={close}>✕</CloseButton>
							</Spacer>
						</Header>
					</HeaderContainer>
					<Thumbnail src={children} />
				</ModalContent>
			</ModalBackdrop>
		</React.Fragment>
	);
};

export default Dialog;
