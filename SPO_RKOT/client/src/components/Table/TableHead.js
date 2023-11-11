import { keys } from 'mobx';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TableHead = ({show, dataTable, dependArray, index, ...props}) => {
    const [parNames, setParNames] = useState([])
    const [values, setValues] = useState([])
    const [tableRow, setTableRow] = useState([]);
    const [indexOfPar, setIndexOfPar] = useState(0)
    const dynamicParNames = () => {
        setParNames(Object.keys(dataTable).splice(2))
    }
    const dynamicValues = () => {
        setValues(Object.values(dataTable).splice(2))
    }


    useEffect(() => {
        dynamicParNames();
        dynamicValues();
    }, [dependArray.length])


    return (
        <Row>
            
        </Row>
    );
};

export default TableHead;