import React from 'react';
import './style.css';
import './style.responsive.css';

import logo from '../../assets/tic.png';
import restartImg from '../../assets/update-arrow.png';
import about from '../../assets/info.png';

function Header({ restart, showPopup }){
    return(
        <div className="Header">
            <header className="header">
                <div className="div_logo">
                    <img className="logo" src={logo} alt=""/>
                    <h1>Tic tac toe</h1>
                </div>
                <ul className="nav_ul">
                    <li onClick={()=> restart()}>
                        <img src={restartImg} alt=""/>
                        <span className="item">Restart</span>
                    </li>
                    <li onClick={()=> showPopup()}>
                        <img src={about} alt=""/>
                        <span className="item">About</span>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;