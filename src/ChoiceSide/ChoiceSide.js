import React from 'react';

import './ChoiceSide.css';
import Button from '../UI/btn/Button';


import Backgroud from './img/bg.png';
import logo from './img/LogoDM.png';
import titleKanna from './img/Kanna/KannaTitle.png';
import titlePrellex from './img/Prellex/PrellexTitle.png';
import imgKanna from './img/Kanna/Kanna.png';
import imgPrellex from './img/Prellex/Prellex.png';

import kannaSkills1 from './img/Kanna/kanna1.png';
import kannaSkills2 from './img/Kanna/Kanna2.png';
import kannaSkills3 from './img/Kanna/Kanna3.png';

import prellexSkills1 from './img/Prellex/Prellex1.png';
import prellexSkills2 from './img/Prellex/Prellex2.png';
import prellexSkills3 from './img/Prellex/Prellex3.png';




const PreviewPage = ()=>{
    return(
        <div className="ChoiceSide" style={{backgroundImage: `url(${Backgroud})`}}>
            <img src={logo} className="logo-choice"/>
            <div className="kanna">
                <img src={titleKanna} className="title-choice"/>
                <img src={imgKanna} className="kanna-image"/>
                <div className="kanna-skills skills">
                    <img src={kannaSkills1}/>
                    <img src={kannaSkills2}/>
                    <img src={kannaSkills3}/>
                </div>
                <Button link={'/'} title={'ВЫБРАТЬ'} style={{height:'40px',paddingTop:'15px',width:'80%',fontSize:"1.5rem"}}/>
            </div>
            <div className="line-center"/>
            <div className="prellex">
                <img src={titlePrellex} className="title-choice"/>
                <img src={imgPrellex} className="prellex-image"/>
                <div className="prellex-skills skills">
                    <img src={prellexSkills1}/>
                    <img src={prellexSkills2}/>
                    <img src={prellexSkills3}/>
                </div>
                <Button link={'/'} title={'ВЫБРАТЬ'} style={{height:'40px',paddingTop:'15px', width:'80%',fontSize:"1.5rem"}}/>
            </div>
        </div>
    )

}


export default PreviewPage;