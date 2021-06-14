import {Link} from 'react-router-dom'
import { Redirect, Route, Router} from 'react-router-dom'
import './App.css';
import Portfolio from './Pages/Portfolio'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Construction from './Pages/Construction'

function App() {
  return (
    <div className="App">
      <Route
      path="/Construction" 
      render={() => {
        return <Construction />
      }}
      />
      <Route 
       path="/Home"
      render={() => {
        return <Construction />
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
        return <Construction />
      }}
      />
    </div>
  );
}

export default App;
