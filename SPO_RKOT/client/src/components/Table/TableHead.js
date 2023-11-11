import {keys} from 'mobx';
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TableHead = ({item, dataTable, index, ...props}) => {
    const [colValue, setColValue] = useState('');
    
    return (
        <Row>
        <Col>{item}</Col>
        <Col></Col>
        {dataTable.map(tableItem => <Col><input key={tableItem.id} value={colValue === '' ? tableItem[item] : colValue} onChange={e => setColValue(e.target.value)}/></Col>)}
    </Row>
    );
};

export default TableHead;