import React from 'react';
import './App.css';

import Header from './componets/header';
import Square from './componets/square';
import Register from './componets/register';


function App(){

    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="turn">
                    <h2>Player 1</h2>
                    <h2>X</h2>
                </div> 
                <div className="sub_container">
                    <Register />
                    <div className="game">
                    <div className="row">
                            <Square />
                            <Square />
                            <Square />
                        </div>
                        <div className="row">
                            <Square />
                            <Square />
                            <Square />
                        </div>
                        <div className="row">
                            <Square />
                            <Square />
                            <Square />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;
