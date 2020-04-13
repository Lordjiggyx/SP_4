import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Allows for route manipulation
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//Components
import Landing from "../src/Components/Landing"


const routes =(
  <Router>
    <div>
      <Route exact path = "/" component ={Landing}/>
    </div>
  </Router>
)


ReactDOM.render(routes,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
