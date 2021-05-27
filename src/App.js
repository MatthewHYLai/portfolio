import React, { Component, useEffect } from 'react';
// import logo from './logo.svg';
import './css/App.css';
import './scss/common.scss';
import './scss/tablet.scss';
import './scss/mobile.scss';
import './scss/slick.scss';
import './scss/slick-theme.scss';
import Header from './components/Header';
import {
  BrowserRouter,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import ScrollProgressBar from './components/ScrollProgressBar';
import Intro from './components/Intro';
import Particles from 'react-particles-js';
import Contacts from './views/Contacts';


// import locomotiveScroll from "locomotive-scroll";

const name = 'Matthew'
const heading = <h1>Hello, {name}</h1>

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

class App extends Component {

  render(){

    return (
      <BrowserRouter>

        <div className="App">
          <div className="cursor cursor--small circle-cursor circle-cursor--inner">
            <span className="clickText">Click</span>
            <span className="dragText" >Drag</span>
          </div>
          {/* <canvas className="cursor cursor--canvas circle-cursor circle-cursor--outer" resize></canvas> */}
          <Intro />
          <div className="bgParticles">
            <Particles 
              params={{ 
                "particles": {
                  "number": {
                    "value": 120,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": ""
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/download.png",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 80,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 300,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "window",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 800,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 800,
                      "size": 80,
                      "duration": 2,
                      "opacity": 0.8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 400,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
        
              }} 
              id="particles" className="particles"
            /> 
            {/* <div id="particles" className="particles"></div> */}
            <div id="vector1" className="vector"></div>
            <div id="vector2" className="vector"></div>
            <div id="vector3" className="vector"></div>
            <div id="vector4" className="vector"></div>
            <div id="vector5" className="vector"></div>
            <div id="vector6" className="vector mobile-hide"></div>
            <div id="vector7" className="vector mobile-hide"></div>
            <div id="vector8" className="vector mobile-hide"></div>
            <div id="vector9" className="vector mobile-hide"></div>
            <div id="vector10" className="vector mobile-hide"></div>
          </div>
          <div className="loadingLogoWrap">
            <img src="./img/logo.png" alt=""  className="loadingLogo"/>
          </div>
          <ScrollProgressBar />
          <Header />
  
          <div className="main">
            <AnimatePresence>
              <Switch>
    
                <Route 
                  exact path="/" 
                  render={
                    props => <Home {...props} title="Frontend Developer <br/> Matthew H Y Lai"/>
                  } 
                  />
                <Route 
                  path="/about" 
                  render={
                    props => <About {...props} title="About Me"/>
                  }
                />
                <Route 
                  path="/projects" 
                  render={
                    props => <Projects {...props} title="Projects"/>
                  }
                />
                <Route 
                  path="/contacts" 
                  render={
                    props => <Contacts {...props} title="Contacts"/>
                  }
                />
              </Switch> 
            </AnimatePresence>   
          </div>

        </div>

      </BrowserRouter>
      
    );
  }
  
}

export default App