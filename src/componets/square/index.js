import React from 'react';
import './style.css';

function Square({ type, onClick }){
    return(
        <div onClick={()=> onClick()} className="Square"><span className="xCircle">{type}</span></div>
    );
}

export default Square;
