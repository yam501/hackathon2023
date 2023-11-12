import {keys} from 'mobx';
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputUi from './InputUi';

const TableHead = ({item, dataTable, index, ...props}) => {
    const [colValue, setColValue] = useState('');

    const [nameItem, setNameItem] = useState(
        {
            "companyName": "Компании",
            "voiceServiceNonAcessibility": "Доля неуспешных попыток установления голосового соединения  (Voice Service Non-Acessibility ) [%] ",
            "voiceServiceCutOffRatio": "Доля обрывов голосовых соединений ( Voice Service Cut-off Ratio) [%]",
            "speechQualityonCallbasis": "Средняя разборчивость речи на соединение (Speech Quality on Call basis (MOS POLQA))",
            "negativeMOSSamplesRatio":"Доля голосовых соединений с низкой разборчивостью речи (Negative MOS samples Ratio,MOS POLQA < 2,6) [%]",

            "undeliveredSMSRatio": "Доля недоставленных SMS сообщений [%]",
            "averageSMSTime": "Среднее время доставки SMS сообщений [сек]",


            "HTTPSessionFailureRatio": "Доля неуспешных сессий по протоколу HTTP (HTTP Session Failure Ratio) [%]",
            "HTTPULMeanUserDataRate": "Среднее значение скорости передачи данных от абонента (HTTP UL Mean User Data Rate) [kbit/sec]",
            "HTTPDLMeanUserDataRate": "Среднее значение скорости передачи данных к абоненту (HTTP DL Mean User Data Rate) [kbit/sec]",
            "HTTPSessionTime": "Продолжительность успешной сессии (HTTP Session Time) [s]",

            "testVoiceConnectionQuantity": "Общее количество тестовых голосовых соединений",
            "POLQA": "Общее количество голосовых последовательностей в оцениваемых соединениях (POLQA)",
            "negativeMOSSamplesCount": "Количество голосовых соединений с низкой разборчивостью (Negative MOS samples Count, MOS POLQA<2,6)[%]",
            "SMSQuantity": "Общее количество отправленных SMS - сообщений",
            "quantityConnection": "Общее количество попыток соединений с сервером передачи данных HTTP (Загрузка файлов)",
            "quantitySessions": "Общее количество тестовых сессий по протоколу HTTP (Web-browsing)",
        }
    )

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
            <Col className='col-3 table_column_item'>{nameItem[item]}</Col>
            <Col className='col-2 table_column_dictionary table_column_values'>{dictionary[item]}</Col>
            {dataTable.map(tableItem => <Col className='col-2 table_column_values'>
                <InputUi  boundVal={dictionary[item] ? [dictionary[item].split('').splice(9).join(''), dictionary[item].split(' ').splice(0, 2).join(' ')] : false} inputVal={tableItem[item]} />
            </Col>)}
    </Row>

    );
};

export default TableHead;