import React from 'react';
import './table.css';
import TableItem from './TableItem';
import TableHead from './TableHead';
const Table = ({openTable, dataTable, show, ...props}) => {
    return (
        <div>
            <table className='table'>
                {show ? <TableHead show={show}/>
                :
                <>
                <TableHead show={show}/>
                <TableItem openTable={openTable} dataTable={dataTable}/>
                </>
                }
            </table>
        </div>
    );
};

export default Table;