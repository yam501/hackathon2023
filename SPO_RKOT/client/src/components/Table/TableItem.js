import React, { useState } from 'react';
import ButtonUI from '../ButtonUI';

const TableItem = ({openTable, index, getIndex, dataTable, ...props}) => {
    const openView = () => {
        openTable();
        getIndex(index);
    }
    return (
        <tr>
           <td className='table_column'>{dataTable.district}</td> 
           <td className='table_column'>{dataTable.place}</td> 
           <td className='table_column'> {dataTable.startDate}</td> 
           <td className='table_column'> {dataTable.endDate}</td> 
           <td className='table_column table_btn_box'>
                <span className='table_column_btn'>
                <ButtonUI className="table_item_btn" onClick={openView}>Посмотреть</ButtonUI>
                </span>
            </td>
        </tr>

    );
};

export default TableItem;