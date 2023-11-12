import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';

const InputUi = ({inputVal, ...props}) => {
    const [val, setVal] = useState(inputVal)
    return (
        <div>
            <input value={val} onChange={e => setVal(e.target.value)} {...props}/>
        </div>
    );
};

export default InputUi;