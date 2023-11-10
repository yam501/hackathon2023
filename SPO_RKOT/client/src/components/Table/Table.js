import React from 'react';
import './table.css';
import TableItem from './TableItem';
import TableHead from './TableHead';
const Table = ({...props}) => {
    return (
        <div>
            <table className='table'>
                <TableHead/>
                <TableItem/>
            </table>
        </div>
    );
};

export default Table;