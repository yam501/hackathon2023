import React from 'react';
import ButtonUI from '../ButtonUI';
import './informPanel.css'
const InformPanel = ({openTable, ...props}) => {
    return (
        <div className='inform_panel'>
            <div className='inform_panel_box'>
                <div className='location_section_box'>
                    <div className='location_section'>
                        <span className='location_title'>Федеральный округ(ФО):</span>
                        <span className='location_text'>Название</span>
                    </div>
                    <div className='point_section'>
                        <span className='point_title'>Место проведения контроля:</span>
                        <span className='point_text'>Область, город</span>
                    </div>
                </div>
                <div className='date_section_box'>
                    <div className='date_section'>
                        <span className='date_title'>Период проведения контроля:</span>
                    </div>
                    <div className='date_info_section'>
                        <span className='date_text'>С:</span>
                        <span className='date_date'>01.01.2001</span>
                        <span className='date_text'>До:</span>
                        <span className='date_date'>01.01.2002</span>
                    </div>
                </div>
                <div className='btns_section'>
                    <ButtonUI className='inform_panel_btn'>Сохранить</ButtonUI>
                    <ButtonUI onClick={openTable} className='inform_panel_btn'>Отмена</ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default InformPanel;