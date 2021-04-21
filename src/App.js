import React,{ useState,useEffect } from 'react';
import './App.css';

import Header from './componets/header';
import Square from './componets/square';
import Register from './componets/register';

const state = ['','','','','','','','',''];

function App(){
    const [turn,setTurn] = useState(true);
    const [gameState,setGameState] = useState(state);

    const handleClick = (index) => {
        let strings = Array.from(gameState);
        if (strings[index]) return;
        strings[index] = turn ? "X" : "O";
        setGameState(strings);
        setTurn(!turn);
    }

    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="turn">
                    <h2>Player 1</h2>
                    <h2 className="type">X</h2>
                </div> 
                <div className="sub_container">
                    <Register />
                    <div className="game">
                    <div className="row">
                            <Square type={gameState[0]} onClick={() => handleClick(0)} />
                            <Square type={gameState[1]} onClick={() => handleClick(1)} />
                            <Square type={gameState[2]} onClick={() => handleClick(2)} />
                        </div>
                        <div className="row">
                            <Square type={gameState[3]} onClick={() => handleClick(3)} />
                            <Square type={gameState[4]} onClick={() => handleClick(4)} />
                            <Square type={gameState[5]} onClick={() => handleClick(5)} />
                        </div>
                        <div className="row">
                            <Square type={gameState[6]} onClick={() => handleClick(6)} />
                            <Square type={gameState[7]} onClick={() => handleClick(7)} />
                            <Square type={gameState[8]} onClick={() => handleClick(8)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;
