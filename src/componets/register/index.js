import React from 'react';
import './style.css';
import './style.responsive.css';

function Register({ winners }){

    return(
        <div className="register">
            <div className="register_header">
                <h2>Registers</h2>
            </div>
            <div className="register_main">
                {
                    winners.length === 0 && (
                        <div className="register_data">
                            <ol>
                                <li>No records</li>
                            </ol>
                        </div>
                    )
                }
                {
                    winners.map((data, index) => (
                        <div key={index} className="register_data">
                            <ol>
                                <li>{
                                    data === 'X' ? 'Player 1' :
                                    data === 'O' ? 'Player 2':
                                    data === 'Tie' && 'Tie'
                                }</li>
                            </ol>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default Register;