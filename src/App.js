import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Posts from "./components/Posts";
import Main from "./components/Main"
import Profile from "./components/Profil"


class App extends Component{
  render(){
    return (
      <Router >

        <div className="App">
          <div className="main">
            <Route exact path="/" component={Main} />
            <Route exact path="/profile" component={Profile} />        
          </div>
        </div>

    </Router>
    );
  }
}

export default App;
