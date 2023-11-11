import React from 'react';

const TableHead = ({show, ...props}) => {
    return (
        <tr>
            <td className='table_column'>Sdasdas</td>
            <td className='table_column'>Scvxcxc</td>
            <td className='table_column'>Edsvxcvxc</td>
            <td className='table_column'>Scvxxcvx</td>
            {show && <td className='table_column'>Dcvxcvcv</td>}
        </tr>
    );
};

export default TableHead;