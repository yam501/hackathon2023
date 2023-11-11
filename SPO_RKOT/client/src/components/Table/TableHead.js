import {keys} from 'mobx';
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TableHead = ({item, dataTable, index, ...props}) => {
    const [colValue, setColValue] = useState('');
    const [dictionary, setDictionary] = useState(
        {
            'voiceServiceNonAcessibility': 'Не более 5',
            'voiceServiceCutOffRatio': 'Не более 5',
            'speechQualityonCallbasis': 'Не менее 2.5',
            'HTTPDLMeanUserDataRate': 'Не менее 80'
        }
    )
    return (
        <Row>
        <Col>{item}</Col>
        <Col>{dictionary[item]}</Col>
        {dataTable.map(tableItem => <Col><input key={tableItem.id} value={colValue === '' ? tableItem[item] : colValue} onChange={e => setColValue(e.target.value)}/></Col>)}
    </Row>
    );
};

export default TableHead;