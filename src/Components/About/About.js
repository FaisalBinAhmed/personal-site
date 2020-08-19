import React, { useEffect } from 'react';
import faisal from '../../Assets/faisal.jpeg';
import Typography from '../Typography';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const mainstyles = {
	margin: '5vw',
};
const StyledImage = styled.img`
	width: calc(150px + 0.4vw);
	max-width: 105rem;
	height: auto;
	border-radius: 50%;
	display: block;
	margin: auto;
`;
const Container = styled.div`
	margin: 5vw;
	padding-bottom: 5vh;
`;
// const StyledLink = styled(NavLink)`

// `;

const About = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<NavLink exact to="/">
				<Typography fs={'1.5rem'} ta={'left'}>
					{' '}
					← Go back to Home
				</Typography>
			</NavLink>
			<StyledImage src={faisal} alt="profile pic" />
			<Typography fs={'1.5rem'} ta={'left'}>
				I'm a 25 years old software engineer based in Munich. I was born
				and raised in Dhaka, Bangladesh. I'm married to this beautiful
				woman named Preetha.
			</Typography>
			<Typography fs={'1.5rem'} ta={'left'}>
				🎓 I'm a full-time student at{' '}
				<a href="https://tum.de" target="_blank">
					Technical University of Munich
				</a>
				. There, I've been parsuing my Master's in Informatics since
				summer 2018. My major subject areas are Software Engineering and
				Distributed Systems. I finished my Bachelor's in Computer
				Science & Engineering at{' '}
				<a href="www.aiub.edu" target="_blank">
					American International University - Bangladesh
				</a>
				. Since my childhood, I'd dreamt to study Computer Science - and
				I was fortunate enough to achieve this dream.
			</Typography>
			<Typography fs={'1.5rem'} ta={'left'}>
				👨‍💻 I'm currently working for a video straming company called{' '}
				<a href="https://joyn.de" target="_blank">
					Joyn
				</a>{' '}
				as a part-time OTT developer. My main focus there are React,
				Storybook, and JavaScript.
			</Typography>
			<Typography fs={'1.5rem'} ta={'left'}>
				📝 When I'm not working or studying, I prefer to read books or
				write articles. I started writing in 2013 as a freelance tech
				writer. Soon I along with an Indian friend started a Windows
				application review website called 'MetroAppSauce' - focusing
				mainly on modern Windows Phone and WinRT applications. Much Like
				Windows Phone, our beloved project had to face its demise.
				<br />
				In 2017, I continued my writing career with a technology
				publication called Neowin. You can find all my written articles{' '}
				<a
					href="https://www.neowin.net/news/poster/faisal_ahmed"
					target="_blank">
					here
				</a>
				.
				<br />
				And if you want to read my current articles, head over to my{' '}
				<a href="https://medium.com/@Faisalbin" target="_blank">
					Medium
				</a>{' '}
				blog. However, I don't write much nowadays.
			</Typography>
			<Typography fs={'1.5rem'} ta="left">
				📚 I love reading - especially science related non-fiction
				books. Some of my favorites are: The Code Book by Simon Singh,
				The Gene by Siddhartha Mukherjee, Sapiens by Yuval Noah Harari,
				and 1984 by George Orwell. More information can be found on my
				<a href="https://www.goodreads.com/faisalbin" target="_blank">
					{' '}
					goodreads{' '}
				</a>
				profile.
			</Typography>
		</Container>
	);
};

export default About;
