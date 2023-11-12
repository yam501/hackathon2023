import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';

const InputUi = ({inputVal, ...props}) => {
    const [val, setVal] = useState(inputVal)
    const convertVal = () => {
        setVal(/[A-z]/.test(val) ? val : +val.toFixed(2))
    }
    useEffect(() => {
        convertVal()
    }, [])
    return (
        <div>
            <input className='table_column_input' value={val} onChange={e => setVal(e.target.value)} {...props}/>
        </div>
    );
};

export default InputUi;