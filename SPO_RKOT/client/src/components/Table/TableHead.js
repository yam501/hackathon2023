import React from 'react';

const TableHead = ({show, dataTable, ...props}) => {
    return (
        <tr>
            {dataTable.map(item => {
            <td className='table_column'>
                {}
            </td>
            })}
        </tr>
    );
};

export default TableHead;