import React from 'react';
import './style.css';


function Popup({ visibility, onClick }){

    return(
        <div className="popup" style={{ display: visibility ? 'flex' : 'none'}}>
            <div className="message">
                <div className="message_header">
                    <span onClick={() => onClick(false)}>X</span>
                </div>
                <div className="message_body">
                    <p>This project was created by Jeyson Villalobos.</p>
                </div>
            </div>
        </div>
    );

}

export default Popup;