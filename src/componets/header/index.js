import React from 'react';
import './style.css';
import './style.responsive.css';

function Header({ restart, showPopup }){
    return(
        <div className="Header">
            <header className="header">
                <div className="div_logo">
                    <img className="logo" src="/images/tic.png" alt=""/>
                    <h1>Tic tac toe</h1>
                </div>
                <ul className="nav_ul">
                    <li onClick={()=> restart()}>
                        <img src="/images/update-arrow.png" alt=""/>
                        <span className="item">Restart</span>
                    </li>
                    <li onClick={()=> showPopup()}>
                        <img src="/images/info.png" alt=""/>
                        <span className="item">About</span>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;