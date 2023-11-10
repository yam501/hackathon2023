import React, { useState } from 'react';
import ButtonUI from '../ButtonUI';

const TableItem = ({...props}) => {
    const [openTable, setOpenTable] = useState(false)
    const open = () => setOpenTable(!openTable);
    return (
        <tr>
           <td className='table_column'>fsdfsdfsdfs</td> 
           <td className='table_column'>fsdfsdfsdfsd</td> 
           <td className='table_column'>fsdfsdfsdf</td> 
           <td className='table_column table_btn_box'>
                <span className='table_column_btn '>
                <ButtonUI className="table_item_btn">Добавить</ButtonUI>
                </span>
            </td> 
           <td className='table_column table_btn_box'>
                <span className='table_column_btn'>
                <ButtonUI className="table_item_btn" onClick={open}>Посмотреть</ButtonUI>
                </span>
            </td> 
        </tr>
    );
};

export default TableItem;