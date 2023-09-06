import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Exp from './components/experience/exp';
// import Testi from './components/Testi/Testi';
import Services from './components/Services/Services';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';
import PortProjects from './components/PortProjects/PortProjects';
const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Exp/>
    <Services/>
    <PortProjects/>
    
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App