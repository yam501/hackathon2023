import React from 'react';

const ButtonUI = ({...props}) => {
    return (
        <button>
            {props.children}
        </button>
    );
};

export default ButtonUI;