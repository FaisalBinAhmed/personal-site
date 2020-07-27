import React from 'react';

const Typography = (props) => {
	const styles = {
		fontSize: 'calc(18px + 0.4vw)',
		fontFamily: props.ff ? props.ff : 'Courier',
		textAlign: props.ta,
	};

	return <p style={styles}>{props.children}</p>;
};

export default Typography;
