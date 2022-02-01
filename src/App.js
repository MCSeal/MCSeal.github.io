import { React } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { useSpring, animated } from 'react-spring';

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
      </div>
    </div>
  );
}

export default App;