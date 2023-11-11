import React from 'react';

const TableHead = ({show, ...props}) => {
    return (
        <tr>
            <td className='table_column'>Федеральный округ(ФО)</td>
            <td className='table_column'>Место проведения контроля</td>
            <td className='table_column'>Период проведения контроля</td>
            <td className='table_column'>Просмотр</td>
            {show && <td className='table_column'>Dcvxcvcv</td>}
        </tr>
    );
};

export default TableHead;