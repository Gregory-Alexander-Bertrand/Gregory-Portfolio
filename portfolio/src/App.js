import {Link} from 'react-router-dom'
import { Redirect, Route, Router} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Skills from './Components/Skills'
import AboutMe from './Pages/AboutMe'
// import Construction from './Pages/Construction'

function App() {
  return (
    <div className="App">
      {/* <Route
      exact path="/" 
      render={() => {
        return <Construction />
      }}
      /> */}
      <Home />
      <Portfolio />
      <Skills />
      <AboutMe />
    </div>
  );
}

export default App;
