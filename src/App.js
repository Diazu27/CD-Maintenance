import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {React, useEffect} from 'react'
import ReactGA from 'react-ga';
//Import components
import Navbar from './Componentes/Navbar'
import Home from './Componentes/Home';
import Footer from './Componentes/Footer'


function App() {

  useEffect(() => {
    ReactGA.initialize('G-FDXQC62C0R');
    ReactGA.pageview('/CDHOME')
  });

  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component = {Home}/>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
