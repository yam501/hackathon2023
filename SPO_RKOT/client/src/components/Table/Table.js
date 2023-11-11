import React, {useContext, useEffect, useState} from 'react';
import './table.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableItem from './TableItem';
import TableHead from './TableHead';
import {Context} from '../..';
import InformPanel from '../InformPanel/InformPanel';
import {observer} from 'mobx-react-lite';

const Table = ({openTable, show, ...props}) => {
    const {externalTable, internalTable} = useContext(Context);
    const [tableRow, setTableRow] = useState([])
    const [renderCol, setRenderCol] = useState([])
    const [check, setCheck] = useState(false)
    const [index, setIndex] = useState(null);
    const [id, setId] = useState(null);
    const getIndex = (i, id) => {
        setIndex(i)
        setId(id)
    }

    const uplod = async () => {
        id !== null && await internalTable.getAllByExternalTableId(id).then(res => setCheck(true)).then(res => setRenderCol(internalTable.internalTable))

    }

    const dynamicParNames = () => {
        setTableRow(Object.keys(renderCol[0] ? renderCol[0] : {}).splice(2))
    }
    useEffect(() => {
        uplod()
    }, [id])

    useEffect(() => {
        dynamicParNames()
    }, [renderCol.length])

    return (
        <div className='container'>
            {show &&
                <InformPanel openTable={openTable} dataTable={externalTable.externalTable[index]}/>
            }

            <Container className='table_wrapper'>
                {show ?
                    <>
                        <Row>
                            <Col>Параметры качества</Col>
                            <Col>Требования к граничным значениям</Col>
                            {check && internalTable.internalTable.map((tableItem) =>
                                <Col>Значения</Col>)}
                        </Row>

                        {tableRow.map(item =>
                            <TableHead item={item}/>
                        )}
                    </>
                    :
                    <>
                        <Row className='table_row_header'>
                            <Col className='table_column_header d-flex align-items-center justify-content-center'>Федеральный
                                округ</Col>
                            <Col className='table_column_header_second d-flex align-items-center justify-content-center'>Место проведения
                                контроля</Col>
                            <Col className='table_column_header d-flex align-items-center justify-content-center'>Дата начала</Col>
                            <Col className='table_column_header_second d-flex align-items-center justify-content-center'>Дата конца</Col>
                            <Col className='table_column_header d-flex align-items-center justify-content-center'>Посмотреть</Col>
                        </Row>
                        {externalTable.externalTable.map((item, i) => <TableItem openTable={openTable}
                                                                                 getIndex={getIndex} index={i}
                                                                                 dataTable={item}/>)}
                    </>
                }
            </Container>
            {/* <ButtonUI onClick={dynamicParNames}>Update</ButtonUI> */}
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

export default observer(Table);