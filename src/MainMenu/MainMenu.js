import React, {useRef} from 'react';
import './MainMenu.css';
import Slider from "./Slider/Slider";
import Friends from "./Friends/Friend";
import Navbar from "./Navbar/Navbar";
import LeftNavigation from "./LeftNav/LeftNavigation";


import background from './img/bg.png';

import tide from './img/card/TD.png';
import tideSkils1 from './img/skils/tide/skills/kr.png';
import tideSkils2 from './img/skils/tide/skills/rv.png';

import elder from './img/card/ET.png';
import elderSkils1 from './img/skils/elder/skills/Es.png';
import elderSkils2 from './img/skils/elder/skills/Ra.png';

import meepo from './img/card/ME.png';
import meepoSkils1 from './img/skils/meepo/skills/Dw.png';
import meepoSkils2 from './img/skils/meepo/skills/Pf.png';

import legga from './img/card/LEG.png';
import legionSkils1 from './img/skils/legion/skills/Dl.png';
import legionSkils2 from './img/skils/legion/skills/Mc.png';

import snipe from './img/card/SNR.png';
import sniperSkils1 from './img/skils/sniper/skills/As.png';
import sniperSkils2 from './img/skils/sniper/skills/Sp.png';


import phantom from './img/card/PA.png';
import phantomSkils1 from './img/skils/phantom/skills/Bl.png';
import phantomSkils2 from './img/skils/phantom/skills/Cg.png';

import sven from './img/card/SV.png';
import svenSkils1 from './img/skils/sven/skills/Gd.png';
import svenSkils2 from './img/skils/sven/skills/Sh.png';

import druid from './img/card/Druid.png';
import druidSkils1 from './img/skils/druid/skills/Sl.png';
import druidSkils2 from './img/skils/druid/skills/Tf.png';

import axe from './img/card/AXE.png';
import axeSkils1 from './img/skils/axe/skills/Bc.png';
import axeSkils2 from './img/skils/axe/skills/Cb.png';

import pl from './img/card/LR.png';
import plSkils1 from './img/skils/pl/skills/Je.png';
import plSkils2 from './img/skils/pl/skills/Dg.png';

import viper from './img/card/VP.png';
import vSkils1 from './img/skils/viper/skills/Nt.png';
import vSkils2 from './img/skils/viper/skills/Vs.png';

import avatar from './img/navbar/avatar.png';
import gold from './img/navbar/gold.png';
import silver from './img/navbar/silver.png';
import flag from './img/navbar/uk.svg';







const MainMenu = () =>{


    var myPack = [
        {"img": meepo, 'id':0,  "skills":[{"img":meepoSkils1, "title":"Three", "id":1}, {"img":meepoSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": tide,  'id':1,  "skills":[{"img":tideSkils1, "title":"Second", "id":1}, {"img":tideSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": viper,  'id':2,  "skills":[{"img":vSkils1, "title":"First", "id":1}, {"img":vSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": elder, 'id':3,  "skills":[{"img":elderSkils1, "title":"Second", "id":1}, {"img":elderSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": legga, 'id':4,  "skills":[{"img":legionSkils1, "title":"Three", "id":1}, {"img":legionSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": snipe, 'id':5, "skills":[{"img":sniperSkils1, "title":"Three", "id":1}, {"img":sniperSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": phantom,  'id':6,  "skills":[{"img":phantomSkils1, "title":"Second", "id":1}, {"img":phantomSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": sven,  'id':7,  "skills":[{"img":svenSkils1, "title":"First", "id":1}, {"img":svenSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": druid, 'id':8,  "skills":[{"img":druidSkils1, "title":"Second", "id":1}, {"img":druidSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": axe, 'id':9,  "skills":[{"img":axeSkils1, "title":"Three", "id":1}, {"img":axeSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`},
        {"img": pl, 'id':10,  "skills":[{"img":plSkils1, "title":"Three", "id":1}, {"img":plSkils2, "title":"Second", "id":2}], "title": `I am no sorcerer's familiar. Rather, I'll take a sorcerer as my pet.`}
    ];

    return(
        <div className="MainMenu" style={{backgroundImage:`url(${background})`, position:"relative"}}>
                <Navbar avatar={avatar} flag={flag} gold={gold} silver={silver}/>
                <div className="slider">
                    <Slider myPack={myPack}/>
                </div>
                <Friends/>
                <LeftNavigation/>
            </div>        
        )


}



export default MainMenu;