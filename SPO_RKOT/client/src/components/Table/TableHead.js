import {keys} from 'mobx';
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputUi from './InputUi';

const TableHead = ({item, dataTable, index, ...props}) => {
    const [dictionary, setDictionary] = useState(
        {
            'voiceServiceNonAcessibility': 'Не более 5',
            'voiceServiceCutOffRatio': 'Не более 5',
            'speechQualityonCallbasis': 'Не менее 2.5',
            'HTTPDLMeanUserDataRate': 'Не менее 80'
        }
    )
        
    
    return (
    <Row className='g-1 table_row_header'>
            <Col className='col-3 table_column_item'>{item}</Col>
            <Col className='col-2 table_column_dictionary table_column_values'>{dictionary[item]}</Col>
            {dataTable.map(tableItem => <Col className='col-1 table_column_values'>
                <InputUi  boundVal={dictionary[item] ? [dictionary[item].split('').splice(9).join(''), dictionary[item].split(' ').splice(0, 2).join(' ')] : false} inputVal={tableItem[item]} />
            </Col>)}
    </Row>

    );
};

export default TableHead;