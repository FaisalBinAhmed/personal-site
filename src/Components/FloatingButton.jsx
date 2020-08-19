import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledButton = styled.div`
	width: calc(50px + 1vw);
	height: calc(50px + 1vw);
	background-color: #232526;
	border-radius: 50%;
	transition: all 0.1s ease-in-out;
	font-size: calc(20px + 1vw);
	cursor: pointer;
	color: white;
	font-family: 'Bebas Neue';
	text-align: center;

	line-height: calc(50px + 1vw);
	position: fixed;
	right: 30px;
	bottom: 30px;
	/* box-shadow: 2px 2px 10px #20203c, -2px -2px 10px #38386c; */
	z-index: 11;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	&:hover {
		transform: scale(1.1);
	}
`;

const Menu = styled.div`
	/* width: 200px; */
	/* height: 200px;  */
	position: fixed;
	right: 30px;
	bottom: 100px;
	z-index: 11;
	/* background-color: rgba(255, 255, 255, 0.5); */
`;

const MenuBackdrop = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.1);
	z-index: 10;
	position: fixed;
	left: 0;
	top: 0;
`;

const MenuContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: flex-end;
	align-items: flex-end;
`;

const MenuItem = styled.span`
	color: white;
	text-align: center;
	background-color: #232526;
	border-bottom: 1px solid #f7f7f7;
	font-size: 30px;
	/* margin-top: 10px; */
	margin-bottom: 10px;
	padding: 5px;
	cursor: pointer;
	text-align: right;
	border-radius: 2px;
	a {
		color: #fff !important;
	}
`;

export const FloatingButton = ({ onClick, children, changeTheme }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [icon, setIcon] = useState('☰');

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
		icon === '☰' ? setIcon('✕') : setIcon('☰');
	};
	return (
		<>
			{menuOpen && (
				<MenuBackdrop
					onClick={() => {
						setMenuOpen(false);
						setIcon('☰');
					}}
				/>
			)}
			<StyledButton onClick={handleMenu}>{icon}</StyledButton>
			{menuOpen && (
				<Menu>
					<MenuContainer>
						<MenuItem>Send Email</MenuItem>
						<MenuItem onClick={changeTheme}>Change Theme</MenuItem>
						<MenuItem onClick={handleMenu}>
							<NavLink exact to="/">
								Go Home
							</NavLink>
						</MenuItem>
					</MenuContainer>
				</Menu>
			)}
		</>
	);
};
