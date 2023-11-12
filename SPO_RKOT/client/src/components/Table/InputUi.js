import React, { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import { Context } from '../..';

const InputUi = ({inputVal, boundVal, accept, id, tableItem, ...props}) => {
    const {internalTable} = useContext(Context);
    const [val, setVal] = useState(inputVal)
    const [boundCheck, setBoundCheck] = useState(boundVal &&
        {
            'Не менее': val >= boundVal[0],
            'Не более': val <= boundVal[0]
        }
    )
    const convertVal = () => {
        try {
            setVal(isNaN(val) ? val : +val.toFixed(1))
        } catch {

        }
    }



    useEffect(() => {
        convertVal()
    }, [])


    return (
        <div>
            <input className={`table_column_input ${boundVal && !boundCheck[boundVal[1]] && 'input_mark'}`}  value={val} onChange={e => setVal(e.target.value)} {...props}/>
        </div>
    );
};

export default InputUi;