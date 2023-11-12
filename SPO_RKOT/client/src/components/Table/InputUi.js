import React, { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import { Context } from '../..';

const InputUi = ({inputVal, boundVal, changeAccept, dataTable, addDataChange, changeValues, id, tableItem, ...props}) => {
    const {internalTable} = useContext(Context);
    const [val, setVal] = useState(inputVal)
    const [change, setChange] = useState([])
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
        changeAccept()
        // addDataChange(id, props.title, val)
        setChange((prevState) => {
            const newData = prevState.map(item => {
                if (item.id == id) {
                    item[props.title] = val
                }
                return item[props.title]
            })
            return prevState
        })
        addDataChange(change)
        console.log(change)
        console.log(id, props.title, val)
    }, [val])


    useEffect(() => {
        convertVal()
        setChange(dataTable)
    }, [])


    return (
        <div>
            <input className={`table_column_input ${boundVal && !boundCheck[boundVal[1]] && 'input_mark'}`}  value={val} onChange={e => setVal(e.target.value)} {...props}/>
        </div>
    );
};

export default InputUi;