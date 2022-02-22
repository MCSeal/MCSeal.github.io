import { React } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useSpring, animated } from 'react-spring';
import './data/fonts/OpenSans-Regular.ttf';

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />

      <div className="home-section">
        <About />
        <Projects />
      </div>
      <div className="secondary-section">
        <Skills />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
