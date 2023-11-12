import React, { useEffect, useState } from 'react';
import InputUi from './InputUi';

const TableItemList = ({dataTable, ...props}) => {
    const [val, setVal] = useState('')
    const [check, setCheck] = useState(false)


    return (
        <div>
            {Object.values(dataTable).map(item => 
                <div onClick={() => setCheck(true)} className='table_column_item'>
                    <InputUi inputVal={item}/>
                </div>
            )}
        </div>
    );
};

export default TableItemList;