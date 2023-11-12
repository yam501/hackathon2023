import React, {useState} from 'react';
import ButtonUI from '../ButtonUI';
import './header.css'
import ModalInfo from "./ModalInfo";

const Header = ({handleFile, ...props}) => {

    const  [show, setShow] = useState(false);

    const showModal = () => {
        setShow(!show)
    }

    return (
        <div className='header'>
            {show ?
                <ModalInfo show={showModal}/>
                :
                <></>
            }

            <div className='header_box_content'>
                <div className='header_title'>
                    <span className='header_title_text'>СПО РКОТ</span>
                </div>
                <div className='header_btn_box'>
                <ButtonUI className="header_btn">
                    <input id='file' className='table_upload_file' type='file' onChange={e => handleFile(e)} accept=".xlsx, .xls" multiple/>
                    <label for='file' className='table_upload_btn'>Загрузить</label>
                </ButtonUI>
                    <ButtonUI onClick={() => setShow(!show)} className='header_btn'>Информация</ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default Header;