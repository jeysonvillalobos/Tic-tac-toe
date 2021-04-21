import React,{ useState,useEffect } from 'react';
import './App.css';
import './App.responsive.css';

import Header from './componets/header';
import Square from './componets/square';
import Register from './componets/register';
import Winner from './utils/winner';
import Popup from './componets/popup';

const state = ['','','','','','','','',''];

function App(){
    const [turn,setTurn] = useState(true);
    const [register,setRegister] = useState([]);
    const [gameState,setGameState] = useState(state);
    const [popup,setPopup] = useState(false);

    const handleClick = (index) => {
        let strings = Array.from(gameState);
        if (strings[index]) return;
        strings[index] = turn ? "X" : "O";
        setGameState(strings);
        setTurn(!turn);
    }

    useEffect(() => {
        let winner = Winner(gameState);
        if (winner) {
            restartGame();
            setRegister([...register, winner]);
        }

        if(!gameState.includes("")){
            restartGame();
            setRegister([...register, 'Tie']);
        }
        
    }, [gameState]);


    const restartGame = () => {
        setGameState(state)
    }

    return (
        <div className="App">
            <Header restart={()=> restartGame()} showPopup={() => setPopup(true)} />
            <div className="container">
                <div className="turn">
                    <h2>{ turn ? 'Player 1' : 'Player 2' }</h2>
                    <h2 className="type">{ turn ? 'X' : 'O' }</h2>
                </div> 
                <div className="sub_container">
                    <Register winners={register} />
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
            <Popup visibility={popup} onClick={(data) => setPopup(data)} />
        </div>
    );

}

export default App;
