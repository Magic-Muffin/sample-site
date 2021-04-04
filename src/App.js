// import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Forum from './pages/Forum';
import Showcase from './pages/Showcase';
import Signup from './pages/Signup';
import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
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
      </Switch>
    </Router>
  );
}

export default App;
