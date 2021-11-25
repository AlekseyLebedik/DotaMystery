import React from 'react';
import './SideNavigation.css';

import bg from './img/bg.png';
import one from './img/Invo.png';
import two from './img/Tide.png';
import three from './img/Win.png';
import rank from './img/wolf.png';

function handleClickEmpty(){
    let sideEmpty = document.getElementsByClassName('SideNavigation')[0];
    sideEmpty.classList.add('hide');
    setTimeout(function(){
        sideEmpty.classList = "close"
    },250)
    let elementNav = document.getElementsByClassName('Navigation-left')[0]
    elementNav.classList.add('hide');
    setTimeout(function(){
        elementNav.classList = "close"
    },250)
    
}


const SideNavigation = (props)=>{
    let expirions = 50

    return(
        <>
            <div className="SideNavigation" onClick={()=> handleClickEmpty()}/>
            <div className="Navigation-left" style={{backgroundImage: `url(${bg})`}}>
                    <div className="block-avatar">
                        <img src={props.avatar} alt="avatar" className="avatar-left"/>
                        <i className="fas fa-circle"/>
                    </div>
                    
                    <div className="username-nav">
                        Emalkay | <span>36</span>
                    </div>

                    <div className="exp">
                        {expirions== 0 ? <div className="xpBar"></div>:null}
                        {expirions== 10 ? <div className="xpBar"><img src={props.bar} alt='xp' className="expiriant ten"/></div>:null}
                        {expirions== 30 ? <div className="xpBar"><img src={props.bar} alt='xp' className="expiriant three"/></div>:null}
                        {expirions== 50 ? <div className="xpBar"><img src={props.bar} alt='xp' className="expiriant five"/></div>:null}
                        {expirions== 70 ? <div className="xpBar"><img src={props.bar} alt='xp' className="expiriant seven"/></div>:null}
                        {expirions== 90 ? <div className="xpBar"><img src={props.bar} alt='xp' className="expiriant nine"/></div>:null}
                        <span/>
                    </div>
                    <div className="choice-hero">
                         <img src={one} alt="hero" width="70px" height="70px"/>
                         <img src={two} alt="hero" width="70px" height="70px"/>
                         <img src={three} alt="hero" width="70px" height="70px"/>
                    </div>
                    <div className="inform-block">
                        <p className="item">ИГР СЫГРАНО<span>487</span></p>
                        <p className="item">ПРОЦЕНТ ПОБЕД<span>87%</span></p>
                        <p className="item">СЕРЕБРА ЗАРАБОТАНО<span>21 398</span></p>
                        <p className="item">РОШАНОВ УБИТО<span>68</span></p>
                        <p className="br"/>
                    </div>
                    <div className="rank">
                        <div className="rank-text">
                            <span>4</span>
                            <span>МЕСТО В РЕЙТИНГЕ</span>
                        </div>
                        <img src={rank} alt="rank"/>
                    </div>
            </div>
        </>
    )
}


export default SideNavigation;