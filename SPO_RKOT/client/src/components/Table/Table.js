import React, { useContext, useEffect, useState } from 'react';
import './table.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableItem from './TableItem';
import TableHead from './TableHead';
import { Context } from '../..';
import InformPanel from '../InformPanel/InformPanel';
const Table = ({openTable, externalTableList, show, ...props}) => {
    const {externalTable, internalTable} = useContext(Context);
    const [tableRow, setTableRow] = useState([])
    const [check, setCheck] = useState(false)
    const [index, setIndex] = useState(null);
    const [id, setId] = useState(null);
    const getIndex = (i, id) => {
        setIndex(i)
        setId(id)
    }

    const uplod = async () => {
        id !== null && await internalTable.getAllByExternalTableId(id).then(res => setCheck(true)).then(res => dynamicParNames())
    }
    const dynamicParNames = () => {
        setTableRow(() => {
            const newArr = Object.keys(internalTable.internalTable[0]).splice(2)
            return newArr;
        })
    }
    useEffect(() => {
        uplod()
        
    }, [id])
    console.log(tableRow)

    return (
        <div>
            {show &&
                <InformPanel openTable={openTable} dataTable={externalTable.externalTable[index]} />
            }

            <Container>
            {show ?
                <>
                    <Row>
                        <Col>Параметры качества</Col>
                        <Col>Требования к граничным значениям</Col>
                        {check && internalTable.internalTable.map((tableItem) => 
                        <Col>Значения</Col>)}    
                    </Row>
                    {check && tableRow.map(item => {
                        <Row>
                            <Col>{item}</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    })}
                </>
                :
                <>
                <Row>
                    <Col>Федеральный округ(фо)</Col>
                    <Col>Место проведения контроля</Col>
                    <Col>Дата начала</Col>
                    <Col>Дата конца</Col>
                    <Col>Посмотреть</Col>
                </Row>
                {externalTableList.map((item, i) => <TableItem key={item.id} openTable={openTable}  getIndex={getIndex} index={i} dataTable={item}/>)}
                </>
            }
            </Container>
            {/* <table className='table'>

                {show ?
                check && internalTable.internalTable.map((tableItem, i) => <TableHead show={show} index={i} dependArray={internalTable.internalTable} dataTable={tableItem} />)
                :
                <>
                <tr>
                    <th  className='table_column'>Федеральный округ(фо)</th>
                    <th className='table_column'>Место проведения контроля</th>
                    <th className='table_column'>Дата начала</th>
                    <th className='table_column'>Дата конца</th>
                    <th className='table_column'>Посмотреть</th>
                </tr>
                {externalTable.externalTable.map((item, i) => <TableItem openTable={openTable}  getIndex={getIndex} index={i} dataTable={item}/>)}
                </>
                }
            </table> */}
        </div>
    );
};

export default Table;