// import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Footer></Footer>
    </Router>
  );
}

export default App;
