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
import TableItemList from './TableItemList';

const Table = ({openTable, show, externalTableList,getDataList, ...props}) => {
    const {externalTable, internalTable} = useContext(Context);
    const [tableRow, setTableRow] = useState([])
    const [renderCol, setRenderCol] = useState([])
    const [dataChange, setDataChange] = useState([])
    const [acceptToSend, setAcceptToSend] = useState(false)
    const [check, setCheck] = useState(false)
    const [index, setIndex] = useState(null);
    const [id, setId] = useState(null);
    const getIndex = (i, id) => {
        setIndex(i)
        setId(id)
    }


    const addDataChange = (data) => {
        setDataChange(data)
    }
    const changeAccept = () => setAcceptToSend(true)

    //получение данных для отрисовки таблиц с бд
    const uplod = async () => {
        id !== null && await internalTable.getAllByExternalTableId(id).then(res => setCheck(true)).then(res => {setRenderCol(internalTable.internalTable)})
    }

    const dynamicParNames = () => {
        setTableRow(Object.keys(renderCol[0] ? renderCol[0] : {}).splice(2))
    }

    useEffect(() => {
        uplod()
    }, [id])

    useEffect(() => {
        check && dynamicParNames()
    }, [renderCol.length])

    const changeDataById = async (i, id) => {
       dataChange.length > 0 &&  await internalTable.changeDataById(
            id,
            dataChange[i].companyName,
            dataChange[i].voiceServiceNonAcessibility,
            dataChange[i].voiceServiceCutOffRatio,
            dataChange[i].speechQualityonCallbasis,
            dataChange[i].negativeMOSSamplesRatio,
            dataChange[i].undeliveredSMSRatio,
            dataChange[i].averageSMSTime,
            dataChange[i].HTTPSessionFailureRatio,
            dataChange[i].HTTPULMeanUserDataRate,
            dataChange[i].HTTPDLMeanUserDataRate,
            dataChange[i].HTTPSessionTime,
            dataChange[i].testVoiceConnectionQuantity,
            dataChange[i].POLQA,
            dataChange[i].negativeMOSSamplesCount,
            dataChange[i].SMSQuantity,
            dataChange[i].quantityConnection,
            dataChange[i].quantitySessions
            )
    }


    return (
        <div className='container mb-2'>
            {show &&
                <Container>
                    <InformPanel acceptToSend={acceptToSend} changeDataById={changeDataById} upload={uplod} openTable={openTable} list={renderCol} dataTable={externalTableList[index]}/>
                </Container>
            }

            <div className='table_wrapper'>
                {show ?
                    <div className='table_container'>
                        <Row className='g-1 row-cols-auto table_row_header'>
                            <Col style={{borderTopLeftRadius: '7px'}} className='col-3 table_column_header d-flex align-items-center justify-content-center'>Параметры
                                качества</Col>
                            <Col
                                className='col-2 table_column_header_dictionary d-flex align-items-center justify-content-center'>Требования
                                к граничным значениям</Col>
                            {check && renderCol.map((tableItem, i) =>
                                <>
                                <Col className='col-2 table_column_headers d-flex align-items-center justify-content-center'>Значения</Col>
                                </>
                                )}
                        </Row>
                        {tableRow.map((item, i) =>
                            <TableHead addDataChange={addDataChange} changeAccept={changeAccept} item={item} index={i} key={i} dataTable={renderCol}/>
                        )}
                    </div>
                    :
                    <div className='main_table_container'>
                        <Row className='main_table_row_header'>
                            <Col className='table_column_header_first d-flex align-items-center justify-content-center'>Федеральный
                                округ</Col>
                            <Col
                                className='table_column_header_second d-flex align-items-center justify-content-center'>Место
                                проведения
                                контроля</Col>
                            <Col className='table_column_header_first d-flex align-items-center justify-content-center'>Дата
                                начала</Col>
                            <Col
                                className='table_column_header_second d-flex align-items-center justify-content-center'>Дата
                                конца</Col>
                            <Col
                                className='table_column_header_first d-flex align-items-center justify-content-center'>Посмотреть</Col>
                        </Row>
                        <div className='mt-3 palka'></div>
                        {externalTableList.map((item, i) => <TableItem getDataList={getDataList} openTable={openTable} getIndex={getIndex}
                                                                       index={i} dataTable={item}/>)}
                    </div>
                }
            </div>

        </div>
    );
};

export default observer(Table);

