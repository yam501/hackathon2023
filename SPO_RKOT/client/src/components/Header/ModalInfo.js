import React from 'react';
import './modalInfo.css'

const ModalInfo = ({show}) => {


    return (
        <div onClick={show} className="modal">
            <div className="modal-content">
                <span onClick={show} className="closeModal">&times;</span>
                <p>Кнопка «Обновить» предназначена для ручной, повторной или
                    принудительной инициализации подключения, а также получения данных из
                    БД</p>
                <p>Кнопка «Добавить» предназначена, для добавление xls и xlsx файла</p>
            </div>
        </div>
    );
};

export default ModalInfo;