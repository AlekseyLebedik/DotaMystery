import React from 'react';

import './Forma.css';

import FormImg from './img/two.png';
import FormImgOne from './img/one.png';
import Logo from './img/logo.png';
import face from './img/facebook.png';
import tele from './img/telegram.png';
import inst from './img/instagram.png';

import Checkbox from './Checkbox/Checkbox';
import Button from '../../UI/btn/Button';

const Form = () => { 


    function addHover(boolValue,type){
      let logo = document.getElementById('logo')
        if(boolValue && type == 'logo'){
            setTimeout(() =>{
                logo.className = "logo animate__animated animate__flip";
            },1500)
            
        }else if(!boolValue && type == 'logo'){
                logo.className = "logo";
        }

    }


    return(
        <div className="Forma">
            <div className="logo " style={{backgroundImage: `url(${Logo})`}} id = "logo" onMouseEnter={()=>addHover(true,'logo')} onMouseLeave={()=>addHover(false,'logo')}/>
            <div className="forma">
                <div className="one_img" style={{backgroundImage: `url(${FormImgOne})`, backgroundSize: `100% 100%`}} />
                <div className="two_img" style={{backgroundImage: `url(${FormImg})`, backgroundSize: `100% 100%`}}>
                        <form className="forma-tag">
                        <input type='text' name='username' className="form-tag__input" placeholder="ВВЕДИТЕ ИМЯ"/>
                        <input type='password' name='username' className="form-tag__input" placeholder="ПАРОЛЬ"/>
                        <input type='password' name='username' className="form-tag__input" placeholder="ПОВТОРНЫЙ ПАРОЛЬ"/>
                        <input type='text' name='username' className="form-tag__input" placeholder="ПОЧТА"/>
                        <Checkbox/>
                        <Button link={"/choice-side"} title="ГОТОВО" style={{marginTop:'20px',width:'35%', height:'30px', paddingTop:"5px", borderRadius:"10px"}}/>
                    </form> 
                </div>
            </div>
           
            <div className="socia-icon">
                <a href="#"><img src={face} alt="face"></img></a>
                <a href="#"><img src={inst} alt="face"></img></a>
                <a href="#"><img src={tele} alt="face"></img></a>
            </div>
        </div>
    )
    
}

export default Form;

