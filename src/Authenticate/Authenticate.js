import React from 'react';
import './Authenticate.css';
import './Statistic.css';



import background from './img/bgDark.png';

import Form from './Forma/Forma';



const Statistic = <div className="Statistic">
                        <div className="Statistic-item"><i className="fas fa-circle"></i>ИГРОКОВ В ОНЛАЙН <span>123</span></div>
                        <div className="Statistic-item"><i className="fas fa-wifi"></i> СТАТУС СЕТИ <span>23 ms</span> </div>
                        <div className="Statistic-item"><i className="fab fa-steam-symbol"></i>СЕРВЕР<span className="server">UA</span></div>
                    </div>

const GameVersion = <div className="Game" style={{color:'white', marginTop:'50px', marginRight:'30px'}}> Game Version | <span style={{color:'red'}}>DM1</span> </div>
 

const Authenticate = () => {
        return(
            <div className="Authentificate" style={{background:`url(${background}) no-repeat 100% 100%`}} >
                {Statistic}
                 <Form/>
                 {GameVersion}
            </div>
            
        )
}


export default Authenticate;