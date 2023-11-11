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
        <Row className='table_row_headers'>
            <Col className='table_column_item'>{item}</Col>
            <Col className='table_column_dictionary'>{dictionary[item]}</Col>
            {dataTable.map(tableItem => <Col className='table_column_values'>
                <input className='table_column_input' key={tableItem.id}
                        // Number(tableItem[item]).toFixed(2) вместо tableItem[item], будет округление
                       value={colValue === '' ? tableItem[item] : colValue}
                       onChange={e => setColValue(e.target.value)}/></Col>)}
        </Row>
    );
};

export default TableHead;