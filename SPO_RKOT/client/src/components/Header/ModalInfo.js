import React from 'react';
import './modalInfo.css'

const ModalInfo = ({ show }) => {


    return (
        <div onClick={show} className="modal">
            <div className="modal-content">
                <span onClick={show} className="closeModal"></span>
                <p>Загрузить - предназначена для загрузки excel таблицы на сайт (можно выбрать сразу несколько файлов) </p>
                <p>Просмотреть на ячейке - позволяет открыть и просмотреть данные за конкретный период,
                    а также изменить их, если необходимо </p>
                <p>Кпнока Удалить удалит соответствующий блок из базы данных</p>
                <p>В поисковой панели можно найти блок по конкретным данным, сортировка при этом происходит по дате.
                    Сортировать можно как по возрастанию так и по убыванию
                </p>
            </div>
        </div>
    );
};

export default ModalInfo;