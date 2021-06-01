import {Link} from 'react-router-dom'
import { Redirect, Route, Router} from 'react-router-dom'
import './App.css';
import Portfolio from './Pages/Portfolio'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="App">
      <Route 
      exact path="/"
      render={() => {
        return <Home />
      }}
      />
      <Route 
      path="/Portfolio"
      render={() => {
        return <Portfolio />
      }}
      />
      <Route
      path="/AboutMe"
      render={() => {
        return <AboutMe />
      }}
      />
      <Route
      path="/Contact"
      render={() => {
        return <Contact />
      }}
      />
    </div>
  );
}

export default App;
