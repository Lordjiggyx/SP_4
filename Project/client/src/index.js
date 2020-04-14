import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//Allows for route manipulation
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//Components
import Landing from "../src/Components/Landing"
import Register from "./Components/Login_Register/Register"
import Login from './Components/Login_Register/Login';
import alogin from './Components/Login_Register/alogin';
import cLogin from './Components/Login_Register/cLogin';
// import title from './Components/Search/title'
// import category from './Components/Search/category'
// import manu from './Components/Search/manu'
import Shop from "./Components/Shop"


const routes =(
  <Router>
    <div>
      <Route exact path = "/" component ={Landing}/>
      <Route path = "/Register" component ={Register}/>
      <Route path = "/Login" component={Login}/>
      <Route path = "/aLogin" component={alogin}/>
      <Route path = "/cLogin" component={cLogin}/>
      <Route path = "/Shop" component={Shop}/>
      {/* <Route path = "/sBytitle" component={title}/>
      <Route path = "/sByCategory" component={category}/>
      <Route path = "/sByManu" component={manu}/> */}
      
      
    </div>
  </Router>
)


ReactDOM.render(routes,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
