import React from 'react';

const Typography = ({ ff, ta, children, ...otherProps }) => {
	const styles = {
		fontSize: 'calc(18px + 0.4vw)',
		fontFamily: 'Roboto Mono',
		textAlign: ta,
		...otherProps,
	};

	return <p style={styles}>{children}</p>;
};

export default Typography;
