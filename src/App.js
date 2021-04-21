import React from 'react';

import Header from './componets/header';


function App(){

    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="sub_container">
                    <div className="register"></div>
                    <div className="game"></div>
                </div>
            </div>
        </div>
    );

}

export default App;
