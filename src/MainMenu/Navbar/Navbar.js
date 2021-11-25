import React, {useState} from 'react';
import './Navbar.css';

import SideNavigation from './SideNavigation/SideNavigation';

import twentyExp from '../img/exp/1.png';




const Navbar = (props) =>{

    let [stateNavbar, setStateNavbar] = useState({exp:50, sideBar:false})

    const handleNavbarClick = () => {
        let windowSide = document.getElementsByClassName('windowSide')[0];
        if(!stateNavbar.sideBar){
            windowSide.classList.add("open");
        }
        setTimeout(() =>{
            if(!stateNavbar.sideBar){
                setStateNavbar({...stateNavbar,sideBar:true})
                windowSide.classList.remove("open");
            }else{
                setStateNavbar({...stateNavbar,sideBar:false})
                windowSide.classList.remove("open");
            }
        },400)
    } 
    return(
        <>
        <div className="windowSide">

        </div>
         { stateNavbar.sideBar ? <SideNavigation avatar={props.avatar} bar = {twentyExp}/> : null}
            <div className="top-navbar">
                <div className="navbar__avatar-data">
                    <img src={props.avatar} alt ="avatar" onClick={()=>handleNavbarClick()} className="avatar"/>
                    <div className="data__text">
                       <div className="username">
                           Emalkay
                       </div>
                       <div className="level">
                          УРОВЕНЬ<span>36</span>
                       </div>
                       {stateNavbar.exp== 0 ? <div className="xpBar"></div>:null}
                       {stateNavbar.exp== 10 ? <div className="xpBar"><img src={twentyExp} alt='xp' className="expiriant ten"/></div>:null}
                       {stateNavbar.exp== 30 ? <div className="xpBar"><img src={twentyExp} alt='xp' className="expiriant three"/></div>:null}
                       {stateNavbar.exp== 50 ? <div className="xpBar"><img src={twentyExp} alt='xp' className="expiriant five"/></div>:null}
                       {stateNavbar.exp== 70 ? <div className="xpBar"><img src={twentyExp} alt='xp' className="expiriant seven"/></div>:null}
                       {stateNavbar.exp== 90 ? <div className="xpBar"><img src={twentyExp} alt='xp' className="expiriant nine"/></div>:null}
                    </div>
                    <img className="flag" src={props.flag} alt="flag"style={{width:"40px", height:"20px"}} />
                </div>
                <hr className="line-to-center"/>
                <div className="navbar__money">
                    <div className="container-gold"> 
                        <img className="gold" src={props.gold} alt="gold"/>
                        <span>100</span>
                    </div>
                    <div className="container-silver"> 
                        <img className="gold" src={props.silver} alt="gold"/>
                        <span>1892</span>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Navbar;