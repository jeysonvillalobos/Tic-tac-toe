import React from 'react';
import './style.css'

function Register(){

    return(
        <div className="register">
            <div className="register_header">
                <h2>Registers</h2>
            </div>
            <div className="register_main">
                <div className="register_data">
                    <ol>
                        <li>No records</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Register;