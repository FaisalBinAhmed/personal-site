import React from 'react';
import styled from 'styled-components';

const Dialog = (props) => {
	const { title, description, close } = props;

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
	const ModalSpan = styled.span``;

	const ModalContent = styled.div`
		background-color: black;
		/* display: block; */
		width: 60%;
		height: 90%;
		margin: auto;
		padding: 20px;
		z-index: 20;
		/* cursor: pointer; */
		/* pointer-events: none; */
		margin-top: 5%;
		/* position: relative; */
		overflow: auto;
	`;

	return (
		<React.Fragment>
			<ModalBackdrop onClick={close} className="dialogParent">
				<ModalContent
					onClick={(e) => {
						e.stopPropagation();
						// console.log('child');
					}}
					className="dialogChild">
					{title}
				</ModalContent>
			</ModalBackdrop>
		</React.Fragment>
	);
};

export default Dialog;
