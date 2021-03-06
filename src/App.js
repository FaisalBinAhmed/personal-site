import React from 'react';
import NewHome from './Components/NewHome';

import styled from 'styled-components';

const Main = styled.div`
	text-align: center;
	font-family: 'Roboto Mono', 'Trebuchet MS', Arial, sans-serif;
	a {
		text-decoration: none;
		color: #7986cb;
	}
	button {
		border: none;
		outline: none;
		cursor: pointer;
	}
`;

function App() {
	return (
		<Main>
			<NewHome />
		</Main>
	);
}

export default App;
