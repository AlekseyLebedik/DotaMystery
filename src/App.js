import React from 'react';
import './App.css';

import { Route , Switch} from "react-router-dom";

import Authenticate from './Authenticate/Authenticate';
import ChoiceSide from './ChoiceSide/ChoiceSide';
import MainMenu from './MainMenu/MainMenu';
import GameMap from './Game/GameMap/GameMap';




function App() {
  return (
    <Switch>
        <Route exact path='/' component={Authenticate}/>
        <Route  path='/choice-side' component={ChoiceSide}/>
        <Route  path='/main-menu' component={MainMenu}/>
        <Route path='/game' component={GameMap}/>
        <Route path='/shop' component={MainMenu}/>
        <Route path='/stock' component={MainMenu}/>
        <Route path='/FAQ' component={MainMenu}/>
    </Switch>
  );
}

export default App;
