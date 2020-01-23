import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import HatsPage from './pages/HatsPage/HatsPage'



const App = () => {

  return(
    <div className="main">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path ="/hats" component={HatsPage} />
        </Switch>
     
    </div>
  )
}

export default App;