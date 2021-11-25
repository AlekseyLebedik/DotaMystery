import React, { useState } from 'react';

import flagUkr from './img/Ukr.png';
import flagRus from './img/Ru.png';
import flagBl from './img/Bl.png';
import flagPl from './img/Pl.png';

import './Checkbox.css';


const Checkbox = () => {
    let i = 0;
    const Country = { "0": { "flag": {flagUkr},"title": "УКРАИНА"},
                        "1": { "flag": {flagRus},"title": "РОССИЯ"},
                        "2": { "flag": {flagBl},"title": "БЕЛОРУСЬ"},
                        "3": { "flag": {flagPl},"title": "ПОЛЬША"}
                    }
    const [country, setCountry] = useState(Country['0'])

    const handleChangeCountry = (e) =>{
        
        if(i%2==0){
            let flag = document.getElementById("choiceFlag")
            setTimeout(()=>{
                flag.style.display = 'flex';
            },2000)
           
        }else{
            let flag = document.getElementById("choiceFlag")
            flag.style.display = 'none';
        }
        i++;
    }

    return(
        <div className="Checkbox">
            <div className="title">
                {country['title']}
            </div>
            <div className="img" id='0' style={{backgroundImage:`url(${flagUkr})`, width:'30px', height:'30px'}}/>
            <i className="fas fa-angle-down" onClick={handleChangeCountry} />
            <div className = "choiceCountry" style={{display: 'none'}} id='choiceFlag'>
                 <div className="img" id='1' style={{backgroundImage:`url(${flagRus})`, width:'30px', height:'30px'}}/>
                 <div className="img" id='2' style={{backgroundImage:`url(${flagBl})`, width:'30px', height:'30px'}}/>
                 <div className="img" id='3' style={{backgroundImage:`url(${flagPl})`, width:'30px', height:'30px'}}/>
            </div>
        </div>
    )
}


export default Checkbox;