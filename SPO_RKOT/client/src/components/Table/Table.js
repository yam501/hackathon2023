import React, {useContext, useEffect, useState} from 'react';
import './table.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableItem from './TableItem';
import TableHead from './TableHead';
import {Context} from '../..';
import InformPanel from '../InformPanel/InformPanel';
import ButtonUI from '../ButtonUI';
import {observer} from 'mobx-react-lite';

const Table = ({openTable, show, externalTableList, ...props}) => {
    const {externalTable, internalTable} = useContext(Context);
    const [tableRow, setTableRow] = useState([])
    const [renderCol, setRenderCol] = useState([])
    const [mainTable, setMainTable] = useState([])
    const [check, setCheck] = useState(false)
    const [index, setIndex] = useState(null);
    const [id, setId] = useState(null);
    const getIndex = (i, id) => {
        setIndex(i)
        setId(id)
    }

    //получение данных для отрисовки таблиц с бд
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
        <div className='container-fluid mb-2'>
            {show &&
                <Container>
                    <InformPanel openTable={openTable} dataTable={externalTableList[index]}/>
                </Container>
            }

            <div className='container-fluid table_wrapper'>
                {show === true ?
                    <>
                        <Row className='table_row_header'>
                            <Col className='table_column_header d-flex align-items-center justify-content-center'>Параметры
                                качества</Col>
                            <Col
                                className='table_column_header_dictionary d-flex align-items-center justify-content-center'>Требования
                                к граничным значениям</Col>
                            {check && internalTable.internalTable.map((tableItem) =>
                                <Col
                                    className='table_column_headers d-flex align-items-center justify-content-center'>Значения</Col>)}
                        </Row>
                        {tableRow.map((item, i) =>
                            <TableHead item={item} index={i} dataTable={renderCol}/>
                        )}
                    </>
                    :
                    <>
                        <Row className='table_row_header'>
                            <Col className='table_column_header d-flex align-items-center justify-content-center'>Федеральный
                                округ</Col>
                            <Col
                                className='table_column_header_second d-flex align-items-center justify-content-center'>Место
                                проведения
                                контроля</Col>
                            <Col className='table_column_header d-flex align-items-center justify-content-center'>Дата
                                начала</Col>
                            <Col
                                className='table_column_header_second d-flex align-items-center justify-content-center'>Дата
                                конца</Col>
                            <Col
                                className='table_column_header d-flex align-items-center justify-content-center'>Посмотреть</Col>
                        </Row>
                        {externalTableList.map((item, i) => <TableItem openTable={openTable} getIndex={getIndex}
                                                                       index={i} dataTable={item}/>)}
                    </>
                }
            </div>

        </div>
    );
};

export default observer(Table);