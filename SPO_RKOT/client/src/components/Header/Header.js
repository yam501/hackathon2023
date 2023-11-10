import React from 'react';
import ButtonUI from '../ButtonUI';
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header_box_content'>
                <div className='header_title'>
                    <span className='header_title_text'>СПО РКОТ</span>
                </div>
                <div className='header_btn_box'>
                    <ButtonUI className='header_btn'>Обновить</ButtonUI>
                    <ButtonUI className='header_btn'>Информация</ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default Header;