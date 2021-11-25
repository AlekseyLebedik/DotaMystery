import React from 'react';
import './Friend.css';

import Field from './Field/Field';

import oneIcon from './img/1.jpg';
import dragonRank from './img/rank/dragon.png';

import twoIcon from './img/2.jpg';
import eagleRank from './img/rank/eagle.png';

import threeIcon from './img/3.jpg';
import snakeRank from './img/rank/snake.png';

import fourIcon from './img/4.jpg';
import wolfRank from './img/rank/wolf.png';

import fiveIcon from './img/5.jpg';
import sixIcon from './img/6.jpg';






const friendArray = [
                        {id:1, img:oneIcon, rank: dragonRank, name:"Dogma", online:false , src:"dogma"},
                        {id:2, img:twoIcon, rank: eagleRank, name:"Bloodray", online:false, src:"bloodray"},
                        {id:3, img:threeIcon, rank: snakeRank, name:"Runemane", online:true, src:"runemane"},
                        {id:4, img:fourIcon, rank: wolfRank, name:"Quashat", online:true, src:"quashat"},
                        {id:5, img:fiveIcon, rank: dragonRank, name:"Amar_Hayam", online:true, src:"amar_hayam"},
                        {id:6, img:sixIcon, rank: dragonRank, name:"Mavrodiy", online:true, src:"mavrodiy"}
                    ]


const Friends = () => {
    return(
        <div className="friend">
            <span className="container-title">ДРУЗЬЯ</span>
            <hr className="hr_friend"/>
            <div className="friends__container"> 
                {friendArray.map(item => <Field itemsFriends = {item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default Friends;