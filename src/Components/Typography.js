import React from 'react';



const Typography = (props) => {

    const styles = {
        fontSize: props.fs,
        fontFamily: 'Trebuchet MS',
    };

    return(
        <p style={styles}>{props.children}</p>
    );
}

export default Typography;