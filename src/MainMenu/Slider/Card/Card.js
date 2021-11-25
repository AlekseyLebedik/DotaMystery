import React,{useEffect}from 'react';
import './Card.css';

import BackCardImg from './img/backCard.png';






const Card = (props) => {
    return (
        <div className={'Card '} id={props.itemCard.id}>
            <img src={props.itemCard['img']} className={"card__img " } />
            <div className="total-card-description">
                <div className={'card__description '}>
                    {props.itemCard['title']}
                </div>
                <div className={'card__skills '}>
                    {props.itemCard['skills'].map( (item,index )=> index==0 ? <img src={item.img} key={item.id} className={"card__skill active"} alt={item.title} />:<img src={item.img} key={item.id} className={"card__skill "} alt={item.title} width="80%" height="50%"/>)}
                </div>
            </div>
        </div>
    )
}


export default Card;