import React from 'react';

const ButtonUI = ({onClick, ...props}) => {
    return (
        <button onClick={onClick} {...props}>
            {props.children}
        </button>
    );
};

export default ButtonUI;