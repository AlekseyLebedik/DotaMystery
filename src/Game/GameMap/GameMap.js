import React from 'react';
import './GameMap.css';


import DierMap from './Material/dire/jpg/maps.jpg';

// Картинки Активных


const GameMap = (props) =>{
    let sidePlayers = "Dire";

    return(
            <div className="GameMap" style={ sidePlayers=="Dire" ? { backgroundImage: `url(${DierMap})`}: null}>

            </div>
    )
}



export default GameMap;