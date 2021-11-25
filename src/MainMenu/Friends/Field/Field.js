import React from 'react';
import './Field.css';



const Field = (props) => { 
   return( 
       <>
       {props.itemsFriends.online ? <div className="field">
                                        <img src={props.itemsFriends.img} alt={props.itemsFriends.src} className="field__avatar"/>
                                        <div className="field__inform">
                                            <div className="field__username">
                                                <span className="username">{props.itemsFriends.name}</span>
                                                <span className="online"><span>&#8226;</span> В сети</span>
                                            </div>
                                            <img src={props.itemsFriends.rank} alt={props.itemsFriends.src} className="field__rank"/>
                                        </div>
                                        <i className="fal fa-envelope"/>
                                    </div>:null}
        </>
    )
}


export default Field;