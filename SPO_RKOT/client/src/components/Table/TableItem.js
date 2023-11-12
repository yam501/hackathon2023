import React, { useContext, useState } from 'react';
import ButtonUI from '../ButtonUI';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ExternalTableStore from '../../store/ExternalTableStore';
import { Context } from '../..';

const TableItem = ({ openTable, index, getIndex, dataTable, getDataList, ...props }) => {

    const [confirm, setConfirm] = useState(false);

    const { externalTable } = useContext(Context)
    const openView = () => {
        openTable(true);
        getIndex(index, dataTable.id);
    }

    const deleteDataTable = async () => {
        await externalTable.delete(dataTable.id)
        getDataList()
        setConfirm(false)
    }

    return (
        <>
            <Row className='table_item_row'>
                <Col className='table_column d-flex align-items-center justify-content-center'
                    style={{ textAlign: "center", marginLeft: '7px' }}>{dataTable.district}</Col>
                <Col
                    className='table_column_second d-flex align-items-center justify-content-center'>{dataTable.place}</Col>
                <Col
                    className='table_column d-flex align-items-center justify-content-center'> {dataTable.startDate}</Col>
                <Col
                    className='table_column_second d-flex align-items-center justify-content-center'> {dataTable.endDate}</Col>
                <Col className='table_btn_box'>
                    <span className='table_column_btn'>
                        <ButtonUI className="table_item_btn" onClick={openView}>Посмотреть</ButtonUI>
                        <ButtonUI className="table_item_btn" onClick={() => setConfirm(true)}>Удалить</ButtonUI>
                    </span>
                </Col>
            </Row>
            <div className='palka'></div>
            {confirm && 
            <div>
                <span>Вы точно хотите удалить это?</span>
                <ButtonUI className="table_item_btn ms-2" onClick={deleteDataTable}>Да</ButtonUI>
                <ButtonUI className="table_item_btn ms-2" onClick={() => setConfirm(false)}>Отмена</ButtonUI>
            </div>}
        </>

    );
};

export default TableItem;