//react basis
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './store';
//router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//components
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Caloryform from './components/Caloryform';
import Users from './components/Users';
import UpdateCalory from './components/UpdateCalory';


const Header = () => {
  return(
    <div className="App">
      <header className="App-header" >
      Calory Tracker
      <a href="/login" class="btn btn-login btn-sm">Login</a>
      <a href="/register" class="btn btn-signin btn-sm">Signin</a>
      </header>
      <p className="App-intro">
        What have you eaten today?
      </p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={'/~dachskat/CaloryTracker'}>
          <div className="App"> 
            <Route path="/" component={Header} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/home" component={Caloryform} />
            <Route path="/calory/:caloryid" component={UpdateCalory} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
