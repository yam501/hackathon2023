import React, { useContext, useState } from 'react';
import ButtonUI from '../ButtonUI';
import './informPanel.css'
import { Context } from '../..';
const InformPanel = ({openTable, changeDataById, list, dataTable, ...props}) => {
    const {externalTable} = useContext(Context)
    const [locationValue, setLocationValue] = useState(dataTable.district)
    const [pointValue, setPointValue] = useState(dataTable.place)
    const [startDateValue, setStartDateValue] = useState(dataTable.startDate)
    const [finishDateValue, setFinishDateValue] = useState(dataTable.endDate)

    const changeAllDataById = async () => {
        await list.map((item,i) => {
            changeDataById(i, item.id)
        })
    }

    const changeExternalDataById = async () => {
        await externalTable.changeDataById(dataTable.id, locationValue, pointValue, startDateValue, finishDateValue)
    }

    return (
        <div className='inform_panel mb-3'>
            <div className='inform_panel_box'>
                <div className='location_section_box'>
                    <div className='location_section'>
                        <span className='location_title'>Федеральный округ:</span>
                        <input className='location_text' value={locationValue} onChange={e => setLocationValue(e.target.value)} />
                    </div>
                    <div className='point_section'>
                        <span className='point_title'>Место проведения контроля:</span>
                        <input className='point_text' value={pointValue} onChange={e => setPointValue(e.target.value)} />
                    </div>
                </div>
                <div className='date_section_box'>
                    <div className='date_section'>
                        <span className='date_title'>Период проведения контроля:</span>
                    </div>
                    <div className='date_info_section'>
                        <span className='date_text'>С:</span>
                        <input className='date_date' type='date' value={startDateValue} onChange={e => setStartDateValue(e.target.value)} />
                        <span className='date_text'>До:</span>
                        <input className='date_date' type='date' value={finishDateValue} onChange={e => setFinishDateValue(e.target.value)} />
                    </div>
                </div>
                <div className='btns_section'>
                    <ButtonUI className='inform_panel_btn' onClick={changeAllDataById}>Сохранить</ButtonUI>
                    <ButtonUI onClick={() => openTable(false)} className='inform_panel_btn'>Отмена</ButtonUI>
                </div>
            </div>
        </div>
    );
};
// changeExternalDataById
export default InformPanel;