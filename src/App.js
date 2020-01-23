import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import Header from './components/Header/Header';

const App = () => {

  return(
    <div className="main">
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path ="/shop" component={ShopPage} />
        </Switch>
     
    </div>
  )
}

export default App;