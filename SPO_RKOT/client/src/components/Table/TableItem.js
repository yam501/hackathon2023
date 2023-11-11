import React, { useState } from 'react';
import ButtonUI from '../ButtonUI';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const TableItem = ({openTable, index, getIndex, dataTable, ...props}) => {
    const openView = () => {
        openTable();
        getIndex(index, dataTable.id);
    }
    return (
        <Row>
           <Col className='table_column'>{dataTable.district}</Col> 
           <Col className='table_column'>{dataTable.place}</Col> 
           <Col className='table_column'> {dataTable.startDate}</Col> 
           <Col className='table_column'> {dataTable.endDate}</Col> 
           <Col className='table_column table_btn_box'>
                <span className='table_column_btn'>
                <ButtonUI className="table_item_btn" onClick={openView}>Посмотреть</ButtonUI>
                </span>
            </Col>
        </Row>

    );
};

export default TableItem;