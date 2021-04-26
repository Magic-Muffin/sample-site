// import logo from './logo.svg';
import './css/App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Forum from './pages/Forum';
import Showcase from './pages/Showcase';
import Signup from './pages/Signup';
import Login from './pages/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);
  useEffect(()=>{
    let tk = localStorage.getItem("token")
    setToken(tk);
  },[token])

  const loggedIn = ()=>{
    return token === "123";
  }

  return (
    <Router>
      <Header loggedIn={loggedIn()}/>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/forum">
            <Forum/>
          </Route>
          <Route path="/showcase">
            <Showcase/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Redirect from='/logout' to="/" />
        </Switch>
      </Content>
      <Footer></Footer>
    </Router>
  );
}

export default App;
