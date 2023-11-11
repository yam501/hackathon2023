import React, { useContext, useState } from 'react';
import './table.css';
import TableItem from './TableItem';
import TableHead from './TableHead';
import { Context } from '../..';
import InformPanel from '../InformPanel/InformPanel';
const Table = ({openTable, show, ...props}) => {
    const {externalTable} = useContext(Context);
    const [index, setIndex] = useState(null);
    const getIndex = (i) => setIndex(i)
    return (
        <div>
            {show && 
                <InformPanel openTable={openTable} dataTable={externalTable.externalTable[index]}/>
            }

            <table className='table'>
                {show ? 
                <div></div>
                // externalTable.externalTable.map(tableItem => <TableHead show={show} dataTable={tableItem} />)
                :
                <>
                <tr>
                    <th  className='table_column'>Федеральный округ(фо)</th>
                    <th className='table_column'>Место проведения контроля</th>
                    <th className='table_column'>Период проведения контроля</th>
                    <th className='table_column'>Посмотреть</th>
                </tr>
                {externalTable.externalTable.map((item, i) => <TableItem openTable={openTable} getIndex={getIndex} index={i} dataTable={item}/>)}
                </>
                }
            </table>
        </div>
    );
};

export default Table;