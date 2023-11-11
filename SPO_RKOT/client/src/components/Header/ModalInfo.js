import React from 'react';
import './modalInfo.css'

const ModalInfo = ({ show }) => {


    return (
        <div onClick={show} className="modal">
            <div className="modal-content">
                <span onClick={show} className="closeModal"></span>
                <p>Загрузить - предназначена для загрузки excel таблицы на сайт </p>
                <p>Обновить - повторно или принудительно инициализирует подключение к базе данных</p>
                <p>Просмотреть на ячейке - позволяет открыть и просмотреть данные за конкретный период,
                    а также изменить их, если необходимо </p>
            </div>
        </div>
    );
};

export default ModalInfo;