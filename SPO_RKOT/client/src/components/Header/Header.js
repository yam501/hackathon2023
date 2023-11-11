import React, {useState} from 'react';
import ButtonUI from '../ButtonUI';
import './header.css'
import ModalInfo from "./ModalInfo";

const Header = () => {

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
                    <ButtonUI className='header_btn'>Обновить</ButtonUI>
                    <ButtonUI onClick={() => setShow(!show)} className='header_btn'>Информация</ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default Header;