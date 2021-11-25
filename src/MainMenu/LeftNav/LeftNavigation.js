import React from 'react';
import './LeftNavigation.css';
import {Link} from 'react-router-dom';



const LeftNavigation  = ()=>{
    return(
        <div className = "nav-left">
                    <Link to='game' className="nav-left__items">Играть</Link>
                    <Link to='shop' className="nav-left__items">Магазин</Link>
                    <Link to='stock' className="nav-left__items">Инвентарь</Link>
                    <Link to='FAQ' className="nav-left__items">FAQ</Link>
        </div>
    )
}


export default LeftNavigation