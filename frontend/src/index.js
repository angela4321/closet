import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './home/home'
import Inventory from './inventory/inventory'
import Outfits from './outfits/outfits'
import cart from './cart/cart'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/inventory' component={Inventory}/>
        <Route path='/outfits' component={Outfits}/>
        <Route path='/cart' component={cart}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
